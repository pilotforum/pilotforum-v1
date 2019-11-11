import { all, takeLatest, call, put } from 'redux-saga/effects';

import { loadTagsSuccess } from './actions';
import api from '~/services/api';

export function* loadTags() {
  try {
    const { data } = yield call(api.get, '/tags');
    let tags = [...data];

    if (tags.length > 5) {
      tags = tags.slice(0, 5);
    }

    yield put(loadTagsSuccess(tags));
  } catch (err) {
    console.error('Ocorreu um erro ao carregar as tags.');
  }
}

export default all([takeLatest('@tags/LOAD_TAGS_REQUEST', loadTags)]);
