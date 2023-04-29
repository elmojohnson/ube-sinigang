import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const scope = "user-read-private user-read-email";
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const login_url: string = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;

  res.status(200).json({
    url: login_url,
  });
}
