import React from 'react';
import Error from 'next/error';
import { GetStaticPaths, GetStaticProps } from 'next';
import superjson from 'superjson';

import { findContractById, getContracts } from '@/db/index';
import type { Contract } from '@/db/contract';
// import { useContract } from '@/hooks/index';
import Navigation from '@/components/Navigation';
import ContractView from '@/components/contracts/ContractView';

export default function ContractPage({ contract }: { contract: Contract }): JSX.Element {
    if (!contract) return <Error statusCode={404} />;

    return (
        <>
            <Navigation />
            <ContractView contract={contract} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on locations
    const contracts = await getContracts();

    const paths = contracts.map(({ contractId }) => ({
        params: { contractId: contractId.toString() },
    }));

    // We'll pre-render only these paths at build time.
    // {fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const rawContract = await findContractById(parseInt(context.params?.contractId as string));
    // needed to fix Date not serializable in nextJS
    // https://github.com/vercel/next.js/discussions/11498
    const { json: serializedContract } = superjson.serialize(rawContract);

    return { props: { contract: serializedContract } };
};
