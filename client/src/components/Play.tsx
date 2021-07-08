import React, {  useState, useEffect } from 'react';
import Card from './Card';
import axios, { AxiosRequestConfig } from 'axios';

interface Document {
  _id: string,
  title: string,
  user: string,
  subject: string,
  description: string,
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
    <section className="card-container">
      {quizzes.map((value: Document, index: number) => {
        return (
          <Card key={value._id} title={value.title} subject={value.subject} description={value.description}/>
        )
      })}
    </section>
  )
}

export default Play;