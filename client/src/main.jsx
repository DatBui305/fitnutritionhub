import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreatePost from "./pages/CreatePost/CreatePost";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <CreatePost /> },
      // { path: 'posts/:id', element: <PostDetail /> },
      // { path: 'register', element: <Register /> },
      // { path: 'login', element: <Login /> },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
