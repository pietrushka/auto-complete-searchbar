
const INITIAL_STATE = {
  loading: false,
  query: '',
  users: [],
  matchedUsers: []
}

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

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
    case 'FIND_MATCHES':
      const { query } = payload

      let newMatchedUsers = []

      if (query.length > 0) {
        const matchCondition = (name) => {
          const nameLowercase = name.toLowerCase()
          const queryLowercase = query.toLowerCase()
          const nameArr = nameLowercase.split(' ')

          console.log({ nameArr })
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
