import './App.css';
import GameComponent from './components/GameComponent';
import MainPage from './components/MainPage';

const handleSubmit = () => {
  alert("Submitted!")
}

function App() {

  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      
    }}>
      <GameComponent></GameComponent>
    </div>
  );
}

export default App;
