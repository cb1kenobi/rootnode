import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	res.status(200).end(`API KEY = ${process.env.API_KEY || 'No API key set'} >> ${new Date().toISOString()}\n`);
}
