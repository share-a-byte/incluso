import { Grid, Divider } from 'semantic-ui-react';
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
                    <p className="article-authors">Author Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Fits these tags: Black, Women</em></p>
                </Grid.Column>
            </Grid.Row>
            <p></p>
            <Grid.Row>
                <Grid.Column width={16}>
                    <p className="article-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Grid.Column>
            </Grid.Row>
            <Divider hidden />
        </div>
    );
}