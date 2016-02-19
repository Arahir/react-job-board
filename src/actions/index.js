import axios from 'axios';

export const FETCH_JOBS = 'FETCH_JOBS';
export const CREATE_JOB = 'CREATE_JOB';
export const FETCH_JOB  = 'FETCH_JOB';
export const DELETE_JOB = 'DELETE_JOB'


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

export function fetchJob(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_JOB,
    payload: request
  }
}

export function deleteJob(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_JOB,
    payload: request
  }
}
