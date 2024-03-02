import Button from "@mui/material/Button";

interface Props {
  name: string;
  onClick: () => void;
}

const CancelButton = ({ name, onClick }: Props) => {
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

export default CancelButton;
