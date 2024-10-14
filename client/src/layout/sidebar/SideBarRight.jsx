import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionItemTini from "../../components/questionItem/QuestionItemTini";

const SideBarRight = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/question`
        );
        if (response.data.success) {
          const sortedQuestions = response.data.questions.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          // Lấy 3 câu hỏi mới nhất
          const latestQuestions = sortedQuestions.slice(0, 3);
          setQuestions(latestQuestions);
          console.log(latestQuestions);
        } else {
          console.error("Failed to fetch questions:", response.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
        setErrorMessage("Failed to load questions. Please try again later.");
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="w-full bg-[#F2F7FB] h-screen">
      <h1 className="px-10 text-3xl font-wixmadefor text-[#6374AE] font-bold">
        Newest <br /> questions
      </h1>
      <div className="px-10 py-5">
        <hr className="w-[330px] h-[3px] bg-[#9CB6DD] rounded-[5px]" />
      </div>

      <div>
        {questions.map((question) => (
          <QuestionItemTini
            _id={question._id}
            title={question.title}
            idAuthor={question.idAuthor}
            createdAt={question.createdAt}
            key={question._id}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBarRight;
