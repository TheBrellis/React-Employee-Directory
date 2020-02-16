// npm imports
import React from "react";
// Bootstrap Import
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'; 
// Local Imports
import Search from '../components/Search'



export default function Header() {

  return (
    <Jumbotron fluid>
      <Container>
        <h1>Employee Directory</h1>
        <p>
          Asset managment made simple.
          </p>
          <Search />
      </Container>
    </Jumbotron>
  )

}