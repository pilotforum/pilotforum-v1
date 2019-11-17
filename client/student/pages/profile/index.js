import React, { useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from '~/components/AsyncSelect';

import Button from '~/components/UI/Button';
import { Input } from '~/styles/pages/question';

import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';

import { updateUserRequest } from '~/store/modules/user/actions';
import { toast } from 'react-toastify';

const Async = styled(AsyncSelect)`
  margin-top: 1.15rem;
  width: 100%;
`;

export default function Profile() {
  const dispatch = useDispatch();
  const { loading, profile } = useSelector(state => state.user);

  const [selectedInst, setSelectedInstitution] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(false);
  const [institutions, setInstitutions] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [enrollment, setEnrollment] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    if (!profile) {
      toast.info('Você precisa estar logado para acessar o seu perfil.');
      Router.back();
    }
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
    if (!name || !email || !password || !selectedCourse || !enrollment) return;
    dispatch(updateUserRequest(name, email, password, enrollment, selectedCourse.value, profile.id));
  }

  return (
    <DefaultLayout withoutAside>
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
          style={{
            marginTop: '1.15rem'
          }}
          text={loading ? 'Carregando...' : 'Atualizar perfil'}
        />
      </form>
    </DefaultLayout>
  );
}
