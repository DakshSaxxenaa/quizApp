import { useEffect, useState } from "react";

import quiz from "../utils/quiz.js";
import Question from "../components/Question.jsx";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [domain, setDomain] = useState(
    localStorage.getItem("studentData")
      ? JSON.parse(localStorage.getItem("studentData")).domain
      : "",
  );
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "QCG IITR - Quiz";
    if (localStorage.getItem("studentData") === null) {
      navigate("/form");
    }
  }, []);

  const questions = quiz.find((item) => item.name === domain)?.questions || [];

  if (questions.length === 0) return;

  const markAttempted = (index) => {
    setAttempted((prev) => ({ ...prev, [index]: true }));
  };

  const handleSubmit = () => {
    const attemptedCount = Object.keys(attempted).length;
    if (attemptedCount < questions.length) {
      alert(
        `Please answer all questions. ${questions.length - attemptedCount} question(s) remaining.`,
      );
      return;
    }
    localStorage.setItem(
      "quizScore",
      JSON.stringify({ score, total: questions.length }),
    );
    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20 sm:pt-24 md:pt-28 pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            {domain.toUpperCase()} Quiz
          </h1>
          <p className="text-sm sm:text-base text-[#c434b8]">
            Answer all questions carefully
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {questions.map((ques, index) => (
            <Question
              key={index}
              ques={ques}
              index={index}
              score={score}
              setScore={setScore}
              markAttempted={markAttempted}
            />
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-linear-to-r from-[#c434b8] to-[#8b2fc9] text-white font-semibold py-3 sm:py-3.5 rounded-xl hover:from-[#a82a9a] hover:to-[#7526a8] transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            Submit Quiz
          </button>
          <p className="text-center text-gray-400 text-sm mt-3">
            {Object.keys(attempted).length}/{questions.length} questions
            answered
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
