import { Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import type { Contract } from '@/db/contract';

import { CustomFormInputDate, CustomFormSwitch, CustomFormInputText } from './inputs';

export const ContractForm = ({ contract }: { contract: Contract }): JSX.Element => {
    const { handleSubmit, reset, control } = useForm({ defaultValues: contract });

    const onSubmit = async (data: Contract) => {
        const res = await fetch('/api/contract/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contract: data }),
        });

        //  if (res.status === 200) {
        //      setMsg({ message: 'An email has been sent to your mailbox' });
        //  } else {
        //      setMsg({ message: await res.text(), isError: true });
        //  }
    };

    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomFormInputText name="company" label="Company" control={control} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormInputDate name="periodStart" label="Starting date" control={control} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormInputDate name="periodEnd" label="Ending date" control={control} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormSwitch name="scheduledForRenewal" label="Scheduled for renewal" control={control} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormInputDate name="negotiationRenewalDate" label="Negociation date" control={control} />
                </Grid>

                <Button onClick={handleSubmit(onSubmit)} variant={'outlined'} color="primary">
                    Submit
                </Button>
                <Button onClick={() => reset()}>Reset</Button>
            </Grid>
        </form>
    );
};
