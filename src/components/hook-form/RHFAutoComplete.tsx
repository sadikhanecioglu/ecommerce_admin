import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";


type RHFAutoCompleteProps = {
    data: any[];
    defaultValue: any[];
    getOptionLabel: (option: any) => string;
    isOptionEqualToValue: (option: any, value: any) => boolean;
    placeholder: string;
    label: string;
    id: string;
    name: string;
    onInputTextChange?: (newText: string) => void;
    groupBy?: (option: any) => string;
}


export default function RHFAutoComplete({ name, id, data, onInputTextChange, groupBy, getOptionLabel, isOptionEqualToValue, defaultValue, placeholder, label }: RHFAutoCompleteProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    multiple
                    id={id}
                    isOptionEqualToValue={isOptionEqualToValue}
                    groupBy={groupBy}
                    options={data}
                    value={field.value.id}
                    getOptionLabel={getOptionLabel}
                    defaultValue={defaultValue}
                    onChange={(e, value) => field.onChange(value.map((e) => e.id))}
                    onInputChange={(event, value, reason) => {

                        if (onInputTextChange)
                            onInputTextChange(value);

                    }}
                    renderInput={(params) => (
                        <TextField

                            {...params}
                            variant="standard"
                            label={label}
                            placeholder={placeholder}
                            helperText={
                                <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                                    {error?.message}
                                </FormHelperText>}
                        />
                    )}
                />
            )}

        />
    )
}