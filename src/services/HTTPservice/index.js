import axios from 'axios'

class HTTPService {
  static get = (url) => {
    return axios.get(url)
  }
}

export { HTTPService }
