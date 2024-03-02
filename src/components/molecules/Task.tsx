import DeleteButton from "../atoms/Buttons/DeleteButton";
import CheckboxField from "../atoms/CheckboxField";

interface Props {
  title: string;
  isCompleted: boolean;
  handleDeleteTask: () => void;
  handleCompleteTask: () => void;
}

const Task = ({
  title,
  isCompleted,
  handleDeleteTask,
  handleCompleteTask,
}: Props) => {
  return (
    <li className="flex">
      <h2>{title}</h2>
      <DeleteButton name="Delete Task" onClick={handleDeleteTask} />
      <CheckboxField checked={isCompleted} onChange={handleCompleteTask} />
    </li>
  );
};

export default Task;
