import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer, setMessage } from '../state/action-creators';

export function Quiz(props) {

  const { quiz, selectedAnswer, fetchQuiz, selectAnswer, setMessage } = props;

  const handleSubmit = e => {
    e.preventDefault();
    postAnswer(quiz.quiz_id, selectedAnswer);
  };

  const handleSelection = e => {
    setMessage('');
    selectedAnswer(e.target.id);
  }

  useEffect(() => {
    if(!quiz) fetchQuiz();
  }, []);

  const checkIfSelected = idx => {
    if(selectedAnswer === quiz.answers[idx].answer_id) return true;
    return false;
  }


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={selectedAnswer === null ? true: false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
