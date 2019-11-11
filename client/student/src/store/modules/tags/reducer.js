import produce from 'immer';

const INITIAL_STATE = {
  tags: [],
  loading: true,
}

export default function tags(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@tags/LOAD_TAGS_SUCCESS': {
        draft.loading = false;
        draft.tags = action.payload.tags;
        break;
      }
    }
  })
}
