import './styles.css'
import Results from './results';
import Results2 from './results2';
import incluso from './images/incluso.png';
import { Container, Input, Divider, Image, Grid, Dropdown, Loader, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const options = [
    { key: 'Women', text: 'Women', value: 'Women' },
    { key: 'Men', text: 'Men', value: 'Men' },
    { key: 'Asian', text: 'Asian', value: 'Asian' },
    { key: 'Latinx', text: 'Latinx', value: 'Latinx' },
    { key: 'Black', text: 'Black', value: 'Black' },
    { key: 'LGBTQIA', text: 'LGBTQIA', value: 'LGBTQIA' },
]

export default function HomeScreen() {
    const [currSearch, setSearch] = useState();
    const [finalSearch, setFinSearch] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onChange = (event) => {
        setSearch(event.target.value);
    }
    const onSubmit = async () => {
        setLoading(true);
        setTimeout(function () {
            setLoading(false);
            setFinSearch(currSearch);
        }, 500);
    }

    return (
        <>
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
                        <Input fluid action={{ icon: 'arrow alternate circle right outline', onClick: onSubmit, color: 'violet' }} placeholder='Search...' onChange={onChange} />
                    </Grid.Column>
                    <p className="try-this underlined">
                        <h3></h3>
                        <Icon name='line graph' onClick={() => navigate("/visualize")} />
                        <span>Visualize your search</span>
                    </p>
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
                {loading ? <Loader active size='massive' inverted>Loading</Loader> :
                    <div>
                        {(finalSearch == "quantum computing") ? <Results /> : (finalSearch == "biochemistry") ? <Results2></Results2> : <></>}
                    </div>
                }
            </Container>
        </>
    );
}