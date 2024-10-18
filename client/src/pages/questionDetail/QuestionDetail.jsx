import SideBarRight from "../../layout/sidebar/SideBarRight";
import QuestionItemDetail from "../../components/questionItem/QuestionItemDetail";
import SideBarRightPost from "../../layout/sidebar/SideBarRightPost";
import SideBarReturn from "../../layout/sidebar/SideBarReturn";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const QuestionDetail = () => {
  const { qid } = useParams();
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        console.log(qid);
        console.log("test");
        const response = await axios.get(
          `http://localhost:5000/api/v1/question/${qid}`
        );
        console.log("Fetched post response:", response);
        setQuestion(response.data.rs);
        console.log(response.data.rs);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
        console.log(error.response);
      }
    };

    fetchQuestion();
  }, [qid]);

  return (
    <div className="w-full bg-[#F2F7FB] flex flex-row justify-between">
      <SideBarReturn />
      <div>
        {/* <NavBarNew /> */}
        <QuestionItemDetail question={question} />
      </div>
      <div className="flex flex-col">
        <SideBarRightPost />
        <SideBarRight />
      </div>
    </div>
  );
};

export default QuestionDetail;
