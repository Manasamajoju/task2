import React, { useEffect, useState } from 'react';
import '../Components/header.css';

function Sidebar() {
  const [results, setResult] = useState([]);
  useEffect(() => {
    callUsersApi();
  }, []);

  function callUsersApi() {
    let url = `https://gorest.co.in/public/v2/users`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('COMMENTS::', resp);
        setResult(resp);
      });
    });
  }

  return (
    <div>
      <div className="headingTitle">All Users</div>
      {results?.map((row, index) => {
        return (
          <div key={index}>
            <p>
              <a href={`/userposts/${row.id}`}>{row.name}</a>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;