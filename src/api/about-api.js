import config from './api-config';

export function fetchAbout() {

    const URL = `${process.env.REACT_APP_BASE_API_URL}/posts?${config.ABOUT_CAT}&order=asc&_embed`
        return fetch(URL)
            .then(response => response.json())
            

    //return fetch
}