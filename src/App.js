import React from "react";
import { nanoid } from "nanoid"
import Quiz from "./components/Quiz";

function App() {

  const [quizData, setQuizData] = React.useState([])
  const [gameStart, setGameStart] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
  }, [])
  
  function startNewGame() {
    setGameStart(!gameStart)
  }

  const quizElements = quizData.map(quiz => {
    const randomIndex = Math.floor(Math.random() * 3)
    const allAnswers = [...quiz.incorrect_answers]
    allAnswers.splice(randomIndex, 0, quiz.correct_answer)
    return <Quiz
      key={nanoid()}
      question={quiz.question}
      answers={allAnswers}
      />
  })

  return (
    <main>
    {
      gameStart
      ?
      <div>
        {quizElements}
      </div>
      :
      <div className='start-screen'>
        <h1 className='start-screen--title'>Quizzical</h1>
        <h1 className='start-screen--title'>Entertainment: Video Games</h1>
        <p className='start-screen--description'>Hello! Welcome to my Quizzical game: Video Games Edition. Start the quiz and try to correctly answer 10 multiple choice questions about video games. Good luck!</p>
        <button 
          className='start-screen--btn'
          onClick={startNewGame}
          >Start quiz
        </button>
      </div>
    }
    </main>
  );
}

export default App;
