import { Container, Input, Header, Button } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h2'>Incluso</Header>
      <Input icon='search' placeholder='Search...' />
      <Button>Click Here</Button>
    </Container>
  );
}

export default App;
