import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { injectIntl } from 'react-intl';
import AsyncSelect from '~/components/AsyncSelect';

import { AuthLayout } from '~/components/Layout';
import Button from '~/components/UI/Button';
import Input from '~/components/UI/Input';

import api from '~/services/api';

import { signUpRequest } from '~/store/modules/user/actions';

function Signup({ intl: { messages } }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  const [selectedInst, setSelectedInstitution] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(false);
  const [institutions, setInstitutions] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [enrollment, setEnrollment] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    dispatch(signUpRequest(name, email, password, enrollment, selectedCourse.value));
  }

  return (
    <AuthLayout
      link="/signin"
      linkMessage={messages['signup.have_an_account']}
      onFormSubmit={handleSubmit}
    >
      <Input
        name="name"
        type="text"
        placeholder={messages['signup.name']}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="email"
        type="email"
        placeholder={messages['signup.email']}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AsyncSelect
        cacheOptions
        defaultOptions={institutions}
        placeholder="Escolha sua instituição"
        loadOptions={loadInstitutions}
        options={institutions}
        value={selectedInst}
        onChange={handleInstitutionChange}
        loadingMessage={() => "Carregando instituições"}
        noOptionsMessage={() => "Instituição não encontrada"}
      />
      {selectedInst && (
        <AsyncSelect
          value={selectedCourse}
          defaultOptions={courses}
          options={courses}
          loadOptions={filterCourses}
          onChange={handleCourseChange}
          placeholder="Escolha o seu curso"
          loadingMessage={() => "Carregando cursos"}
          noOptionsMessage={() => "Curso não encontrado"}
        />
      )}
      <Input
        name="enrollment"
        type="text"
        placeholder="Digite sua matrícula"
        value={enrollment}
        onChange={(e) => setEnrollment(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder={messages['signup.password']}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        text={loading ? 'Carregando...' : messages['signup.register']}
      />
    </AuthLayout>
  );
}

export default injectIntl(Signup);
