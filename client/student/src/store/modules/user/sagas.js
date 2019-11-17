import { takeLatest, call, put, all } from 'redux-saga/effects';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { signUpSuccess, signUpFailure } from './actions';

import api from '~/services/api';

export function* signUp({ payload }) {
  try {
    const { name, email, password, enrollment, course } = payload;
    console.log({
      userName: name,
      name,
      email,
      password,
      enrollment,
      courseId: course,
    });

    yield call(api.post, '/students', {
      userName: name,
      name,
      email,
      password,
      enrollment,
      courseId: course,
    });

    Router.push('/signin');
    toast.info('Você precisa fazer login para começar a usar o Pilot Forum.')

    yield put(signUpSuccess());
  } catch (err) {
    toast.error('Ocorreu um erro ao criar a sua conta.');
    yield put(signUpFailure());
  }
}


export default all([
  takeLatest('@user/SIGN_UP_REQUEST', signUp)
]);
