import React, { Component } from 'react';
import NavBar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
// import CommentsSection from './components/CommentsSection';
import Contact from './components/Contact';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="todo-App container">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
