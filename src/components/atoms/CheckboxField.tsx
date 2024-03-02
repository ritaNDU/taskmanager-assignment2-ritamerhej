import Checkbox from "@mui/material/Checkbox";

interface Props {
  checked: boolean;
  onChange: () => void;
}

const CheckboxField = ({ checked, onChange }: Props) => {
  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        onChange();
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default CheckboxField;
