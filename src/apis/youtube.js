import axios from "axios";

const KEY = "AIzaSyDFifGwKh83N252tpIX3yRQQvXoZl0KijQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});