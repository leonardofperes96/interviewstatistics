import { customFetch } from "../../utils/axios";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/register", user);

    return response.data;
  } catch (err) {
    console.log("err!");
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/login", user);

    return response.data;
  } catch (err) {
    console.log("err!");
  }
};
