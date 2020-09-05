import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';
export const PostContext = createContext();

function App() {
  const [posts,setPosts] = useState([]);
  return (
    <div style={{backgroundColor:'#A9A9A9'}}>
      <PostContext.Provider value={[posts,setPosts]}>
       <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Posts></Posts>
          </Route>
          <Route exact path="/post/:postId">
            <Header></Header>
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </PostContext.Provider>
    </div>
  );
}

export default App;
