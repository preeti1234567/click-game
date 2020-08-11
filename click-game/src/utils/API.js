import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=G6fDbXcTyI7uGVHiwJf1fD8IsF8bA0W5&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getPuppyList: function() {
    return axios.get(BASEURL + "dogs" + APIKEY);
  }
};