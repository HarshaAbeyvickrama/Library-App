import React from 'react';
import './App.scss';
import { Col, Container, Row } from "react-bootstrap";
import Welcome from './components/Welcome/Welcome';
import Library from "./views/Library";

function App() {
  return (
      <Library />
  );
}

export default App;
