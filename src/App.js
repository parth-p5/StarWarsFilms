import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      options: [],
      url: ''
    }
  }
  handleChange(e) {
    const { value } = e.target;
    var people, films;
    var options = [];
    fetch(`https://swapi.co/api/people/?search=${value}`)
    .then(resp => resp.json())
    .then ( data => {
      people = data.results;
      // people.map( p => options.push(p.name));
      people.map( p => 
        p.films.map( f => 
          fetch(f).then( resp => resp.json())
                  .then( data => {
                    var i;
                    var flag = 0;
                    for (i=0;i<options.length;i++) {
                      if(options[i].title === data.title && options[i].year === data.release_date) {
                        flag = 1;
                        break;
                      }
                    }
                    if (flag === 0)
                      options.push({ title: data.title, year: data.release_date })
                    return
                  })
        ));
    })
    fetch(`https://swapi.co/api/films/?search=${value}`)
    .then(resp => resp.json())
    .then ( data => {
      films = data.results;
      films.map( f => {
        var i;
        var flag = 0;
        for (i=0;i<options.length;i++) {
          if(options[i].title === f.title && options[i].year === f.release_date) {
            flag = 1;
            break;
          }
        }
        if (flag === 0)
          options.push({ title: f.title, year: f.release_date })
        return 0;
      });
    })
    this.setState({ search: value, options });
  }
  handlleSelect(value) {
    this.setState({ search: value });
  }
  handleClick() {
    this.setState({ search: '', options: [] });
  }
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundImage: `url(http://localhost:3000/starwars.jpg)`, height: '100vh' }}>
        <header style={{ paddingTop: '150px' }}>
          <h1
            className="App-title"
            style={{ fontWeight: 'bolder', fontSize: '4em', color: 'white', margin: '0px' }}
          >
            Welcome to Star Wars
          </h1>
        </header>
        <Autocomplete
          inputProps={{ style: { width: '300px', fontSize: '1.5em', marginTop: '30px', marginBottom: '20px' } }}
          getItemValue={(item) => item.title}
          items={this.state.options}
          renderItem={(items, isHighlighted) =>
            <div key={items.title} style={{ background: isHighlighted ? 'lightgray' : 'white', textAlign: 'left' }}>
              {items.title}{' '}{moment(items.year,"YYYY/MM/DD").year()}
            </div>
          }
          value={this.state.search}
          onChange={this.handleChange.bind(this)}
          onSelect={this.handlleSelect.bind(this)}
        />
        <button
          className="btn btn-primary"
          style={{display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '15px',
            fontSize: '1.5em',
            backgroundColor: '#334fb7',
            borderColor: '#0b1f31'
          }}
          onClick={() => {
            var w = window.open(`/film/${this.state.search}`, '_blank');
            w.title = this.state.search;
            this.handleClick()
          }
          }
        >
          Search
        </button>
      </div>
    );
  }
}

export default connect(s => ({film: s.film}))(App);
