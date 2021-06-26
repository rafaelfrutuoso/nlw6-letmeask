import React from 'react';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import {Route,BrowserRouter,Switch} from 'react-router-dom'
import {AuthContextProvider} from './contexts/authContext'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/rooms/new'  component={NewRoom}></Route>
        <Route path='/rooms/:id' component={Room}></Route>
        
        <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
