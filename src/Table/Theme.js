import React, { useEffect, useState } from 'react';
import "./header.css";
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';

import { Container, Row, Col, Button } from 'react-bootstrap';



function Theme() {
  const [results, setResult] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    console.log('hello');
    let url = 'https://gorest.co.in/public/v2/posts';
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('results', resp);
        setResult(resp);
      });
    });
  }

  return (
    <div className="Theme">
      <Header />
      <Container className="container">
        <Row>
          <Col className="col" sm={3}>
            <Sidebar />
          </Col>

          <Col className="user1" sm={9}>
            <div className="headingTitle">All Posts</div>

            <div className="button">
              {results?.map((row, index) => {
                return (
                  <Button
                    className="buttonsCard"
                    key={index}
                    variant="outline-primary"
                  >
                    <a href={`/post/${row.id}`}>Post Id: {row.id}</a>
                    &nbsp;&nbsp;
                  </Button>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
}

export default Theme;