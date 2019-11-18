import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from '~/components/AsyncSelect';

import Button from '~/components/UI/Button';
import { Input } from '~/styles/pages/question';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import { updateUserRequest } from '~/store/modules/user/actions';
import withAuth from '~/hoc/withAuth';

const Async = styled(AsyncSelect)`
  margin-top: 1.15rem;
  width: 100%;
`;

function Profile() {
  const dispatch = useDispatch();
  const { loading: reqLoading, profile } = useSelector(state => state.user);

  const [loading, setLoading] = React.useState(true);
  const [selectedInst, setSelectedInstitution] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(false);
  const [institutions, setInstitutions] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [enrollment, setEnrollment] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    async function loadInfo() {
      const {
        data: {
          student,
          institutions,
          courses
        }
      } = await api.get(`/students/${profile.id}`);

      const { name, email, enrollment, course } = student;
      const { id, name: courseName, institution } = course;

      setName(name);
      setEmail(email);
      setEnrollment(enrollment);
      setInstitutions(institutions);
      setCourses(courses);
      setSelectedCourse({
        value: id,
        label: courseName,
      });
      setSelectedInstitution({
        value: institution.id,
        label: institution.tradingName,
      });
      setLoading(false);
    }

    loadInfo();
  }, []);

  async function handleInstitutionChange(option) {
    setSelectedInstitution(option);

    const { data } = await api.get(`/courses/institution/${option.value}`);
    const auxData = data.map(item => ({
      label: item.name,
      value: item.id,
    }));

    setCourses(auxData);
  };

  function handleCourseChange(option) {
    setSelectedCourse(option);
  };

  function filterInstitutions(inputValue) {
    return institutions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  function filterCourses(inputValue) {
    return courses.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  async function loadInstitutions(inputValue) {
    if (institutions.length === 0) {
      let { data } = await api.get('/institutions');
      const auxData = data.map(item => ({
        label: item.tradingName,
        value: item.id,
      }));
      setInstitutions(auxData);
      return auxData;
    }
    return filterInstitutions(inputValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !selectedCourse || !enrollment) return;
    dispatch(updateUserRequest(name, email, password, enrollment, selectedCourse.value, profile.id));
  }

  return (
    <DefaultLayout withoutAside>
      {loading ? (
        <p>Carregando informações...</p>
      ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Input
              name="name"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Async
              cacheOptions
              defaultOptions={institutions}
              placeholder="Instituição"
              loadOptions={loadInstitutions}
              options={institutions}
              value={selectedInst}
              onChange={handleInstitutionChange}
              loadingMessage={() => "Carregando instituições"}
              noOptionsMessage={() => "Instituição não encontrada"}
            />
            {selectedInst && (
              <Async
                value={selectedCourse}
                defaultOptions={courses}
                options={courses}
                loadOptions={filterCourses}
                onChange={handleCourseChange}
                placeholder="Curso"
                loadingMessage={() => "Carregando cursos"}
                noOptionsMessage={() => "Curso não encontrado"}
              />
            )}
            <Input
              type="text"
              style={{
                marginTop: '1.15rem'
              }}
              placeholder="Matrícula"
              value={enrollment}
              onChange={(e) => setEnrollment(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              text={reqLoading ? 'Carregando...' : 'Atualizar perfil'}
            />
          </form>
        )}
    </DefaultLayout>
  );
}

export default withAuth(Profile);
