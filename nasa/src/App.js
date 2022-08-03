import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Navbar from './Navbar';
import Home from './Home';
import BlogDetail from './BlogDetail';
import Create from './Create';
import Moto from './Moto';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <Navbar/>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetail />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>    
      </div>
      <div className='App'>
          <Moto />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
