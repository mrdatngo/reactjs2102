const routes = [
  {
    path: "/home",
    title: "Home",
    icon: "",
    exact: true,
    component: "Home",
  },
  {
    path: "/files",
    title: "Files",
    icon: "",
    exact: true,
    component: "This is files",
  },
  {
    path: "/account",
    title: "Account",
    icon: "",
    exact: true,
    component: "This is account",
  },
  {
    path: "/users",
    title: "User",
    icon: "",
    children: [
      {
        path: "/users/tom",
        title: "Tom",
        icon: "",
        component: <p>"This is Tom"</p>,
      },
      {
        path: "/users/bill",
        title: "Bill",
        icon: "",
        component: <p>"This is Bill"</p>,
      },
    ],
  },
];

export default routes;
