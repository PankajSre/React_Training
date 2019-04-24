import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import IncrementNumber from './components/IncrementNumber';
import EventBindingComponent from './components/EventBindingComponent';
import LoginUser from './components/LoginUser';
import UserList from './components/UserList';
import MyStyles from './components/MyStyles';
import InlineStyle from './components/InlineStyle';
import './appStyle.css';
import styles from './appStyle.module.css';
import MyForm from './components/MyForm';
import MountLifeCycle from './components/MountLifeCycle';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className="App">
      {/* <Hello name = 'Suvarna' language ='React' />
      <Hello name = 'Jyoti' language ='Angular' />
      <Hello name = 'Sandipan' language ='Python' />
      <Welcome /> */}
      {/* <Message /> */}
      {/* <IncrementNumber /> */}
      {/* <EventBindingComponent /> */}
      {/* <LoginUser /> */}
      {/* <UserList /> */}
      {/* <MyStyles primary = 'false' /> */}
      {/* <InlineStyle /> */}
      {/* <h1 className = 'error'>This is For Error</h1>
      <h1 className = {styles.success}>This is For Success</h1> */}

      {/* <MyForm /> */}
      {/* <MountLifeCycle /> */}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={`/`} >Home</Link>
              </li>
              <li><Link to={`/about`} >About</Link></li>
              <li> <Link to={`/posts`}>Posts</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>

      </Router>















    </div>
  );
}

export default App;
