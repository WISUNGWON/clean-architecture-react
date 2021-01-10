import React from 'react';
import { HomePage } from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

interface IEntryRouteProps {}

export const EntryRoute: React.FC<IEntryRouteProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};
