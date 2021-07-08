import React, {useEffect, useState} from 'react';
import QuestionList from './QuestionList';
import Canvas from './Canvas';
import documentSampleData from '../data/parsedsample1';


interface Props {
  listOfQuestions: Array<object>;
  img: string;
}

const Start: React.FC<Props> = ({listOfQuestions = documentSampleData.questions, img}) => {
  const [questions, setQuestions] = useState<object[]>([]);
  const [score, setScore] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setQuestions(listOfQuestions);
    setTotal(listOfQuestions.length);
  }, []);

  const handleScore = () => {
    setScore(prevScore => prevScore + 1);
  }


  return (
    <div className="main-row">
      <section className="question-column">
        <QuestionList questions={questions} handleScore={handleScore}/>
      </section>
      <section className="canvas-column" >
        <Canvas score={score} total={total} img={img}/>
      </section>
    </div>
  )
}

export default Start;