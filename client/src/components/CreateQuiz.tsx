import React, { useState, useEffect } from 'react';
import Form from './QuestionForm';
import Images from './Images';
import axios, { AxiosRequestConfig } from 'axios';

interface Quiz {
  title: string,
  subject: string,
  photoUrl: string,
  description: string,
  questions: Array<object>
}

const quizInitialState = {
  title: '',
  subject: '',
  photoUrl: '',
  description: '',
  questions: [],
}

const CreateQuiz: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [questionList, setQuestionList] = useState<Array<object>>([]);
  const [quizQuestions, setQuizQuestions] = useState<object>({});
  const [quizDetails, setQuizDetails] = useState<Quiz>({
    title: '',
    subject: '',
    photoUrl: '',
    description: '',
    questions: [],
  });

  useEffect(() => {
    createQuestion();
  }, [count])

  useEffect(() => {
    setQuizDetails((prevQuizDetails: any) => {return {...prevQuizDetails, questions: Object.values(quizQuestions)}});
  },[quizQuestions])

  const updateQuizDetails = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    setQuizDetails((prevQuizDetails: any) => {return {...prevQuizDetails, [e.target.name]: e.target.value}})
  }

  const validateQuiz = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createQuiz();
  }

  const createQuiz = async () => {
    const config: AxiosRequestConfig = {
      method: 'post',
      url: '/api/quiz',
      data: quizDetails,
      headers: {
        'content-type': 'application/json'
      }
    }
    try {
      let { data } = await axios(config);
      // do something after form is submitted successfully
      if (data) {
        console.log('id from created quiz: ', data);
      }
    } catch(err) {
      console.error(err);
    } finally {
      setQuizDetails(quizInitialState);
    }
  }

  const createQuestion = () => {
    const question = (
      <div key={count}>
        <Form id={count} setQuizQuestions={setQuizQuestions}/>
      </div>
    )
    setQuestionList(prevQuestions => [...prevQuestions, question]);
  }

  return (
    <div className="main-row">
      <section className="question-column">
        <form onSubmit={validateQuiz} className="quiz-form">
          <section className="quiz-title">
            <label>
              <input type="text" name="title" placeholder="Title of your quiz" value={quizDetails.title} onChange={updateQuizDetails}/>
            </label>
          </section>

          <section className="quiz-subject">
            <label>
              <select name="subject" value={quizDetails.subject} onChange={updateQuizDetails}>
                <option value=""> Select a subject! </option>
                <option value="Math"> Math </option>
                <option value="Science"> Science </option>
                <option value="Social Studies"> Social Studies </option>
                <option value="English"> English </option>
                <option value="English"> Other </option>
              </select>
            </label>
          </section>

          <section className="quiz-description">
          <label>
              <textarea rows={5} cols={33} name="description" placeholder="Description of your quiz" value={quizDetails.description} onChange={updateQuizDetails}/>
            </label>
          </section>

          <section className="quiz-photo">
            Photo: {quizDetails.photoUrl ? `${quizDetails.photoUrl.substring(0, 50)}...` : 'Select a photo to your right!'}
          </section>

          {questionList}
          <section className="quiz-button">
            <button type="button" value="Add a question" onClick={() => setCount(prevCount => prevCount + 1)}>Add a question</button>
            <button type="submit">Create quiz</button>
          </section>
        </form>
      </section>

      <section className="canvas-column">
        <section className="card-container">
          <Images setQuizDetails={setQuizDetails} />
        </section>
      </section>
    </div>
  )
}

export default CreateQuiz;