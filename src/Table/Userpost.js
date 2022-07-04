import React, { useEffect, useState } from 'react';
import '../Components/header.css';
import Sidebar from '../Components/Sidebar';
import { useParams } from 'react-router-dom';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Userpost() {
  const allParams = useParams();
  const [results, setResult] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    console.log('hello');
    let url = `https://gorest.co.in/public/v2/users/${allParams.userId}/posts`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('userpost', resp);
        setResult(resp);
      });
    });
  }

  return (
    <div className="Theme">
      <Container className="container">
        <Row>
          <Col className="col" sm={3}>
            <Sidebar />
          </Col>

          <Col className="col1" sm={9}>
            <div className="headingTitle">User's Posts</div>

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

export default Userpost;