import Welcome from "./Components/welcome/welcome";
import DetailSection from "./Components/detailSection/detailSection";
import { Col, Container, Row } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="app">
      <Welcome/>
      <DetailSection/>
    </div>
  );
}

export default App;
