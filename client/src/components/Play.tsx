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
  }, []);

  const fetchQuizzes = async () => {
    try {
      let {data} = await axios('/api/quiz');
      setQuizzes(data);
    } catch(err) {
      console.error(err);
    }
  }

  const handleClickToPlayQuiz = async (data: Document) => {
    setSelectedQuiz(data);
  }

  const deleteQuiz = async (id: string) => {
    const config: AxiosRequestConfig = {
      method: 'delete',
      url: `/api/quiz/${id}`
    }
    try {
      let {data} = await axios(config);
      fetchQuizzes();
    } catch(err) {
      console.error(err);
    }
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
          dataDocument={value}
          id={value._id}
          title={value.title}
          subject={value.subject}
          description={value.description}
          handleClickToPlayQuiz={handleClickToPlayQuiz}
          deleteQuiz={deleteQuiz}/>
      )}
    </section>
  )
}

export default Play;