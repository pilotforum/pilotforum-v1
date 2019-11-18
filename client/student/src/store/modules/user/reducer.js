import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/SIGN_UP_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@user/SIGN_UP_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
