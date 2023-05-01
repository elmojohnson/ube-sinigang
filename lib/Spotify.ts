import axios from "axios";

const spotify = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
});

export default spotify;