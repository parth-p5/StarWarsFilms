<b>Star Wars Films</b>

## Project Status

  * Star Wars Films project has complete functionalitiy of searching film with title or including film characters and designed crawling animation nearly as original.

## About Project

  * On home page you can search about film by film title or characters that film have. The search box is designed to give autocomplete suggestions. Every film you search that has its own unique url and open in new tab. On film detail page in starting some seconds crawling animation run and then pause button appear. And below film details got available. Film details includes title, director, producer, release date, characters. When you pause animation, static information of film got available and if you want to start animation, there is play button available there.

## Set UP

  * Clone the repository

  ### `npm install`
  Install needed packages for the project.

  * You are ready to run the application.

  ### `npm start`
  Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.

## Folder Structure

After setting up, your project should look like this:

```
StarWarsFilms/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    starwars.jpg
  src/
    components/
      Crawling.jsx
      FilmData.jsx
      crawling.css
      filmData.css
    reducers/
      initialState.js
      index.js
      film.js
    store/
      configureStore.js
    index.js
    Root.js
    App.js
    FilmContainer.js
    App.test.js
    index.css
    registerServiceWorker.js
```

* You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

* Only files inside `public` can be used from `public/index.html`.<br>
