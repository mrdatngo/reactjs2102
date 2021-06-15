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

const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Post 1",
          description: "This is description of post 1",
          author: "MrDat",
        },
        {
          id: 2,
          title: "Post 2",
          description: "This is description of post 2",
          author: "MrDat",
        },
      ]);
    }, 1000);
  });
};

export { login, getPosts };
