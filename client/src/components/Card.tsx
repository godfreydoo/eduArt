import React, { ReactComponentElement } from 'react';

interface Props {
  title?: string,
  img?: any,
  description?: string,
  subject?: string,
}

const Card: React.FC<Props> = ({title, img = null, description, subject}) => {
  return (
    <div className="card">
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