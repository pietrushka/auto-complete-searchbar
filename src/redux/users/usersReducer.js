
const INITIAL_STATE = {
  loading: false,
  users: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: payload.users
      }
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
};

export default usersReducer;