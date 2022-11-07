import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { skill, Social } from "../../typings";

const query = groq`
*[_type == 'social]
`

type Data = {
  socials: Skill[]
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
    ) {
      const socials: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({socials })
  }
  