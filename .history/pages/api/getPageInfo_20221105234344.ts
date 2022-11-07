import type {NextApiRequest, NextApiResponse} from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

const query = groq`
*[_type == 'PageInfo]{
  ...,
  technologies[]->
}
`;

type Data = {
  PageInfos: PageInfo[]
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
    ) {
      const PageInfos: PageInfo[] = await sanityClient.fetch(query);
    res.status(200).json({PageInfo })
  }
  