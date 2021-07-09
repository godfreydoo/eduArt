import React from 'react';
import LazyImage from './LazyImage';

interface Props {
  title?: string,
  img?: any,
  description?: string,
  subject?: string,
  id?: string,
  dataDocument?: any,
  handleClickToPlayQuiz?: any;
  deleteQuiz?: any
}

const Card: React.FC<Props> = ({img, title, subject, description, dataDocument, deleteQuiz = () => {}, handleClickToPlayQuiz = () => {}}) => {
  return (
    <div className="card">
      {img ? <LazyImage img={img}/> : null}
      <article className="content" >
        <h3>{title}</h3>
        <h4>{subject}</h4>
        <p>{description}</p>
      </article>
      {img === undefined
      ? <section>
          <button type="button" onClick={() => handleClickToPlayQuiz(dataDocument)}>Play</button>
          <button type="button" onClick={() => deleteQuiz(dataDocument._id)}>Delete</button>
        </section>
      :null}
    </div>
  )
}

export default Card;