import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ArticleItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {article} = this.props;
        return (
            <li className="list-group-item">
                <img
                    className="img-thumbnail"
                    width={150}

                    src={article.urlToImage}
                />
                <p className="font-weight-bold">{article.title}</p>
                <div>{article.description}</div>
                <p>
                <a href={article.url}>{article.url}</a>
                </p>
                <div>
                    {this.props.news.tab === 'articles' && <button onClick={() => this.props.saveArticle(article)} type="button" className="btn btn-secondary btn-sm">Save</button>}
                </div>
            </li>
        )
    }
} 

function mapStateToProps(state) {
    return { news: state.news };
}
  
export default connect(
    mapStateToProps,
    actions
)(ArticleItem);