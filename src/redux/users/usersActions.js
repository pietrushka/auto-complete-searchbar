import axios from 'axios';

export const getUsers = () => async dispatch => {
  try {
    dispatch({
      type: 'FETCH_USERS_START'
    })

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = response.data

    console.log({users})

    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      payload: {
        users
      }
    })
  } catch (error) {
    dispatch({
      type: 'FETCH_USERS_FAILURE'
    })
  }
};