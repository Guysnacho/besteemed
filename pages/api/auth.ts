// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import authCodes from "../../utils/constants";

type Data = {
  statusCode: number;
  body?: {
    email: string;
    password: string;
  };
};

const handleSignIn = (email: string, password: string) => {
  // prune request from client
};
const handleSignOut = () => {
  // prune request from client
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.body.statusCode == authCodes.AUTHREQUEST) {
    handleSignIn(req.body.email, req.body.password);
    req.body.res.status(200).json({ message: "You're authed" });
  } else if (req.body.statusCode == authCodes.SIGNOUTREQUEST) {
    handleSignOut();
  }
  req.body.res.status(400).json({ message: "???" });
}
