import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d5zWSEkuCQf0ZGkONjjui0078KaZNYdK1dC7uSFAFYc'
  }
});