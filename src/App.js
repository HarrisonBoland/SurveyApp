import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import StartPage from './containers/StartPage/StartPage';
import Questions from './containers/Questions/Questions';
import EndPage from './containers/EndPage/EndPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/thankyou" component={EndPage} />
          <Route path="/questions" component={Questions} />
          <Route path="/" exact component={StartPage} />
        </Switch>  
      </Layout>
    </div>
  );
}

export default App;
