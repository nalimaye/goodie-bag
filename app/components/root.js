import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ConnectedCandiesList from './CandiesList';

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/candies">All Candies</Link>
      </nav>

      <main>
        <h1>Welcome to the Goodie Bag!</h1>

        <Switch>
          <Route exact path="/candies" component={ConnectedCandiesList} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
