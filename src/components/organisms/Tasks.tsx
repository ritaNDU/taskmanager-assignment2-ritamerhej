import TaskStructure from "../../data/tasksStructure";
import Task from "../molecules/Task";

interface Props {
  tasks: TaskStructure[];
  handleCompletedTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

const Tasks = ({ tasks, handleCompletedTask, handleDeleteTask }: Props) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            priority={task.priority}
            isCompleted={task.isCompleted}
            handleCompleteTask={() => {
              handleCompletedTask(task.id);
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
