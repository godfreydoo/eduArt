import React, { ReactComponentElement } from 'react';

interface Props {
  title?: string,
  img?: any,
  description?: string,
  subject?: string,
  id?: string,
  dataDocument?: any,
  handleClickToPlayQuiz?: any;
}

const Card: React.FC<Props> = ({img, title, subject, description, dataDocument, handleClickToPlayQuiz = () => {}}) => {
  return (
    <div className="card" onClick={() => handleClickToPlayQuiz(dataDocument)}>
      {img}
      <article className="content" >
        <h3>{title}</h3>
        <h4>{subject}</h4>
        <p>{description}</p>
      </article>
    </div>
  )
}

export default Card;