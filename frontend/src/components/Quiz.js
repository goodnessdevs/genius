import { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import Themes from "./Themes";
import Authentication from "./Authentication";
import Footer from "./Footer";

const Quiz = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [queries, setQueries] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/quiz`);
      const json = await response.json();

      if (response.ok) {
        setQueries(json);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (queryId, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [queryId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    setScore(totalScore);
    queries.forEach((query) => {
      if (selectedAnswers[query._id] === query.correctOption) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  return (
    <div className={`${theme.bg4} md:ml-52 font-nunito h-full`}>
      <div className="px-12 py-6">
        <div>
          <Authentication />
          <Themes />
        </div>
        <h2
          className={`${theme.text} tracking-widest text-2xl font-bold text-center p-5 animate-slowBounce`}
        >
          QUIZ
        </h2>
        <div className={`text-black bg-gray-400 p-5 rounded-2xl shadow-3xl`}>
          {queries &&
            queries.map((query, index) => (
              <div
                key={query._id}
                className="my-10 p-3 bg-white text-black rounded-md shadow-2xl"
              >
                <h2 className="text-xl mb-2">
                  {index + 1}. {query.question}
                </h2>

                {query.options.map((option) => (
                  <ul>
                    <li key={option} className="bg-purple-200 rounded p-1 my-1">
                      <input
                        type="radio"
                        name={`question-${query._id}`}
                        checked={selectedAnswers[query._id] === option}
                        onChange={() => handleOptionChange(query._id, option)}
                      />
                      <span className="mx-2 tracking-wider font-semibold text-black">
                        {option}
                      </span>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          <button
            className="p-2 bg-gray-800 text-white rounded-sm hover:bg-gray-950"
            onClick={handleSubmit}
          >
            Submit
          </button>

          {score !== null && (
            <h2 className="text-xl font-poppins font-bold my-2">
              Your Score: {score}/{queries.length}
            </h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
