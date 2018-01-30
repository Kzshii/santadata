import axios from 'axios';
import Config from './../config.json';
import Base64 from './base64';

axios.defaults.baseURL = Config.rest.baseURL;

export function Post(route, data, urlData) {

  let urlComplete = "";

  for(let i = 0; i < urlData.lenght ; i++) {
    urlComplete = urlComplete + urlData[i] + "/";
  }

  axios.post(
    Config.rest.routes[route]+urlComplete,
    "data="+Base64.encode(data)
  )
  .then(
    function(response) {
      return(response.data.data);
    }
  )
  .catch(
    function(error) {
      return(error);
    }
  );
}
