import './App.css';
import LoginPage from './Mycomponents/LoginPage';
import { Routes, Route} from 'react-router-dom';
import {Container,Row,Col} from "react-bootstrap";
import Innercomponent from './Mycomponents/Innercomponent';
function App() {
  return (
    
  <Container>
    <Row>
      <Col>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Innercomponent" element={<Innercomponent/>}/>
      </Routes>
      </Col>
    </Row>
  </Container>
  
  ); 
}

export default App;