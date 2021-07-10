import Dashboard from "./views/pages/Dashboard";
import Posts from "./views/components/posts/Posts";
import AddPost from "./views/components/posts/AddPost";

const routes = [
  {
    path: "/home",
    title: "Home",
    icon: "",
    exact: true,
    component: <Dashboard />,
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
    path: "/postsdsaf",
    title: "Posts",
    icon: "",
    children: [
      {
        path: "/posts/list",
        title: "List",
        icon: "",
        component: <Posts />,
      },
      {
        path: "/posts/add",
        title: "Add",
        icon: "",
        component: <AddPost />,
      },
    ],
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
