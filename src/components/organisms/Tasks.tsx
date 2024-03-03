import { Dispatch } from "react";
import TaskStructure from "../../data/tasksStructure";
import Task from "../molecules/Task";
import { ACTION } from "../templates/TasksManager";

interface Props {
  tasks: TaskStructure[];
  dispatch: Dispatch<ACTION>;
}

const Tasks = ({ tasks, dispatch }: Props) => {
  const handleCompleteTask = (taskId: string) => {
    dispatch({
      type: "updateStatus",
      id: taskId,
    });
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch({
      type: "remove",
      id: taskId,
    });
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            handleCompleteTask={() => {
              handleCompleteTask(task.id);
            }}
            handleDeleteTask={() => {
              handleDeleteTask(task.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default Tasks;
