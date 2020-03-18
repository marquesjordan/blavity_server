import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ArticleItem from './ArticleItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchNewsArticles();
    this.props.fetchSavedArticles();
    this.displayArticles = this.displayArticles.bind(this);

    this.state = {
      active: 'articles'
    }
  }

  displayArticles() {
    const list = this.props.news.tab === 'articles' ? this.props.news.articles : this.props.news.groups; 

    return list.map(article => {
      return (
        <ArticleItem key={article.url} article={article} />
      );
    });
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
                  <ul className="list-group list-group-flush">{this.displayArticles()}</ul>
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
  return { news: state.news };
}

export default connect(
  mapStateToProps,
  actions
)(App);