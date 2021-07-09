import React from 'react';
import AnswerForm from './AnswerForm';

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
          options={question.options}
          handleScore={handleScore} />
      </div>
    </div>
  )
}

export default QuestionListEntry;