import config from './api-config';

export function fetchContact() {

    const URL = `${process.env.REACT_APP_BASE_API_URL}/posts?${config.CONTACT_CAT}`
    return fetch(URL)
        .then(response => response.json())

}