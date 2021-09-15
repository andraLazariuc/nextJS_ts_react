import type { NextApiRequest, NextApiResponse } from 'next';

import { getContracts } from '@/db/index';
import type { Contract } from '@/db/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Contract[]>): Promise<void> {
    const contracts = await getContracts();
    res.status(200).json(contracts);
}
