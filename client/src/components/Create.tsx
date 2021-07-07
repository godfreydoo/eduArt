import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios, { AxiosRequestConfig } from 'axios';

const Create: React.FC = () => {

  const [count, setCount] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    createQuestion();
  }, [count])


  const createQuiz = async () => {
    console.log(form);
    const config: AxiosRequestConfig = {
      method: 'post',
      url: '/api/quiz',
      data: Object.values(form),
      headers: {
        'content-type': 'application/json'
      }
    }
    try {
      let data = await axios(config);
      console.log(data);
    } catch(err) {
      console.error(err);
    }
  }

  const createQuestion = () => {
    const question = (
      <div key={count}>
        <Form id={count} setForm={setForm}/>
      </div>
    )
    setQuestionList(prevQuestions => [...prevQuestions, question]);
  }

  return (
    <div>
      {questionList}
      <input type="button" value="Add a question" onClick={() => setCount(prevCount => prevCount + 1)}/>
      <input type="button" value="Create quiz" onClick={createQuiz}/>
    </div>
  )
}

export default Create;