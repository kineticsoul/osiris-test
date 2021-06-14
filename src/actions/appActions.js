import { GET_RANDOM_USER, APP_LAYOUT_ERROR } from './types';
import axios from 'axios';

export const getRandomUser = () => async dispatch => {
  
  try {
    const response = await axios.get('https://randomuser.me/api/');

    console.log('RandomUser: ', response.data.results[0]);

    dispatch({
            type: GET_RANDOM_USER,
            payload: response.data.results[0]
        })

    } catch (error) {
        dispatch({
            type: APP_LAYOUT_ERROR,
            payload: error
        })
    }
}