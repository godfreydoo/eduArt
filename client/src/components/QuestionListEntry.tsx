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
  return (
    <div className="question">
      <div className="question-number">Question {question.Number}</div>
      <div className="question-question">{question.Question}</div>
      <div>
        <AnswerForm
          type={question.Type}
          answer={question.Answer}
          selections={[question.A, question.B, question.C, question.D]}
          handleScore={handleScore} />
      </div>
    </div>
  )
}

export default QuestionListEntry;