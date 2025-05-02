import {
  FormControl,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";

const BRInput = ({ sx, ...props }: OutlinedInputProps) => {
  return (
    <FormControl variant="outlined" fullWidth sx={{ margin: "0px", ...sx }}>
      <InputLabel shrink>{props.label}</InputLabel>
      <OutlinedInput notched={true} {...props} />
    </FormControl>
  );
};

export default BRInput;
