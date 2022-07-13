import React from 'react';
import Theme from './Table/Theme';
import Userpost from './Table/Userpost';
import Post from './Container/Post';

import { BrowserRouter as Router, Routes } from 'react-router-dom';

const Route = require('react-router-dom').Route;
function App() {
  return (
    <div>
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
