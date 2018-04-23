import React, { Component } from 'react';
import { connect } from 'react-redux';
import Crawling from './components/Crawling';
import FilmData from './components/FilmData';

class FilmContainer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      hidden: "hidden",
      overlayVis: "hidden",
      playButton: "none",
      pauseButton: ""
    };
  }
  componentWillMount() {
    var that = this;
    setTimeout(function (){ that.show(); },9000);
  }
  show() {
    this.setState({ hidden: "visible", overlayVis: "visible" });
  }
  playClick() {
    this.setState({ playButton: "none", pauseButton: "" });
  }
  pauseClick() {
    this.setState({ pauseButton: "none", playButton: "" });
  }
  search(title) {
    fetch(`https://swapi.co/api/films/?search=${title}`)
    .then(resp => resp.json())
    .then( data => {
      fetch(data.results[0].url)
      .then(response => response.json())
      .then( data => {
        
        var arr = data.characters;
        var promiseArr = [];
        
        arr.map( (a, index) => {
          promiseArr.push(
            fetch(a).then(resp => resp.json())
                  .then( data => data.name)
                  .then( d => data.characters[index]=d )
          );
        })

        Promise.all(promiseArr).then(result=> {
          this.props.dispatch({type:"GET_FILM",data: data});
          this.setState({});
        })

      });
    });
  }
  render() {
    const title = window.location.href.split('/')[4].split('%20').join(" ");
    const film = this.props.film.data; 
    if ( film.characters === undefined) {
      this.search(title);
    }
    return (
      <div className="container">
        <Crawling
          film = {film}
          overlayVis = {this.state.overlayVis}
          playButton = {this.state.playButton}
          pauseButton = {this.state.pauseButton}
          playClick = {this.playClick.bind(this)}
          pauseClick = {this.pauseClick.bind(this)}
        />
        <div style={{visibility: this.state.hidden}}>
          <FilmData film = {film} />
        </div>
      </div>
    )
  }
}
export default connect(s => ({film : s.film}))(FilmContainer);