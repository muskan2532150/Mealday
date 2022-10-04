import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Container} from './component/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container />      
      </BrowserRouter>
    </div>
  );
}

export default App;
