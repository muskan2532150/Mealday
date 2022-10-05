import './scss/main.css';
import { BrowserRouter } from 'react-router-dom';
import {Container} from './component/Container';
import {Navbar} from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Container />      
      </BrowserRouter>
    </div>
  );
}

export default App;
