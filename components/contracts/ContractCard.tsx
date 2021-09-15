import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import type { SerializedContract } from '@/db/contract';

type CardProps = {
    contract: SerializedContract;
};

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 360,
        padding: 20,
        margin: 30,

        '&:hover, &$focusVisible': {
            border: '1px solid blue',
            color: 'blue',
        },
    },
    title: {
        marginBottom: 20,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
}));

const formatDate = (date: string) => moment(date).format('YYYY-MM-DD');

const ContractCard = ({ contract }: CardProps): JSX.Element => {
    const classes = useStyles();

    const { company, periodStart, periodEnd, scheduledForRenewal, negotiationRenewalDate } = contract;

    return (
        <Link href={`/contracts/${contract.contractId}`} passHref>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {company}
                    </Typography>
                    <Typography className={classes.pos}>Contract start date: {formatDate(periodStart)}</Typography>
                    <Typography className={classes.pos}>Contract end date: {formatDate(periodEnd)}</Typography>
                    <Typography className={classes.pos}>
                        Scheduled for renewal: {scheduledForRenewal ? 'YES' : 'NO'}
                    </Typography>
                    <Typography className={classes.pos}>
                        Negotiation renewal date: {formatDate(negotiationRenewalDate)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="contained">
                        Update contract
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
};

export default ContractCard;
