import { number, string } from 'prop-types';
import React, {useEffect, useState} from 'react';

interface Props {
  id: number;
  setForm: (prevQuestions: any) => void;
}

interface Object {
  question: string,
  type: string,
  answer: string,
}

const Form: React.FC<Props> = ({id, setForm}) => {

  const [questionDetails, setQuestionDetails] = useState<Object>({
    question: '',
    type: '',
    answer: '',
  });

  useEffect(() => {
    console.log(questionDetails);
    setForm((prevQuestions: any) => {return {...prevQuestions, [id]: questionDetails}});
  }, [questionDetails])

  const updateQuestionDetails = (e: any) => {
    setQuestionDetails(prevDetails => {return {...prevDetails, [e.target.name]: e.target.value}});
  }

  return (
    <form key={id} className='question-card'>
      <div>
        Number: {id}
      </div>

      <div>
        <label>Question
          <textarea rows={5} cols={33} name="question" value={questionDetails.question} onChange={updateQuestionDetails}/>
        </label>
      </div>

      <div>
        <label>Type
          <select name="type" value={questionDetails.type} onChange={updateQuestionDetails}>
            <option value="number">Number</option>
            <option value="string">Text</option>

          </select>
        </label>
      </div>

      <div>
        <label>Answer
          <input type="text" name="answer" value={questionDetails.answer} onChange={updateQuestionDetails}/>
        </label>
      </div>
    </form>
  )
}

export default Form;