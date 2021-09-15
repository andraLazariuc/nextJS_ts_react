import type { NextApiRequest, NextApiResponse } from 'next';

import { findContractById, updateContract } from '@/db/index';
import type { Contract } from '@/db/index';

export default async function contractHandler(
    req: NextApiRequest,
    res: NextApiResponse<Contract | null>,
): Promise<void> {
    const {
        query: { contractId },
        method,
        body: { updatedContract },
    } = req;

    switch (method) {
        case 'GET':
            const contract = await findContractById(parseInt(contractId as string));
            res.status(200).json(contract);
            break;
        case 'PUT':
            const updatedContractFromDb = await updateContract(updatedContract);
            res.status(200).json(updatedContractFromDb);
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
