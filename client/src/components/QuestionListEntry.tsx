import React from 'react';
import AnswerForm from './AnswerForm';

interface Questions {
  Number: number;
  Question: string;
  Type: string;
  Answer: string;
  A: string;
  B: string;
  C: string;
  D: string;
}

interface Props {
  question: any;
  handleScore: () => void;
}

const QuestionListEntry: React.FC<Props> = ({question, handleScore}) => {
  console.log(question);
  return (
    <div className="question">
      <div className="question-number">Question {question.number}</div>
      <div className="question-question">{question.question}</div>
      <div>
        <AnswerForm
          type={question.type}
          answer={question.answer}
          selections={question.options}
          handleScore={handleScore} />
      </div>
    </div>
  )
}

export default QuestionListEntry;