import React, {useState} from 'react';

interface Props {
  type: string;
  answer: string;
  selections: Array<string>;
  handleScore: () => void;
}


const AnswerForm: React.FC<Props> = ({type, answer, selections, handleScore}) => {

  const [markCorrect, setMarkCorrect] = useState<boolean>(false);

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userAnswer = e.target.value;

    if (type === "Text") {
      userAnswer.toLowerCase();
      const potentialAnswers = answer.split(", ");
      if (potentialAnswers.includes(userAnswer)) {
        setMarkCorrect(true);
        handleScore();
      }
    } else {
      if (userAnswer === answer) {
        setMarkCorrect(true);
        handleScore();
      }
    }
  }

  if (markCorrect) {
    return (
      <div>{answer}</div>
    )
  } else {
    if (type === 'Multiple Choice') {
      return (
        <div>
          {Object.values(selections).map((value, index) => {
            return (
              <div key={index}>
                <label> {value}
                  <input type="radio" name="answer" value={value} onChange={handleAnswer}/>
                </label>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <label>
          <input placeholder="Answer here" type="text" onChange={handleAnswer}/>
        </label>
      )
    }
  }
}

export default AnswerForm;