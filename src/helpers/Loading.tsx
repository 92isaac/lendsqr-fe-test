import React from 'react';
import '../styles/Loading.scss';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-message">{message}</div>
    </div>
  );
};

export default Loading;
