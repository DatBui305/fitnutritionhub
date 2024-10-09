import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout/Layout";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import PostDetail from "./pages/postDetail/PostDetail";
import CreatePost from "./pages/createPost/CreatePost";
import Login from "./pages/auth/Login";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Personal from "./pages/user/Personal";
import Email from "./pages/user/Email";
import Contact from "./pages/user/Contact";
import Password from "./pages/user/Password";
import UserManager from "./pages/manager/UserManager";
import Test from "./components/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "posts/",
        element: <Posts />,
      },
      { path: "posts/:id", element: <PostDetail /> },
      // { path: 'register', element: <Register /> },
      // { path: "login", element: <Login /> },
      // { path: 'profile/:id', element: <UserProfile /> },
      // { path: 'authors', element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      // { path: 'posts/:id/edit', element: <EditPost /> },
      // { path: 'mypost/:id', element: <Dashboard /> },
      // { path: 'posts/users/:id', element: <AuthorPosts /> },
      // { path: 'posts/categories/:category', element: <CategoryPosts /> },
      // { path: 'logout', element: <Logout /> },
    ],
  },
  {
    path: "/login",
    element: <Login />, // Không sử dụng layout cho trang đăng nhập
  },
  { path: "user/personal", element: <Personal /> },
  { path: "user/email", element: <Email /> },
  { path: "user/contact", element: <Contact /> },
  { path: "user/password", element: <Password /> },
  { path: "user/manager", element: <UserManager /> },
  { path: "test", element: <Test /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
