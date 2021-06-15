const login = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.username == "admin") {
        resolve({
          success: "true",
          username: "admin",
          token: "ya...........",
        });
      } else {
        reject({ success: false });
      }
    }, 1000);
  });
};

export { login };
