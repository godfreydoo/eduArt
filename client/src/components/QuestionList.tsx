import React from 'react';
import QuestionListEntry from './QuestionListEntry';

interface Props {
  questions: Array<object>;
}

const QuestionList: React.FC<Props> = ({questions}) => {

  return (
    <div>
      {questions.map((question, index) =>
        <QuestionListEntry
          question={question}
          key={index}
        />
      )}
    </div>
  )
}

export default QuestionList;