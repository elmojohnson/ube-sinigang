import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-recently-played",
    "app-remote-control",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private"
  ];
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const login_url: string = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scopes.join(" ")}&redirect_uri=${redirect_uri}&show_dialog=true`;

  res.status(200).json({
    url: login_url,
  });
}
