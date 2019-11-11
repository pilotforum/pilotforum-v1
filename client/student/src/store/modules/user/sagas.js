import { takeLatest, call, put, all } from 'redux-saga/effects';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { signUpSuccess } from './actions';
import { signFailure } from '../auth/actions';

import api from '~/services/api';

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      userName: name,
      userType: "aluno",
      email,
      password,
    });

    yield put(signUpSuccess());

    Router.push('/signin');
    toast.info('Você precisa fazer login para começar a usar o Pilot Forum.')
  } catch (err) {
    toast.error('Ocorreu um erro ao criar a sua conta.');
    yield put(signFailure());
  }
}


export default all([
  takeLatest('@user/SIGN_UP_REQUEST', signUp)
]);
