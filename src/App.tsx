import React, { useState } from 'react';
import './App.css';
import PersistentDrawer from './infraestructure/presentation/shared/components/PersistentDrawer';
import { Provider } from 'react-redux'
import { store } from './infraestructure/state/store';

function App() {

  return (
    <Provider store={store}>
      <PersistentDrawer />
    </Provider>
  );
}

export default App;
