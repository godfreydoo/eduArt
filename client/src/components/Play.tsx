import React, {  useState, useEffect } from 'react';
import Card from './Card';
import Start from './Start';
import axios, { AxiosRequestConfig } from 'axios';

interface Document {
  _id: string,
  title: string,
  user: string,
  subject: string,
  description: string,
  photoUrl: string,
  questions: Array<object>
}



const Play: React.FC = () => {
  const [quizzes, setQuizzes] = useState<any>([])
  const [selectedQuiz, setSelectedQuiz] = useState<Document>();

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

  const handleClickToPlayQuiz = async (data: Document) => {
    setSelectedQuiz(data);
  }

  if (selectedQuiz) {
    return (
      <Start listOfQuestions={selectedQuiz.questions} img={selectedQuiz.photoUrl}/>
    )
  }
  return (
    <section className="card-container">
      {quizzes.map((value: Document, index: number) =>
        <Card
          key={value._id}
          data-document={value}
          id={value._id}
          title={value.title}
          subject={value.subject}
          description={value.description}
          handleClickToPlayQuiz={handleClickToPlayQuiz}/>
      )}
    </section>
  )
}

export default Play;