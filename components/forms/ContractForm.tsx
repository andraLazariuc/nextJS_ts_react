import { Button, Grid } from '@material-ui/core';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import type { Contract, SerializedContract } from '@/db/contract';
import { CustomFormInputDate, CustomFormSwitch, CustomFormInputText } from './inputs';

export const ContractForm = ({ contract }: { contract: SerializedContract }): JSX.Element => {
    const { enqueueSnackbar } = useSnackbar();
    const { handleSubmit, reset, control } = useForm<SerializedContract>({ defaultValues: contract });

    const onSubmit = async (data: Contract) => {
        const res = await fetch('/api/contract/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contract: data }),
        });

        if (res.status === 200) {
            enqueueSnackbar('Succesfully updated contract!', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
            });
            return;
        }

        enqueueSnackbar('Something went wrong while updating the contract!', {
            variant: 'error',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
        });
    };

    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomFormInputText name="company" label="Company" control={control as Control<FieldValues>} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormInputDate
                        name="periodStart"
                        label="Starting date"
                        control={control as Control<FieldValues>}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormInputDate
                        name="periodEnd"
                        label="Ending date"
                        control={control as Control<FieldValues>}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormSwitch
                        name="scheduledForRenewal"
                        label="Scheduled for renewal"
                        control={control as Control<FieldValues>}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomFormInputDate
                        name="negotiationRenewalDate"
                        label="Negociation date"
                        control={control as Control<FieldValues>}
                    />
                </Grid>

                <Button onClick={handleSubmit(onSubmit)} variant={'outlined'} color="primary">
                    Submit
                </Button>
                <Button onClick={() => reset()}>Reset</Button>
            </Grid>
        </form>
    );
};
