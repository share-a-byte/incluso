import { Grid, Divider, Image } from 'semantic-ui-react';
import './styles.css'

export default function OneResult(props) {
    return (
        <div>
            <Grid.Row>
                <Grid.Column width={7}>
                    <p className="article-title">{props.article_name} &ensp;&ensp;&ensp;&ensp; <span className="article-date">{props.article_date}</span></p>
                </Grid.Column>
            </Grid.Row>
            <p></p>
            <Grid.Row>
                <Grid.Column width={16}>
                    <p className="article-authors"><span className="underlined">{props.author}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Fits these tags: {props.tags}</em></p>
                </Grid.Column>
            </Grid.Row>
            <p></p>
            <img src={props.image} className="image-styling" />
            <p className="article-content">{props.description}</p>
            <Divider hidden />
        </div>
    );
}