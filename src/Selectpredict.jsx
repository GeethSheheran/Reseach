import React, { useState } from 'react';
import './Selectpredict.css';

const PredictionContent = ({ title, tableData, selectedItems, toggleSelection, date }) => (
  <div className="prediction-content">
    <h1>
      {title}
      <small className="sub-header">Prediction Date: {date}</small>
    </h1>
    <table>
      <thead>
        <tr>
          <th className="selection">Select The Predictions</th>
          <th>Stock/Crypto Data</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.type)}
                onChange={() => toggleSelection(item.type)}
              />
            </td>
            <td>{item.type}</td>
            <td>{item.percentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SelectPredict = () => {
  const tableData1 = [
    { type: 'Stock1', percentage: 20 },
    { type: 'Crypto1', percentage: 15 },
    { type: 'Stock2', percentage: 30 },
    { type: 'Crypto2', percentage: 35 }
  ];

  const tableData2 = [
    { type: 'Stock3', percentage: 25 },
    { type: 'Crypto3', percentage: 20 },
    { type: 'Stock4', percentage: 40 },
    { type: 'Crypto4', percentage: 15 }
  ];

  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);

  const toggleSelection1 = (type) => {
    if (selectedItems1.includes(type)) {
      setSelectedItems1(selectedItems1.filter(item => item !== type));
    } else {
      setSelectedItems1([...selectedItems1, type]);
    }
  };

  const toggleSelection2 = (type) => {
    if (selectedItems2.includes(type)) {
      setSelectedItems2(selectedItems2.filter(item => item !== type));
    } else {
      setSelectedItems2([...selectedItems2, type]);
    }
  };

  const handleBuyClick = () => {
    const itemsToBuy = [
      ...tableData1.filter(item => selectedItems1.includes(item.type)).map(item => ({ ...item, table: 'Model One' })),
      ...tableData2.filter(item => selectedItems2.includes(item.type)).map(item => ({ ...item, table: 'Model Two' }))
    ];
    setBoughtItems(itemsToBuy);
    setSelectedItems1([]);
    setSelectedItems2([]);
  };

  const handleCancelClick = () => {
    setBoughtItems([]);
  };

  const handleBackClick = () => {
    setSelectedItems1([]);
    setSelectedItems2([]);
  };

  const handlePredictClick = () => {
    window.location.href = '/prediction'; // Change this to the desired path
  };

  return (
    <div className="prediction-container">
      <div className="content-flex">
        <PredictionContent
          title="This is the Prediction of Model One"
          tableData={tableData1}
          selectedItems={selectedItems1}
          toggleSelection={toggleSelection1}
          date="2024-07-10"
        />
        <PredictionContent
          title="This is the Prediction of Model Two"
          tableData={tableData2}
          selectedItems={selectedItems2}
          toggleSelection={toggleSelection2}
          date="2024-07-11"
        />
      </div>
      <div className="button-container">
        <button className="prediction-button" onClick={handleBuyClick}>Select Predict</button>
        <button className="back-button" onClick={handleBackClick}>Clear Predict</button>
      </div>
      {boughtItems.length > 0 && (
        <div className="bought-items-container">
          <h2>Bought Items</h2>
          <table>
            <thead>
              <tr>
                <th>Stock/Crypto Data</th>
                <th>Percentage</th>
                <th>Selected From</th>
              </tr>
            </thead>
            <tbody>
              {boughtItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.percentage}%</td>
                  <td>{item.table}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            <button className="prediction-button" onClick={handlePredictClick}>Predict</button>
            <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPredict;
