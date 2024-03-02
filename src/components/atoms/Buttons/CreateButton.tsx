import Button from "@mui/material/Button";
import { FormEvent } from "react";

interface Props {
  name: string;
  disabled: boolean;
  onClick: (e: FormEvent) => void;
}

const CreateButton = ({ name, disabled, onClick }: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled} role="submit">
      {name}
    </Button>
  );
};

export default CreateButton;
