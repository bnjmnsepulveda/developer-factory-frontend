import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntityForm from './infraestructure/presentation/pages/neo4j-maintainer/components/Neo4jNodeForm';
import { Container } from '@mui/material';
import { Title } from './infraestructure/presentation/shared/components/Title';
import { RelationshipForm } from './infraestructure/presentation/pages/neo4j-maintainer/components/RelationshipForm';
import PersistentDrawer from './infraestructure/presentation/shared/components/PersistentDrawer';
import { Provider } from 'react-redux'
import { store } from './infraestructure/state/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <PersistentDrawer />
        <Container maxWidth="md">
          {/* <Title title="Developer roadmap app" ></Title> */}
          {/* <RelationshipForm/> */}
          {/* <TemporaryDrawer/> */}
        </Container>
      </div>
    </Provider>
  );
}

export default App;
