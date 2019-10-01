import { checkLocalStorageGenres, convertMovieGenres, isEmpty} from './Functions'
import httpRequest from './HttpRequest';


export const upComingMovies = async page => {
    try {
        let storedGenres = checkLocalStorageGenres('genres', null)

        if (isEmpty(storedGenres) || storedGenres == undefined) {
            storedGenres = await getGenres()
            localStorage.setItem('genres', JSON.stringify(storedGenres))
        }

        const movies = await getUpcomingMovies(page)
        const moviesWithGenres = convertMovieGenres(movies, storedGenres)
        return moviesWithGenres
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}

export const searchMovies = async (query, page) => {
    try {
        let storedGenres = checkLocalStorageGenres('genres', null)

        if (isEmpty(storedGenres)) {
            storedGenres = await getGenres()
            localStorage.setItem('genres', JSON.stringify(storedGenres))
        }

        const movies = await getSearchMovies(query, page)
        const searchedMoviesWithGenres = convertMovieGenres(movies, storedGenres)
        return searchedMoviesWithGenres
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}

export const movieDetails = async (movieId) => {
    try {
        const movie = await getMovieDetails(movieId)
        return movie
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}

const getUpcomingMovies = async (page) => {
    try {
        const req = await httpRequest({
            url: `/upcoming?page=${page}`,
            method: 'GET'
        })

        return await req;
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}

const getSearchMovies = async (query, page) => {
    try {
        const req = await httpRequest({
            url: `/search?query=${query}&page=${page}`,
            method: 'GET'
        })

        return await req;
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}

const getMovieDetails = async (movieId) => {
    try {
        const req = await httpRequest({
            url: `/details/${movieId}`,
            method: 'GET'
        })

        return await req;
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}

const getGenres = async () => {
    try {
        const req = await httpRequest({
            url: `/genres`,
            method: 'GET'
        })

        return await req;
    } catch (error) {
        window.alert('Erro! Tente novamente.')
    }
}




