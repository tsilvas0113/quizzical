import React from "react";
import { nanoid } from "nanoid"
import Quiz from "./components/Quiz";

function App() {

  const [quizQuestion, setQuizQuestion] = React.useState([])
  const [quizAnswers, setQuizAnswers] = React.useState([])
  const [gameStart, setGameStart] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        return setQuizQuestion(() => data.results.map(item => {
          return {
            value: item.question,
            id: nanoid()
          }
        })),
        setQuizAnswers(() => data.results.map(item => {
          const incorrectArr = item.incorrect_answers.map(item => ({
            value: item, id: nanoid(), isHeld: false
          }))
          const correctAnswer = {value: item.correct_answer, id: nanoid(), isHeld: false, isCorrect: true}
          const randomIndex = Math.floor(Math.random() * 4)
          const allAnswersArr = incorrectArr
          allAnswersArr.splice(randomIndex, 0, correctAnswer)
          return allAnswersArr
        }))
      })
  }, [])
  
  function startNewGame() {
    setGameStart(!gameStart)
  }

  function holdAnswer(id) {
    setQuizAnswers(oldState => oldState.map(answer => {
      return answer.id === id ?
        {...answer, isHeld: !answer.isHeld} :
        answer
    }))
  }

  return (
    <main>
    {
      gameStart
      ?
      <div>
        <h1>reset</h1>
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
