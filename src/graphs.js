import Graph1 from "./piegraph";
import BarGraph from "./bargraph";
import AgeGraph from "./agegraph";
import { Grid, Image, Container, Divider } from "semantic-ui-react";

export default function GraphsScreen() {
    return (<>
        <Divider hidden />
        <Container>
            <Divider hidden />
            <Grid columns={2}>
                <p className="graph-title">Distribution Stats</p>
                <Grid.Row>
                    <Grid.Column>
                        <Graph1></Graph1>
                    </Grid.Column>
                    <Grid.Column>
                        <BarGraph></BarGraph>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <AgeGraph></AgeGraph>
                </Grid.Row>
            </Grid>
        </Container>
    </>
    );
}
