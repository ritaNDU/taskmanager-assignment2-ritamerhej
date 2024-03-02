import { ChangeEvent, Dispatch } from "react";
import CreateButton from "../atoms/Buttons/CreateButton";
import InputField from "../atoms/InputField";
import { ACTION, State } from "../templates/TasksManager";

interface Props {
  state: State;
  dispatch: Dispatch<ACTION>;
}

const CreateTaskForm = ({ state, dispatch }: Props) => {
  const handleInputChange = (e: ChangeEvent) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    dispatch({
      type: "updateName",
      title: currentTarget.value,
    });
  };
  const handleCreateTask = () => {
    dispatch({
      type: "add",
    });
  };

  return (
    <form className="flex">
      <InputField
        name="create-task-field"
        placeholder="Create a task..."
        value={state.newTaskName}
        onChange={handleInputChange}
      />
      <CreateButton
        name="Create Task"
        disabled={state.newTaskName.length == 0}
        onClick={handleCreateTask}
      />
    </form>
  );
};

export default CreateTaskForm;
