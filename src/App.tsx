import React from 'react';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import {Route,BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Route path='/' component={Home}></Route>

    </BrowserRouter>
  );
}

export default App;
