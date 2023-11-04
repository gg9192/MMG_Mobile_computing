import './App.css';
import GameComponent from './components/GameComponent';
import MainPage from './components/MainPage';

const handleSubmit = () => {
  alert("Submitted!")
}

function App() {

  return (
    <div className="App">
      <GameComponent></GameComponent>
    </div>
  );
}

export default App;
