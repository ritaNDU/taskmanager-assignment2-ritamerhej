import { ChangeEvent, FormEvent } from "react";
import CreateButton from "../atoms/Buttons/CreateButton";
import InputField from "../atoms/InputField";

interface Props {
  value: string;
  handleInputChange: (e: ChangeEvent) => void;
  handleCreateTask: (e: FormEvent) => void;
}

const CreateTaskForm = ({
  value,
  handleInputChange,
  handleCreateTask,
}: Props) => {
  return (
    <form className="flex">
      <InputField
        name="create-task-field"
        placeholder="Create a task..."
        value={value}
        onChange={handleInputChange}
      />
      <CreateButton
        name="Create Task"
        disabled={value.length == 0}
        onClick={handleCreateTask}
      />
    </form>
  );
};

export default CreateTaskForm;
