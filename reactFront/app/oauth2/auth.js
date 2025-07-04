import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const oauth = (code) => {
    const callbackUrl = `${window.location.origin}`;
    console.log(code)
  console.log("Sending")
  return axios.post("https://oauth2.googleapis.com/token", {
    code:code,
    client_id:googleClientId,
    client_secret:googleClientSecret,
    redirect_uri:'http://localhost:3000',
    grant_type:'authorization_code',
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  oauth,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;