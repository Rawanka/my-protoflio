import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";

const query = groq`

`

type Data = {
  socials: social[]
}

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
    ) {
      const social
    res.status(200).json({ name: 'John Doe' })
  }
  