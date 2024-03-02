import DeleteButton from "../atoms/Buttons/DeleteButton";
import CheckboxField from "../atoms/CheckboxField";

interface Props {
  title: string;
  isCompleted: boolean;
  priority: number;
  handleDeleteTask: () => void;
  handleCompleteTask: () => void;
}

const Task = ({
  title,
  isCompleted,
  priority,
  handleDeleteTask,
  handleCompleteTask,
}: Props) => {
  return (
    <li className="flex">
      <h2>{title}</h2>
      <p>Priority: {priority}</p>
      <DeleteButton name="Delete Task" onClick={handleDeleteTask} />
      <CheckboxField checked={isCompleted} onChange={handleCompleteTask} />
    </li>
  );
};

export default Task;
