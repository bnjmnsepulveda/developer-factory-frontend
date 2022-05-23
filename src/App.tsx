import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntityForm from './infraestructure/presentation/pages/maintainer/components/EntityForm';
import { Container } from '@mui/material';
import { Title } from './infraestructure/presentation/shared/components/Title';

function App() {
  return (
    <div>
      <Container maxWidth="md">
      <Title title="Developer roadmap app" ></Title>
      <EntityForm />
      </Container>
    </div>
  );
}

export default App;
