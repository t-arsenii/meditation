import * as Action from '../redux/features/result_reducer'
import { postServerData } from '../helper/helper'
import axios from 'axios'
export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const usePublishResult = () => {
    const publishResult = async (resultData) => {
      try {
        const { result, userId } = resultData;
        const response = await axios.post('http://localhost:3002/api/test/results', resultData);
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error('Error while publishing data');
      }
    };
  
    return publishResult;
  };

