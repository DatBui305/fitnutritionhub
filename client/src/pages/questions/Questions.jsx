import React, { useEffect, useState } from "react";
import SideBar from "../../layout/sidebar/SideBar";
import SideBarRight from "../../layout/sidebar/SideBarRight";
import QuestionItemSmall from "../../components/questionItem/QuestionItemSmall";
import axios from "axios";

const Questions = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/question`
        );
        if (response.data.success) {
          setQuestions(response.data.questions);
          console.log(response.data.questions);
        } else {
          console.error("Failed to fetch posts:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setErrorMessage("Failed to load questions. Please try again later.");
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="w-full bg-[#F2F7FB] flex flex-row justify-between">
      <SideBar />
      <div>
        {errorMessage && (
          <div className="text-red-500 text-center my-4">{errorMessage}</div>
        )}
        {questions.map((question) => (
          <QuestionItemSmall
            _id={question._id}
            title={question.title}
            views={question.views}
            idAuthor={question.idAuthor}
            tags={question.tags}
            createdAt={question.createdAt}
            comments={question.comments}
            key={question._id}
          />
        ))}
      </div>
      <SideBarRight />
    </div>
  );
};

export default Questions;
