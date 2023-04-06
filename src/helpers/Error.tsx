import React from 'react';
import '../styles/Error.scss';


interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;
