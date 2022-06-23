import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageQue, setPerPageQue] = useState(5);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    startIndex: 0,
    endIndex: perPageQue,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ startIndex: start, endIndex: end });
  };
  const answera = useRef();
  const answerb = useRef();
  const answerc = useRef();
  const answerd = useRef();
  const answere = useRef();
  const answerf = useRef();

  useEffect(() => {
    const value = perPageQue * currentPage;
    onPaginationChange(value - perPageQue, value);
  }, [currentPage]);
  const fetchRandomQuestions = async () => {
    setLoading(true);
    await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setTotalPages(Math.ceil(data.length / perPageQue));
      });
    setLoading(false);
  };

  useEffect(() => fetchRandomQuestions(), []);

  const fetchCategoryWiseQuestions = async () => {
    await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&limit=20&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  };
  useEffect(() => fetchCategoryWiseQuestions(), [category]);
  const handleAnswer = (question, answer) => {
    console.log(`${question.correct_answers.answer_[answer]}_correct`);
    if (`${question.correct_answers.answer_[answer]}_correct`) {
      let reff = `answer${answer}`;
      reff.current.style.background = "green";
    }
  };
  return (
    <div className="container mt-4">
      <h1 className="text-primary fw-bold pt-3 pb-4">QuizApp</h1>
      <div className="row g-3">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <span className="loader"></span>
          </div>
        ) : (
          questions
            .slice(pagination.startIndex, pagination.endIndex)
            .map((question) => {
              return (
                <div className="col-6">
                  <div className="card bg-primary border-primary text-light h-100">
                    <div className="card-body d-flex align-items-center">
                      <p className="card-text fw-bold">{question.question}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        onClick={() => handleAnswer(question, "a")}
                        ref={answera}
                      >
                        {question.answers.answer_a}
                      </li>
                      <li
                        className="list-group-item"
                        onClick={() => handleAnswer(question, "b")}
                        ref={answerb}
                      >
                        {question.answers.answer_b}
                      </li>
                      {question.answers.answer_c && (
                        <li
                          className="list-group-item"
                          onClick={() => handleAnswer(question, "c")}
                          ref={answerc}
                        >
                          {question.answers.answer_c}
                        </li>
                      )}

                      {question.answers.answer_d && (
                        <li
                          className="list-group-item"
                          onClick={() => handleAnswer(question, "d")}
                          ref={answerd}
                        >
                          {question.answers.answer_d}
                        </li>
                      )}
                      {question.answers.answer_e && (
                        <li
                          className="list-group-item"
                          onClick={() => handleAnswer(question, "e")}
                          ref={answere}
                        >
                          {question.answers.answer_e}
                        </li>
                      )}
                      {question.answers.answer_f && (
                        <li
                          className="list-group-item"
                          onClick={() => handleAnswer(question, "f")}
                          ref={answerf}
                        >
                          {question.answers.answer_f}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })
        )}
        <div className="d-flex justify-content-between pt-4">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
              debugger;
            }}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span className="fw-bold">{currentPage}</span>
          <button
            className="btn btn-lg btn-primary"
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
