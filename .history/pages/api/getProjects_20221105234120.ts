import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`
*[_type == 'social]{
  ...,
  technologies[]->
}
`;

type Data = {
  skills: Project[]
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
    ) {
      const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({skills })
  }
  