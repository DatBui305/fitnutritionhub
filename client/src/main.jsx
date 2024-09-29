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
import QuestionDetail from "./pages/questionDetail/QuestionDetail";

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
      { path: "questions/:id", element: <QuestionDetail /> },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
