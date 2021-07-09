import React from 'react';
import AnswerForm from './AnswerForm';

interface Props {
  question: any;
  handleScore: () => void;
}

const QuestionListEntry: React.FC<Props> = ({question, handleScore}) => {
  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-number">
          Question {question.number}
        </div>
      </div>

      <div className="question-full-view">
        <div className="question-query"> {question.question} </div>
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