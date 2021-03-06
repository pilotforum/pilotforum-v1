export function updateUserRequest(name, email, password, enrollment, course, userId) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: { name, email, password, enrollment, course, userId },
  };
}

export function signUpRequest(name, email, password, enrollment, course) {
  return {
    type: '@user/SIGN_UP_REQUEST',
    payload: { name, email, password, enrollment, course },
  };
}

export function signUpSuccess() {
  return {
    type: '@user/SIGN_UP_SUCCESS',
  };
}

export function signUpFailure() {
  return {
    type: '@user/SIGN_UP_FAILURE',
  };
}

