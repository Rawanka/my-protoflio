import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Education } from "../../typings";

const query = groq`
*[_type == 'Education][0]
`;

type Data = {
  Educations: Education[]
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
    ) {
      const Educations: Education[] = await sanityClient.fetch(query);
    res.status(200).json({Educations })
  }
  