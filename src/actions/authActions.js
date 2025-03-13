import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes"; // Correct import

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://apidev.wogom.com/v1/retailer/login",
      { emailid: email, password: password },
      {
        headers: {
          "x-random": "xyz",
          "x-userid": "7185",
          "xyz": "754ad38082d761943b6c95670a38c6ca",
          "x-deviceinfo": "postmen",
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data.token;
    await AsyncStorage.setItem("authToken", token);

    dispatch({ type: LOGIN_SUCCESS, payload: token }); // Ensured type exists
    return true;
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE }); // Using correct type
    return false;
  }
};
