import axios from 'axios';

export const FETCH_JOBS = 'FETCH_JOBS';
export const CREATE_JOB = 'CREATE_JOB';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=hdgfkjhmgfkhjmldkfjhkgpmljgfdk123'

export function fetchJobs() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_JOBS,
    payload: request
  }
}

export function createJob(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_JOB,
    payload: request
  }
}
