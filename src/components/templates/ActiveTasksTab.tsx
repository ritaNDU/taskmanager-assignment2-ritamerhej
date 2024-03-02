import { ChangeEvent, FormEvent } from "react";
import TaskStructure from "../../data/tasksStructure";
import CreateTaskForm from "../molecules/CreateTaskForm";
import Tasks from "../organisms/Tasks";

interface Props {
  newTaskName: string;
  tasks: TaskStructure[];
  handleCompletedTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
  handleInputChange: (e: ChangeEvent) => void;
  handleCreateTask: (e: FormEvent) => void;
}

const ActiveTasksTab = ({
  newTaskName,
  tasks,
  handleCompletedTask,
  handleDeleteTask,
  handleInputChange,
  handleCreateTask,
}: Props) => {
  return (
    <>
      <CreateTaskForm
        value={newTaskName}
        handleInputChange={handleInputChange}
        handleCreateTask={handleCreateTask}
      />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          handleCompletedTask={handleCompletedTask}
          handleDeleteTask={handleDeleteTask}
        />
      ) : (
        <h2>No active tasks yet!</h2>
      )}
    </>
  );
};

export default ActiveTasksTab;
