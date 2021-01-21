
const INITIAL_STATE = {
  users: [],
  matchedUsers: [],
  query: '',
  error: null
}

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        error: null
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: payload.users
      }
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        error: payload.error
      }
      
    case 'FIND_MATCHES':
      const { query } = payload

      let newMatchedUsers = []

      if (query.length > 0) {
        const matchCondition = (name) => {
          const nameLowercase = name.toLowerCase()
          const queryLowercase = query.toLowerCase()
          const nameArr = nameLowercase.split(' ')

          let result = false

          nameArr.forEach(word => {
            if (word.startsWith(queryLowercase)) result = true
          })

          return result
        }

        newMatchedUsers = state.users.filter(({ name }) => matchCondition(name))
      }

      return {
        ...state,
        query,
        matchedUsers: newMatchedUsers
      }
    default:
      return state
  }
}

export default usersReducer
