import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CategoriesRoute, TasksRoute } from './infrastructure/routs';
import { CategoriesPage } from './pages/CategoriesPage';
import { TasksPage } from './pages/TasksPage';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}> 
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Switch>
            <Route component={TasksPage} path={TasksRoute} exact></Route>
            <Route component={CategoriesPage} path={CategoriesRoute}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;