// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { cache } from 'react';
import { groq, createClient } from 'next-sanity';

import {sanityClient} from '../../../sanity';


const query = groq`*[_type == "category"]{
    _id,
      ...
  }`;




type Data = {
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const categories = await sanityClient.fetch(query);

console.log(categories);
res.status(200).json({categories});
}

interface Category {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: "category";
    slug: {
        _type: "slug";
        current: string;
    };
    title: string;

}