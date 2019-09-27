import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import { LoginPage, EntryPage, MainPage, NewAlbumPage, SettingsPage, ProfilePage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = { LoginPage } />
        <Route exact path = "/entry" component = { EntryPage } />
        <Route exact path = "/main" component = { MainPage } />
        <Route exact path = '/new-album' component = { NewAlbumPage } />
        <Route exact path = '/settings' component = { SettingsPage } />
        <Route exact path = '/profile' component = { ProfilePage } />
      </Switch>
    </div>
  )
}

export default App;