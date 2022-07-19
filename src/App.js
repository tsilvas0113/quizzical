import React from "react";

function App() {

  const [gameStart, setGameStart] = React.useState(false)

  function startNewGame() {
    setGameStart(!gameStart)
  }

  return (
    <main>
    {
      gameStart
      ?
      <div>
        <h1>Game Screen</h1>
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
