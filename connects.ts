import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Hello from Next.js!' });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


import { GetServerSideProps } from 'next';

type Props = {
  data: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    return { props: { data: 'Error fetching data' } };
  }
};

const Page = ({ data }: Props) => <div>Data: {data}</div>;

export default Page;


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        throw new CustomError(`Method ${req.method} Not Allowed`, 405);
      }
  
      const data = JSON.parse(req.body);
  
      // Simulate database operation
      if (!data) {
        throw new CustomError("Invalid data", 400);
      }
  
      res.status(200).json({ message: "Success", data });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.code).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
  