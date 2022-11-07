import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";



export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  