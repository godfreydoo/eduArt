import React from 'react';
import QuestionListEntry from './QuestionListEntry';

interface Props {
  questions: Array<object>;
  handleScore: () => void;
}

const QuestionList: React.FC<Props> = ({questions, handleScore}) => {

  return (
    <div>
      {questions.map((question, index) =>
        <QuestionListEntry
          question={question}
          key={index}
          handleScore={handleScore} />
      )}
    </div>
  )
}

export default QuestionList;