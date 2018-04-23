import React, { Component } from 'react';
import './crawling.css';

class Crawling extends Component {
  render() {
    const film = this.props.film;
    return (
      <div>
        {this.props.pauseButton === 'none' ? (
          <section className="static-div">
            <div className="title">
              <p>{'EPISODE ' + film.episode_id}</p>
              <h1>{film.title}</h1>
            </div>
            {film.opening_crawl}
          </section>
        ) : (
            <div className="crawl-div">
              <div className="fade"></div>
              <section className="star-wars">
                <div className="crawl">
                  <div className="title">
                    <p>{'EPISODE ' + film.episode_id}</p>
                    <h1>{film.title}</h1>
                  </div>
                  {film.opening_crawl}
                </div>
              </section>
            </div>
          )}
        <div className="overlay" style={{ visibility: this.props.overlayVis }}>
          <div className="ovarlay-button" style={{ display: this.props.playButton }}>
            <button className="overlay-btn" onClick={this.props.playClick}>
              <i className="glyphicon glyphicon-play icon-size" />
            </button>
          </div>
          <div className="ovarlay-button" style={{ display: this.props.pauseButton }}>
            <button className="overlay-btn" onClick={this.props.pauseClick}>
              <i className="glyphicon glyphicon-pause icon-size" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Crawling;