import React, { Component } from 'react';
import moment from 'moment';
import shuffle from 'lodash/shuffle';
import throttle from 'lodash/throttle';

import FlipMove from 'react-flip-move';
import classNames from 'classnames';


class ListItem extends Component {
  render() {
    const listClass = `list-item card ${this.props.view}`;
    const style = { zIndex: 100 - this.props.index };

    return (
      <li id={this.props.id} className={listClass} style={style}>
        <h3>{this.props.name}</h3>
        <h5>{moment(this.props.timestamp).format('MMM Do, YYYY')}</h5>
        <button onClick={this.props.clickHandler}>
          <i className="fa fa-close" />
        </button>
      </li>
    );
  }
};

const articles = [
  { id: 'a', timestamp: 811396800000, name: 'Netscape 2.0 ships, introducing Javascript' },
  { id: 'b', timestamp: 1108702800000, name: 'Jesse James Garrett releases AJAX spec' },
  { id: 'c', timestamp: 1156564800000, name: 'jQuery 1.0 released' },
  { id: 'd', timestamp: 1256443200000, name: 'First underscore.js commit' },
  { id: 'e', timestamp: 1286942400000, name: 'Backbone.js becomes a thing' },

  { id: 'f', timestamp: 1331697600000, name: 'Angular 1.0 released' },
  { id: 'g', timestamp: 1369800000000, name: 'React is open-sourced; developers rejoice' }
]

class Shuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removedArticles: [],
      view: 'list',
      order: 'asc',
      sortingMethod: 'chronological',
      enterLeaveAnimation: 'accordianVertical',
      articles
    };
  }


  moveArticle(source, dest, id) {
    const sourceArticles = this.state[source].slice();
    let destArticles = this.state[dest].slice();

    if ( !sourceArticles.length ) return;

    // Find the index of the article clicked.
    // If no ID is provided, the index is 0
    const i = id ? sourceArticles.findIndex(article => article.id === id) : 0;

    // If the article is already removed, do nothing.
    if ( i === -1 ) return;

    destArticles = [].concat( sourceArticles.splice(i, 1), destArticles );

    this.setState({
      [source]: sourceArticles,
      [dest]: destArticles,
    });
  }

  renderArticles() {
    return this.state.articles.map( (article, i) => {
      return (
        <ListItem
          key={article.id}
          view={this.state.view}
          index={i}
          clickHandler={throttle(() => this.moveArticle('articles', 'removedArticles', article.id), 800)}
          {...article}
        />
      );
    });
  }

  render() {
    return (
          <FlipMove
            staggerDurationBy="30"
            duration={500}
            enterAnimation={this.state.enterLeaveAnimation}
            leaveAnimation={this.state.enterLeaveAnimation}
            typeName="ul"
          >
            { this.renderArticles() }
          </FlipMove>
    );
  }
};

export default Shuffle;