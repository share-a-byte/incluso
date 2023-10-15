import './App.css';
import './styles.css'
import Results from './results';
import incluso from './incluso.png';
import { Container, Input, Divider, Image, Grid, Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'Women', text: 'Women', value: 'Women' },
  { key: 'Men', text: 'Men', value: 'Men' },
  { key: 'Asian', text: 'Asian', value: 'Asian' },
  { key: 'Latinx', text: 'Latinx', value: 'Latinx' },
  { key: 'Black', text: 'Black', value: 'Black' },
]

function App() {
  return (
    <div>
      <Container>
        <h1></h1>
        <Grid>
          <Grid.Column width={4}>
            <Image src={incluso} size='medium' />
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={10}>
            <h3></h3>
            <Input fluid action={{ icon: 'arrow alternate circle right outline', color: 'violet' }} placeholder='Search...' />
          </Grid.Column>
          <div className='right-align'>
            <Dropdown
              placeholder='Pick your filter!'
              fluid
              multiple
              selection
              options={options}
            />
          </div>
        </Grid>
        <Divider hidden />
        <Divider />
        <Results />
      </Container>
    </div>
  );
}

export default App;
