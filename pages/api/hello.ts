// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: Array<{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }>
}

export default async function handler() {
  const response =  await fetch('http://localhost:9090/v1/images');

  const data = await response.json();

  return data;
  // res.status(200).json(data)
}
