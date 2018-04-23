import React, { Component } from 'react';
import './filmData.css';

class FilmData extends Component {
  render() {
    const film = this.props.film;
    return (
      <div>
        <table className="film-table">
          <tbody>
            <tr>
              <th>Title</th>
              <td>{film.title}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>{film.director}</td>
            </tr>
            <tr>
              <th>Producer</th>
              <td>{film.producer}</td>
            </tr>
            <tr>
              <th>Release Date</th>
              <td>{film.release_date}</td>
            </tr>
            <tr>
              <th>Characters</th>
              <td>
                {film.characters === undefined ? (null) : (
                  film.characters.map((c, index) => <span key={index}>
                    {index === film.characters.length - 1 ? c : (c + ', ')}
                  </span>)
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default FilmData;