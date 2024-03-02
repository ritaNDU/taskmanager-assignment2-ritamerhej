import Input from "@mui/material/Input";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  onChange: (e: ChangeEvent) => void;
  value: string;
  placeholder: string;
}

const InputField = ({ name, onChange, value, placeholder }: Props) => {
  return (
    <Input
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default InputField;
