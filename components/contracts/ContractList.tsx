import type { NextPage } from 'next';
import Error from 'next/error';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useContracts } from '@/hooks/contract';
import ContractCard from './ContractCard';
import type { SerializedContract } from '@/db/contract';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 20,
    },
});

const ContractList: NextPage = () => {
    const contracts = useContracts();
    const classes = useStyles();

    if (!contracts) return <Error statusCode={404} />;

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {contracts?.map((contract: SerializedContract) => (
                    <Grid item xs={12} sm={6} md={3} key={contract.contractId}>
                        <Paper elevation={0} className={classes.paper}>
                            <ContractCard contract={contract} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ContractList;
