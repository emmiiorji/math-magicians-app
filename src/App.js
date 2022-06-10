import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CalculatorPage from './components/pages/CalculatorPage';
import QuotesPage from './components/pages/QuotesPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
