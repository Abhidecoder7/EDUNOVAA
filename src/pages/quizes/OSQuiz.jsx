import React, { useState } from "react";
import quizData from "../data/quizData.json"; // Import your quiz data JSON file
import "../../fonts/stylesheet.css";

function OSQuiz() {
  const [userResponses, setUserResponses] = useState({}); // State to store user responses

  const handleAnswer = (questionId, selectedOption) => {
    const correctAnswer = quizData.questions.find(
      (question) => question.id === questionId
    ).answer;
    setUserResponses({
      ...userResponses,
      [questionId]: {
        selectedOption,
        correct: selectedOption === correctAnswer,
      },
    });
  };

  return (
    <div className="bg-white">
    <div className="container mx-auto py-8 px-60 text-black">
      <h1 className="text-4xl font-bold mb-8 Apercu-Bold">Operating Systems</h1>
      {quizData.questions.map((question) => (
        <div
          key={question.id}
          className="mb-8 p-4 rounded-[5px] bg-blue-5 border border-gray-400"
        >
          <h2 className="text-xl text-black Apercu-Bold mb-4">{question.question}</h2>
          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option) => (
              <button
                key={option}
                className={`p-2 rounded-md border border-gray-400 h-auto py-4 text-left pl-6 Apercu-Medium text-xl bg-white text-pure-greys-800 outline-none ${
                  userResponses[question.id] !== undefined &&
                  userResponses[question.id].selectedOption === option
                    ? userResponses[question.id].correct
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "hover:bg-gray-200"
                } ${
                  userResponses[question.id] !== undefined &&
                  userResponses[question.id].selectedOption === option
                    ? "pointer-events-none"
                    : ""
                }`}
                onClick={() => handleAnswer(question.id, option)}
                disabled={userResponses[question.id] !== undefined}
                style={{
                  backgroundColor:
                    userResponses[question.id] !== undefined &&
                    userResponses[question.id].selectedOption === option
                      ? userResponses[question.id].correct
                        ? "#10B981"
                        : "#EF4444"
                      : "",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {userResponses[question.id] && (
            <div className="mt-4">
              <p
                className={`text-xl ${
                  userResponses[question.id].correct
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {userResponses[question.id].correct
                  ? "Correct Answer!"
                  : "Incorrect Answer!"}
              </p>
              <p className="text-gray-700 text-xl mt-2 Apercu-Regular">{question.explanation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default OSQuiz;
