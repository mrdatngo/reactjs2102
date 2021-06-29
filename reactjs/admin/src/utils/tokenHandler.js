let tokenKey = "access_token";

const saveToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export { saveToken, getToken };
