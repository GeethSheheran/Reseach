import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PredictionPage.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PredictionPage = () => {
  const navigate = useNavigate();

  const tableData = [
    { type: 'Stock1', percentage: 20 },
    { type: 'Crypto1', percentage: 15 },
    { type: 'Stock2', percentage: 30 },
    { type: 'Crypto2', percentage: 35 }
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

  const pieData = tableData.map(item => ({
    name: item.type,
    value: item.percentage
  }));

  const handleBackClick = () => {
    navigate('/selection');
  };

  return (
    <div className="forecast-container">
      <div className="forecast-content">
        <h1>
          This is the Prediction Page
          <small className="forecast-sub-header">Prediction Date: 2024-07-10</small>
        </h1>
        <div className="forecast-flex">
          <div className="data-list">
            <table>
              <thead>
                <tr>
                  <th>Stock/Crypto Data</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.type}</td>
                    <td>{item.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="chart-box">
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
        <div className="action-buttons">
          <button className="purchase-button">Buy</button>
          <button className="return-button" onClick={handleBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
