import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { ContractForm } from '@/components/forms';
import type { SerializedContract } from '@/db/contract';

type ContractViewProps = {
    contract: SerializedContract;
};

const useStyles = makeStyles({
    container: {
        minWidth: 600,
        maxWidth: 1000,
        padding: 20,
        margin: 30,
    },
    title: {
        marginBottom: 40,
    },
});

const ContractView = ({ contract }: ContractViewProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.container}>
            <Link href="/">
                <IconButton color="primary" aria-label="Go back" component="span">
                    <ArrowBack />
                    Back to contract list
                </IconButton>
            </Link>
            <h2 className={classes.title}>Update contract form</h2>
            <ContractForm contract={contract} />
        </Paper>
    );
};

export default ContractView;
