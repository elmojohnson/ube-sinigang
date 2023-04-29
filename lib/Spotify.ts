import SpotifyWebApi from "spotify-web-api-node";

var Spotify = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI
});

export default Spotify;
