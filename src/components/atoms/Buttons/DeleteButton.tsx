import Button from "@mui/material/Button";

interface Props {
  name: string;
  onClick: () => void;
}

const DeleteButton = ({ name, onClick }: Props) => {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
    >
      {name}
    </Button>
  );
};

export default DeleteButton;
