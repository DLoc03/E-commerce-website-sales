import axios from "axios";

export const loginUser = async (data) => {
  console.log("Data being sent:", data); // Log để kiểm tra
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-in`,
    data
  );
  return res.data;
};
