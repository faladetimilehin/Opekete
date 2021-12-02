import * as React from 'react';
import  CreateBlogs  from './CreateBlogs';
import  ListBlogs  from './ListBlogs';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <CreateBlogs />
      <ListBlogs/>
    </div>
  );
};

export default App;