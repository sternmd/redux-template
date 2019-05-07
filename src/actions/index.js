import axios from 'axios';
const URL = 'http://localhost:3004';


//SEARCH
export function aritstListSearch(keywords){
  const request = axios.get(`${URL}/artists?q=${keywords}`)
    .then(response => response.data)

  return {
    type: 'GET_ARTISTS_SEARCH',
    payload: request
  }
}

// ARTIST DETAIL PAGE
export function artistDetail(id){
  const request = axios.get(`${URL}/artists?id=${id}`)
    .then(response => response.data)

  return {
    type: 'GET_ARTISTS_DETAIL',
    payload: request
  }
}

// STARTPAGE ALL
export function artistListAll(){
  const request = axios.get(`${URL}/artists?_limit=6`)
    .then(response => response.data)

  return {
    type: 'GET_ARTISTS_ALL',
    payload: request
  }
}

// CLEAR ARTIST DETAIL
export function clearArtistDetail(){
  return {
    type: 'CLEAR_ARTISTS_DETAIL',
    payload: null
  }
}
