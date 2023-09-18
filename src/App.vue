<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './data/store'
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      baseUri: store.baseUri,
      api_key: store.api_key,
      films: [],
      series: [],
      seriesGenres: [],
      filmsGenres: [],
      isFirstSearch: true,
      filteredFilmsByGenre: [],
      filteredSeriesByGenre: []
    }
  },
  methods: {
    fetchContent(endpoint, string) {
      // ajax call
      axios.get(endpoint).then(
        (res) => {

          if (string === 'movie') {
            this.films = res.data.results
            this.fetchActors(string, this.films)
          } else {
            this.series = res.data.results
            this.fetchActors(string, this.series)
          }

          // funzione per selezionare il genere corrente
          this.getContentGenre(this.filmsGenres, this.films)
          this.getContentGenre(this.seriesGenres, this.series)
        }
      )
    },
    fetchFilter(string) {
      console.log('Hai cercato: ' + string)
      this.isFirstSearch = false
      // monto l'endpoint con il parametro dinamico
      const filteredUriFilms = `${this.baseUri}/search/movie?api_key=${this.api_key}&query=${string}&language=it-IT`
      const filteredUriSeries = `${this.baseUri}/search/tv?api_key=${this.api_key}&query=${string}&language=it-IT`

      // fetch genres list
      this.fetchGenresList()
      // richiamo la funzione che ha la call usando l'endpoint nuovo
      this.fetchContent(filteredUriFilms, 'movie')
      this.fetchContent(filteredUriSeries, 'tv')
    },
    fetchActors(path, targets) {
      // una chiamata per ogni film/serie che esce nella ricerca
      targets.forEach(target => {
        // chiamata ajax per gli attori
        axios.get(`${store.baseUri}/${path}/${target.id}/credits?api_key=${store.api_key}`).then(
          res => {

            let actorsList = ''
            // prendo i primi 5 attori
            for (let i = 0; i < 5; i++) {
              // if in caso non ci siano almeno 5 attori
              if (res.data.cast[i]) actorsList += ` ${res.data.cast[i].name}, `
            }
            // in caso ci siano più di 5 attori
            if (res.data.cast.length > 5) actorsList += ' ...'
            target.actors = actorsList
          }
        )
      })
    },
    fetchGenresList() {
      axios.get(`${store.baseUri}/genre/movie/list?api_key=${store.api_key}&language=it-IT`).then(
        res => {
          this.filmsGenres = res.data
        }
      )
      axios.get(`${store.baseUri}/genre/tv/list?api_key=${store.api_key}&language=it-IT`).then(
        res => {
          this.seriesGenres = res.data
        }
      )
    },
    getContentGenre(genresList, targets) {
      targets.forEach(target => {
        target.genres = ''
        if (genresList.genres) {
          const contentGenre = genresList.genres.filter(genre => {
            for (let i = 0; i < target.genre_ids.length; i++) {
              if (genre.id === target.genre_ids[i]) return genre.name
            }
          })

          contentGenre.forEach(gen => {
            target.genres += ` ${gen.name} `
          })
        }
      })

      this.filteredFilmsByGenre = this.films
      this.filteredSeriesByGenre = this.series
    },
    changeGenreFilter(genre) {
      if (genre === '--') {
        this.filteredFilmsByGenre = this.films
        this.filteredSeriesByGenre = this.series
      } else {
        this.filteredFilmsByGenre = this.films.filter(film => {
          return film.genres.includes(genre)
        })
        this.filteredSeriesByGenre = this.series.filter(serie => {
          return serie.genres.includes(genre)
        })
      }
    }
  }
}
</script>

<template>
  <AppHeader @search-change="fetchFilter" @changed-option="changeGenreFilter" :filmsGenres="filmsGenres"
    :isFirstSearch="isFirstSearch" />
  <AppMain :films="filteredFilmsByGenre" :series="filteredSeriesByGenre" :isFirstSearch="isFirstSearch" />
</template>

<style lang="scss">
@use './assets/sass/style.scss';
</style>
