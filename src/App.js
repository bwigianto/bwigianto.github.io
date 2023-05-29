import logo from './logo.svg';
import './App.css';
import MathQuiz from './MathQuiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Quiz</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MathQuiz />
    </div>
  );
}

export default App;
