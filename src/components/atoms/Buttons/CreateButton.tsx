import Button from "@mui/material/Button";
import { FormEvent } from "react";

interface Props {
  name: string;
  disabled: boolean;
  onClick: (e: FormEvent) => void;
}

const CreateButton = ({ name, disabled, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      color="secondary"
      role="submit"
      sx={{
        borderRadius: "40px",
      }}
    >
      {name}
    </Button>
  );
};

export default CreateButton;
