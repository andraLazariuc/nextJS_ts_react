import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Controller, Control } from 'react-hook-form';

// const DATE_FORMAT = 'dd-MMM-yy';

export const CustomFormInputDate = ({
    name,
    control,
    label,
}: {
    name: string;
    control: Control;
    label?: string;
}): JSX.Element => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <KeyboardDatePicker onChange={onChange} value={value} label={label} />
                )}
            />
        </MuiPickersUtilsProvider>
    );
};
