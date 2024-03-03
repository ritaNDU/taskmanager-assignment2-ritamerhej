import { Typography } from "@mui/material";
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
    <li
      className={`p-4 shadow-md m-2 border-l-8 text-wrap
    bg-white  ${isCompleted ? " border-l-green-400" : " border-l-red-400"}
    flex flex-col gap-2 w-full  place-items-baseline justify-between rounded-xl 
   md:flex-row  lg:flex-row `}
    >
      <div className="flex gap-2">
        <div className="overflow-hidden flex-1">
          <Typography variant="body1" className="text-wrap">
            {title}
          </Typography>
        </div>
        <div
          className={`${
            isCompleted
              ? "bg-green-100 text-green-400 border-l-green-400"
              : "bg-red-100 text-red-400 border-l-red-400"
          } rounded-xl w-fit h-fit text-center font-bold p-1 
          text-sm `}
        >
          {isCompleted ? "Complete" : "Active"}
        </div>
      </div>
      <div className="flex gap-1 justify-end place-items-end flex-2">
        <DeleteButton name="Delete Task" onClick={handleDeleteTask} />
        <CheckboxField checked={isCompleted} onChange={handleCompleteTask} />
      </div>
    </li>
  );
};

export default Task;
