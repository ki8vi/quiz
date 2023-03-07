
import './App.css';
import {useState} from "react";
import {questions} from './data';




function App() {


const [currentQuestion, setCarrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);


const handleAnswerOptionClick = (isCorrect) => {
  if(isCorrect) {
      setScore(score+1)
  }
  const nextQuestion = currentQuestion+1;
  if (nextQuestion<questions.length) {
    setCarrentQuestion(nextQuestion)
  } else {
    setShowScore(true)
  }
}
const refresh = () => {
  setCarrentQuestion(0);
  setScore(0);
  setShowScore(false)
}

  return (
       
    <div className="app">


      {
        showScore
        ? <div className='section__score'>
        <div>Правильных ответов {score} из {questions.length}</div>
        <button className='refresh__btn' onClick ={refresh}>Начать сначала</button>
        <div>{showScore}</div>
      </div>
        :<div className="quiz">
        <div className="question__section">
          <div className="question__count">
            <span>Вопрос {currentQuestion + 1}</span> /{questions.length}
          </div>
          <div className="question__text">{questions[currentQuestion].questionText}</div>
        </div>
        <div className="answer__section">
         {questions[currentQuestion].answerOptions.map(item => (
          <button onClick = {() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
         ))}
        </div>
      </div>
      
      
      
      
      
      
      }

      


      


    </div>
    
  );
}

export default App;
