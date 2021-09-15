import moment from 'moment';
import faker from 'faker';

export type Contract = {
    company: string;
    contractId: number;
    periodStart: Date;
    periodEnd: Date;
    scheduledForRenewal: boolean;
    negotiationRenewalDate: Date;
};

export type SerializedContract = {
    company: string;
    contractId: number;
    periodStart: string;
    periodEnd: string;
    scheduledForRenewal: boolean;
    negotiationRenewalDate: string;
};

export type NewContract = {
    company: string;
    periodStart: Date;
    periodEnd: Date;
    scheduledForRenewal: boolean;
    negotiationRenewalDate: Date;
};
// Fake contracts data
// TODO: use real db
export const contracts = Array(10)
    .fill(null)
    .map((_elem, index) => {
        const periodStart = moment().subtract(index + 2, 'months');
        const periodEnd = moment().add(index + 10, 'months');
        const negociationRenewalDate = moment().add(index + 9, 'months');

        return {
            // company: `${faker.name.findName()} A/S`,
            company: `Company ${index} A/S`,
            contractId: 1000000 + index,
            periodStart: periodStart.toDate(),
            periodEnd: periodEnd.toDate(),
            // scheduledForRenewal: faker.datatype.boolean(),
            scheduledForRenewal: Math.random() < 0.5,
            negotiationRenewalDate: negociationRenewalDate.toDate(),
        };
    });

export async function getContracts(): Promise<Contract[]> {
    return contracts;
}

export async function findContractById(id: number): Promise<Contract | null> {
    return contracts.find(({ contractId }) => contractId === id) || null;
}

export async function insertContract(contract: NewContract): Promise<Contract> {
    const newContract = { contractId: 1000000 + contracts.length, ...contract };
    contracts.push(newContract);

    return newContract;
}

export async function updateContract(contractToUpdate: Contract): Promise<Contract | null> {
    const { contractId, ...fieldsToUpdate } = contractToUpdate;
    const contractToUpdateIndex = contracts.findIndex((contract) => contract.contractId === contractId);

    contracts[contractToUpdateIndex] = contractToUpdate;
    // TODO: add real db and fetch the updated contract from db
    return contractToUpdate;
}
