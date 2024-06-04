import React from 'react';
import './PredictionPage.css'; 

const PredictionPage = () => {
  return (
    <div className="prediction-container">
      <div className="prediction-content">
        <h1>This is the Prediction Page</h1>
        <p>Line 1 of prediction</p>
        <p>Line 2 of prediction</p>
        <p>Line 3 of prediction</p>
        <p>Line 4 of prediction</p>
        <div className="button-container">
          <button className="prediction-button">Buy</button>
          <button className="back-button">Back</button>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
