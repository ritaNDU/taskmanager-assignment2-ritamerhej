import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CancelButton from "../atoms/Buttons/CancelButton";
import DeleteButton from "../atoms/Buttons/DeleteButton";

interface Props {
  isOpen: boolean;
  handleConfirmDelete: () => void;
  handleCancel: () => void;
}

const DeleteTaskModal = ({
  isOpen,
  handleConfirmDelete,
  handleCancel,
}: Props) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Confirm Delete Task</DialogTitle>
      <DialogContent>Do you really want to delete this task?</DialogContent>
      <DialogActions>
        <CancelButton name="Cancel" onClick={handleCancel} />
        <DeleteButton name="Delete" onClick={handleConfirmDelete} />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskModal;
