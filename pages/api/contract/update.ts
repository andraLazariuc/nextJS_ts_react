import type { NextApiRequest, NextApiResponse } from 'next';

import { updateContract } from '@/db/index';
import type { Contract } from '@/db/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Contract | null>): Promise<void> {
    const contract = await updateContract(req.body.contract);
    res.status(200).json(contract);
}
