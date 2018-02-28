// @flow
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default client
