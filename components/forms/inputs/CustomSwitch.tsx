import { FormControl, FormLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { Controller, Control } from 'react-hook-form';

export const CustomFormSwitch = ({
    name,
    control,
    label,
}: {
    name: string;
    control: Control;
    label?: string;
}): JSX.Element => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <FormControl component="fieldset">
                    <FormLabel component="legend">{label}</FormLabel>
                    <Switch onChange={onChange} checked={value} />
                </FormControl>
            )}
        />
    );
};
