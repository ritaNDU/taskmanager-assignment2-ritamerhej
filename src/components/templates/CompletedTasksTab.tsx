import TaskStructure from "../../data/tasksStructure";
import Tasks from "../organisms/Tasks";

interface Props {
  tasks: TaskStructure[];
  handleCompletedTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

const CompletedTasksTab = ({
  tasks,
  handleCompletedTask,
  handleDeleteTask,
}: Props) => {
  return (
    <>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          handleCompletedTask={handleCompletedTask}
          handleDeleteTask={handleDeleteTask}
        />
      ) : (
        <h2>No completed tasks yet!</h2>
      )}
    </>
  );
};

export default CompletedTasksTab;
