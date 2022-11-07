import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";



export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>) {
    res.status(200).json({ name: 'John Doe' })
  }
  