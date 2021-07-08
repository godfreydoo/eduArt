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
        <form onSubmit={validateQuiz}>
          <div>
            <label>Title:
              <input type="text" name="title" placeholder="Title of your quiz" value={quizDetails.title} onChange={updateQuizDetails}/>
            </label>
          </div>

          <div>
            <label>Subject:
              <select name="subject" value={quizDetails.subject} onChange={updateQuizDetails}>
                <option value=""> None selected </option>
                <option value="Math"> Math </option>
                <option value="Science"> Science </option>
                <option value="Social Studies"> Social Studies </option>
                <option value="English"> English </option>
              </select>
            </label>
          </div>

          <div>
          <label>Description:
              <textarea rows={5} cols={33} name="description" placeholder="Description of your quiz" value={quizDetails.description} onChange={updateQuizDetails}/>
            </label>
          </div>

          <div>
            <label>Photo:
              <input type="url" name="photoUrl" placeholder="Pick a photo" value={quizDetails.photoUrl} onChange={updateQuizDetails}/>
            </label>
          </div>

          {questionList}
          <div>
            <input type="button" value="Add a question" onClick={() => setCount(prevCount => prevCount + 1)}/>
          </div>
          <div>
            <button type="submit">Create quiz</button>
          </div>
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