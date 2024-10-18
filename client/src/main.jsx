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
import { AuthProvider } from "./context/AuthContext";
import Personal from "./pages/user/Personal";
import Email from "./pages/user/Email";
import Contact from "./pages/user/Contact";
import CreateQuestion from "./pages/createQuestion/CreateQuestion";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Questions from "./pages/questions/Questions";
import AttributesItem from "./components/userInformation/AttributesItem";
import AiRecommendationItem from "./components/userInformation/AiRecommendationItem";
import Password from "./pages/user/Password";
import QuestionDetail from "./pages/questionDetail/QuestionDetail";
import QuestionItemDetail from "./components/questionItem/QuestionItemDetail";

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
      { path: "question/questiondetail/:qid", element: <QuestionDetail /> },
      { path: "user/personal", element: <Personal /> }, //OK
      { path: "user/email", element: <Email /> },
      { path: "user/contact", element: <Contact /> }, //OK
      { path: "user/password", element: <Password /> },
      { path: "test", element: <QuestionItemDetail /> },
    ],
  },
  { path: "/signin", element: <SignIn /> }, //OK
  { path: "/signup", element: <SignUp /> }, //OK

  { path: "/attributes", element: <AiRecommendationItem /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
