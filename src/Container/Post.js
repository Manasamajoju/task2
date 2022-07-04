import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Components/header.css';
import Sidebar from '../Components/Sidebar';
import { Container, Row, Col} from 'react-bootstrap';

function SinglePost() {
  const allParams = useParams();
  console.log('POST ID::', allParams.postId);

  const [results, setResult] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    callSinglePostApi();
    callCommentsApi();
  }, []);

  function callSinglePostApi() {
    let url = `https://gorest.co.in/public/v2/posts/${allParams.postId}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('RESULTS::', resp);
        setResult(resp);
      });
    });
  }

  function callCommentsApi() {
    let url = `https://gorest.co.in/public/v2/posts/${allParams.postId}/comments`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('COMMENTS::', resp);
        setComments(resp);
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
            <div className="headingTitle">{results.title}</div>
            <div className="description">{results.body} </div>

            <div className="allComments">
              <h3>Comments</h3>
              {comments?.map((row, index) => {
                return (
                  <div key={index}>
                    <hr />

                    <p>
                      <a>
                        <strong>Name:</strong> {row.name}
                      </a>
                    </p>
                    <p>
                      <strong>Comment:</strong> {row.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SinglePost;