import { Container, Input, Header, Button, Divider } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h2'>Incluso</Header>
      <Divider />
      <Input icon='search' placeholder='Search...' />
      <Button>Click Here</Button>
    </Container>
  );
}

export default App;
