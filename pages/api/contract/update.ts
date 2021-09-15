import type { NextApiRequest, NextApiResponse } from 'next';

import { updateContract } from '@/db/index';
import type { Contract } from '@/db/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Contract | null>): Promise<void> {
    console.log('api.contract/update');
    console.log(req.body.contract);
    const contract = await updateContract(req.body.contract);
    res.status(200).json(contract);
}
