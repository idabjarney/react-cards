import React, { useState, useEffect } from 'react';
import cat from '../assets/cat.jpg';
import Button from './Button';

type Props = {
  name: string;
  age?: number;
  country: string;
  job: string;
  phone: string;
};

const password = 'password';

const Card = ({ name, age, country, job, phone }: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    if (!showDetails) {
      const userInput = prompt();
      if (userInput === password) {
        setShowDetails(true);
      } else {
        alert('Incorrect password');
      }
    } else {
      setShowDetails(false);
    }
  };
  return (
    <div className="card">
      <img src={cat} loading="lazy" />
      <div className="card-inner">
        <h2 className="name">{name}</h2>
        {showDetails && (
          <>
            {age && <p className="age">{age}</p>}
            <p className="country">{country}</p>
            <p className="job">{job}</p>
            <p className="phone">{phone}</p>
          </>
        )}
        <Button
          text={showDetails ? 'Hide Details' : 'Show Details'}
          onClick={toggleDetails}
        />
      </div>
    </div>
  );
};

export default Card;
