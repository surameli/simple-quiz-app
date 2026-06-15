import { useState, useCallback } from "react";
import "./App.css";





import allquestions from "./data/question";
import StartScreen from "./components/startscreen";
import Quiz from "./components/quiz";
import Result from "./components/Result";
import ReviewAnswer from "./components/ReviewAnswer";


function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);



}



export default function App() {
  const [screen, setScreen] = useState("start"); 
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timedOut, setTimedOut] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  
  function startQuiz() {
    const filtered = shuffle(allquestions.filter((q) => q.difficulty === difficulty));
    setQuestions(filtered);
    setCurrentIndex(0);
    setSelected(null);
    setTimedOut(false);
    setScore(0);
    setUserAnswers([]);
    setScreen("quiz");
  }

 
  const handleAnswer = useCallback(
    (option) => {
      
      if (selected !== null || timedOut) return;

      if (option === null) {
       
        setTimedOut(true);
        setUserAnswers((prev) => [...prev, null]);
      } else {
        setSelected(option);
        if (option === questions[currentIndex].answer) {
          setScore((s) => s + 1);
        }
        setUserAnswers((prev) => [...prev, option]);
      }
    },
    [selected, timedOut, questions, currentIndex]
  );



  
 
  function handleNext() {
    if (currentIndex === questions.length - 1) {
      setScreen("result");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setTimedOut(false);
    }
  }

 
  function handleRestart() {
    setDifficulty("");
    setScreen("start");
  }

  
  if (screen === "start") {
    return (
      <StartScreen
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        startQuiz={startQuiz}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <Quiz
        questions={questions}
        currentIndex={currentIndex}
        selected={selected}
        timedOut={timedOut}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    );
  }

  if (screen === "result") {
    return (
      <Result
        score={score}
        total={questions.length}
        difficulty={difficulty}
        userAnswers={userAnswers}
        questions={questions}
        onRestart={handleRestart}
        onReview={() => setScreen("review")}
      />
    );
  }

  if (screen === "review") {
    return (
      <ReviewAnswer
        questions={questions}
        userAnswers={userAnswers}
        onBack={() => setScreen("result")}
      />
    );
  }
}
