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
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Personal from "./pages/user/Personal";
import Email from "./pages/user/Email";
import Contact from "./pages/user/Contact";
import Password from "./pages/user/Password";
import UserManager from "./pages/manager/UserManager";
import Test from "./components/Test";
import HeaderNew from "./layout/header/HeaderNew";
import SideBar from "./layout/sidebar/SideBar";
import NavBarNew from "./layout/navBar/NavBarNew";
import PostItemSmall from "./components/postItem/PostItemSmall";
import PostItemLarge from "./components/postItem/PostItemLarge";
import InputQuestion from "./components/input/InputQuestion";
import SideBarRight from "./layout/sidebar/SideBarRight";
import CreateQuestion from "./pages/createQuestion/CreateQuestion";
import PostItemSuperLarge from "./components/postItem/PostItemSuperLarge";
import SignUp from "./pages/auth/SignUp";
import SideBarUser from "./layout/sidebar/SideBarUser";
import CommentInputNew from "./features/comment/CommentInputNew";
import CommentItemNew from "./features/comment/CommentItemNew";
import LikeAndDislikeNew from "./features/favorite/LikeAndDislikeNew";
import SignIn from "./pages/auth/SignIn";
import Questions from "./pages/questions/Questions";

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
      { path: "question/createquestion", element: <CreateQuestion /> }, //OK
      { path: "create", element: <CreatePost /> },
      { path: "question/questions", element: <Questions /> }, //OK
      { path: "user/personal", element: <Personal /> },
    ],
  },
  { path: "/signin", element: <SignIn /> }, //OK
  { path: "/signup", element: <SignUp /> }, //OK

  { path: "user/personal", element: <Personal /> },
  { path: "user/email", element: <Email /> },
  { path: "user/contact", element: <Contact /> },
  { path: "user/password", element: <Password /> },
  { path: "user/manager", element: <UserManager /> },
  { path: "test", element: <Test /> },
  { path: "header", element: <HeaderNew /> },
  { path: "sidebar", element: <SideBar /> },
  { path: "navbar", element: <NavBarNew /> },
  { path: "postsmall", element: <CommentItemNew /> },
  { path: "like", element: <LikeAndDislikeNew /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
