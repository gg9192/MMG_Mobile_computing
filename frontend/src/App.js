import './App.css';
import Conversation from './components/Conversation';
import Conversation2 from './components/Conversation2';

function handleSubmit() {
  alert("Submitted!")
}

function App() {

  return (
    <div className="App">
      <Conversation/>
      <Conversation2 suspectName="Suspect" onSubmit={handleSubmit()}/>
    </div>
  );
}

export default App;
