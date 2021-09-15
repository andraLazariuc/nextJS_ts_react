import TextField from '@material-ui/core/TextField';
import { Controller, Control } from 'react-hook-form';

export const CustomFormInputText = ({
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
            render={({ field: { onChange, value } }) => <TextField onChange={onChange} value={value} label={label} />}
        />
    );
};
