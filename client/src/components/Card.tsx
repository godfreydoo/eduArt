import React, { ReactComponentElement } from 'react';

interface Props {
  title?: string,
  img?: any,
  description?: string,
  subject?: string,
  id?: string,
  'data-document'?: any,
  handleClickToPlayQuiz?: any;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="card" onClick={() => props.handleClickToPlayQuiz(props['data-document'])}>
      {props.img}
      <article className="content" >
        <h3>{props.title}</h3>
        <h4>{props.subject}</h4>
        <p>{props.description}</p>
      </article>
    </div>
  )
}

export default Card;