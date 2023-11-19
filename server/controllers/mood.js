import Mood from "../models/Mood.js";
import User from "../models/User.js";

export const addMoodRecord = ({ userId, date, mood }) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    // Send the mood data to the server with the userId
    const response = await axios.post('/api/addMood', { userId, date, mood });

    if (response.status === 201) {
      // Optionally, update the local state after a successful record addition
      dispatch(fetchMoodData());
      dispatch(setLoading(false));
      dispatch(setError(null));
    } else {
      throw new Error('Failed to add mood record');
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};
export const getMoodData = async (req, res) => {
  try {
    const moodData = await Mood.find();
    res.status(200).json(moodData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

