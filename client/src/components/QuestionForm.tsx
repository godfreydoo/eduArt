import React, {useEffect, useState} from 'react';

interface Props {
  id: number;
  setQuizQuestions: (prevQuestions: any) => void;
}

interface Object {
  Number: number,
  Question: string,
  Type: string,
  Answer: string,
}

const Form: React.FC<Props> = ({id, setQuizQuestions}) => {

  const [questionDetails, setQuestionDetails] = useState<any>({
    Number: id,
    Question: '',
    Type: '',
    Answer: '',
  });

  useEffect(() => {
    setQuizQuestions((prevQuestion: Array<object>) => {return {...prevQuestion, [id]: questionDetails}});
  }, [questionDetails])

  const updateQuestionDetails = (e: any) => {
    setQuestionDetails((prevDetails: Array<object>) => {return {...prevDetails, [e.target.name]: e.target.value}});
  }

  return (
    <div key={id} className='question-card'>
      <div>
        Number: {id}
      </div>

      <div>
        <label>Question
          <textarea rows={5} cols={33} name="Question" value={questionDetails.Question} onChange={updateQuestionDetails}/>
        </label>
      </div>

      <div>
        <label>Type
          <select name="Type" value={questionDetails.Type} onChange={updateQuestionDetails}>
            <option value="number">Number</option>
            <option value="string">Text</option>

          </select>
        </label>
      </div>

      <div>
        <label>Answer
          <input type="text" name="Answer" value={questionDetails.Answer} onChange={updateQuestionDetails}/>
        </label>
      </div>
    </div>
  )
}

export default Form;