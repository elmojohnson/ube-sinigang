import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// POST
// Body: code
// Returns access token and refresh token

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Credentials
  const code = req.body.code;
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

  try {
    const result = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
      }
    );
    res.status(200).json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
}
