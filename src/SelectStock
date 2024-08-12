import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectStock.css'; // Assuming you have a CSS file for styles

const stockData = [
  {
    model: 'Model 1',
    stocks: [
      { symbol: 'AAL', prices: [67.80, 67.80, 67.80] },
      { symbol: 'AAPL', prices: [67.80, 67.80, 67.80] },
    ],
  },
  {
    model: 'Model 2',
    stocks: [
      { symbol: 'AAL', prices: [67.80, 67.80, 67.80] },
      { symbol: 'AAPL', prices: [67.80, 67.80, 67.80] },
    ],
  },
];

const StockItem = ({ symbol, prices, isSelected, onClick, isDisabled }) => (
  <div
    className={`stock-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
    onClick={!isDisabled ? onClick : null}
  >
    <div className="stock-symbol">
      <input type="checkbox" checked={isSelected} readOnly />
      <span>{symbol}</span>
    </div>
    <div className="stock-prices">
      {prices.map((price, index) => (
        <div key={index}>Day {index + 1} : {price.toFixed(2)}</div>
      ))}
    </div>
  </div>
);

const ModelResult = ({ model, stocks, selectedStocks, onSelect, onSelectAll, disabledStocks }) => (
  <div className="model-result">
    <h3>{model} result</h3>
    <button onClick={onSelectAll}>
      {selectedStocks.length === stocks.length ? 'Deselect All' : 'Select All'}
    </button>
    {stocks.map((stock) => (
      <StockItem
        key={stock.symbol}
        symbol={stock.symbol}
        prices={stock.prices}
        isSelected={selectedStocks.includes(stock.symbol)}
        onClick={() => onSelect(stock.symbol)}
        isDisabled={disabledStocks.includes(stock.symbol) && !selectedStocks.includes(stock.symbol)}
      />
    ))}
  </div>
);

const SelectStock = () => {
  const [selectedStocks1, setSelectedStocks1] = useState([]);
  const [selectedStocks2, setSelectedStocks2] = useState([]);
  const navigate = useNavigate(); // Use    the navigate function from React Router

  const handleSelectStock1 = (symbol) => {
    setSelectedStocks1((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  const handleSelectStock2 = (symbol) => {
    setSelectedStocks2((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  const handleSelectAll1 = () => {
    if (selectedStocks1.length === stockData[0].stocks.length) {
      setSelectedStocks1([]);
    } else {
      const stocksToSelect = stockData[0].stocks
        .map((stock) => stock.symbol)
        .filter((symbol) => !selectedStocks2.includes(symbol));
      setSelectedStocks1(stocksToSelect);
    }
  };

  const handleSelectAll2 = () => {
    if (selectedStocks2.length === stockData[1].stocks.length) {
      setSelectedStocks2([]);
    } else {
      const stocksToSelect = stockData[1].stocks
        .map((stock) => stock.symbol)
        .filter((symbol) => !selectedStocks1.includes(symbol));
      setSelectedStocks2(stocksToSelect);
    }
  };

  const handleOptimize = () => {
    // Perform any additional logic before navigation
    navigate('/prediction'); // Navigat e to the OptimizePage route
  };

  return (
    <div className="select-stock-container">
      <div className="model-result-wrapper">
        <ModelResult
          model={stockData[0].model}
          stocks={stockData[0].stocks}
          selectedStocks={selectedStocks1}
          onSelect={handleSelectStock1}
          onSelectAll={handleSelectAll1}
          disabledStocks={selectedStocks2}
        />
        <ModelResult
          model={stockData[1].model}
          stocks={stockData[1].stocks}
          selectedStocks={selectedStocks2}
          onSelect={handleSelectStock2}
          onSelectAll={handleSelectAll2}
          disabledStocks={selectedStocks1}
        />
      </div>
      <button className="optimize-button" onClick={handleOptimize}>
        Optimize Data
      </button>
    </div>
  );
};

export default SelectStock;
