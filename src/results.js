import { Card, Grid, Divider } from 'semantic-ui-react';
import OneResult from './one_result';
import './styles.css'

export default function Results() {
    return (
        <div>
            <Divider hidden />
            <Grid>
                <OneResult article_name="Cool fancy name" article_date="10/28/2023"></OneResult>
                <OneResult article_name="Second cool fancy name" article_date="10/26/2023"></OneResult>
                <OneResult article_name="Second cool fancy name" article_date="10/26/2023"></OneResult>
            </Grid>
        </div>
    );
}