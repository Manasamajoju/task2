import React from 'react';
//import User from './Components/Sidebar';
import Theme from './Table/Theme';
import Userpost from './Table/Userpost';
import Post from './Container/Post';

import { BrowserRouter as Router, Routes } from 'react-router-dom';

const Route = require('react-router-dom').Route;
function App() {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1601674957874-1284f5996fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&&q=80')",
    height: '750px',
    width: '500',
    marginTop: '-80px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Theme />} />
          <Route path="post/:postId" element={<Post />} />
          <Route path="userposts/:userId" element={<Userpost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;