import React, {  useState, useEffect } from 'react';
import QuestionList from '../components/QuestionList';
import axios, { AxiosRequestConfig } from 'axios';

interface Document {
  _id: string,
  user: string,
  questions: Array<object>
}

const Play: React.FC = () => {
  const [quizzes, setQuizzes] = useState<any>([])

  useEffect(() => {
    fetchQuizzes();
  }, [])

  const fetchQuizzes = async () => {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: '/api/quiz',
    }
    try {
      let {data} = await axios(config);
      setQuizzes(data);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div>
      {quizzes.map((value: Document, index: number) => {
        return (
          <div key={value._id}>
            <h2>Random title for this quiz</h2>
            <p>{value.questions.length}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Play;