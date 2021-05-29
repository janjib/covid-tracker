

import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Dropdown from './Dropdown'

function App() {
  return (
    <Container>
    <div className="App">
      <Title />
      <Dropdown />
      
    </div>
    </Container>
  );
}

export default App;
