// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { type } from 'os';
import redis from '../../redis';
import { Message } from '../../typing';

type Data = {
  message: Message;
}

type ErrorData = {
    body: string;
  };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {

    if (req.method !== "POST") {
        res.status(405).json({ body: "Method not allowed" });
        return;
      }
      const { message } = req.body;
      
      const newMessage = {
        ...message,
        created_at: Date.now(), //replace current timestamp of the user to the timestamp of the server
      }

      await redis.hset("messages", message.id, JSON.stringify(newMessage));
  res.status(200).json({ message: newMessage })
}