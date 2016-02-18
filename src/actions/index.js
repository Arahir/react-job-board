import axios from 'axios';

export const FETCH_JOBS = 'FETCH_JOBS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=hdgfkjhmgfkhjmldkfjhkgpmljgfdk123'

export function fetchJobs() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_JOBS,
    payload: request
  }
}
