import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchNewsArticles();
    this.displayArticles = this.displayArticles.bind(this);

    this.state = {
      active: 'articles'
    }
  }

  displayArticles() {
    if (this.props.news && this.props.news.articles) {
      return this.props.news.articles.map(article => {
        return (
          <li key={article.url} className="list-group-item">
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
              <button type="button" className="btn btn-secondary btn-sm">Save</button>
            </div>
          </li>
        );
      });
    }

  }

  render() {
    return (
      <div>
        <div>
          <h4>Articles</h4>
        </div>
        <div>
          <div className="row">
            <div className="col-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a onClick={() => this.props.changeTab('articles')} className={this.props.news.tab === 'articles' ? "nav-link active" : "nav-link"} id="v-pills-articles-tab" data-toggle="pill" role="tab" aria-controls="v-pills-article" aria-selected="true">Articles</a>
                <a onClick={() => this.props.changeTab('saved')} className={this.props.news.tab === 'saved' ? "nav-link active" : "nav-link"} id="v-pills-saved-tab" data-toggle="pill" role="tab" aria-controls="v-pills-saved" aria-selected="false">Saved</a>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className={this.props.news.tab === 'articles' ? "tab-pane fade show active" : "tab-pane fade"} id="v-pills-article" role="tabpanel" aria-labelledby="v-pills-article-tab">
                  <ul className="list-group list-group-flush">{this.displayArticles()}</ul>
                </div>
                <div className={this.props.news.tab === 'saved' ? "tab-pane fade show active" : "tab-pane fade"}  id="v-pills-saved" role="tabpanel" aria-labelledby="v-pills-saved-tab">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { news: state.news };
}

export default connect(
  mapStateToProps,
  actions
)(App);