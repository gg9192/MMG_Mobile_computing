import './App.css';
import Conversation from './components/Conversation';

const handleSubmit = () => {
  alert("Submitted!")
}

function App() {

  return (
    <div className="App">
      <Conversation suspectName="Suspect" onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
