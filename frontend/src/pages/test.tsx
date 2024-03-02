import Image from "next/image";
import { useState } from 'react';
import styles from './Test.module.css';
import Router from "next/router";
import Header from "@/components/Header";

export default function Test() {
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    Router.push("/results");
  };

  const questions = [
    {
      question: "When learning something new, I prefer to read about it.",
      options: ["Most like me", "Undecided", "Not like me"]
    },
    {
      question: "When learning something new, I prefer to practice it.",
      options: ["Most like me", "Undecided", "Not like me"]
    },
    {
      question: "I learn best when I listen to someone explain it.",
      options: ["Most like me", "Undecided", "Not like me"]
    },
    {
      question: "I learn best when I watch a demonstration.",
      options: ["Most like me", "Undecided", "Not like me"]
    },
    {
      question: "I learn best when I teach it to someone else.",
      options: ["Most like me", "Undecided", "Not like me"]
    },
  ];

  return (
    <main className="container">
      <Header name={"Learning Type Quiz"} />
      <div className={styles.content}>
        {questions.map((question, index) => (
          <div key={index} className={styles.question}>
            <p>{question.question}</p>
            <div className={styles.options}>
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswer(index, option)}
                  className={styles.option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleSubmit} className={styles.submitButton}>
          Submit
        </button>
      </div>
    </main>
  );
}
