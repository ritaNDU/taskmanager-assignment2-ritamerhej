import { ChangeEvent, FormEvent } from "react";
import TaskStructure from "../../data/tasksStructure";
import CreateTaskForm from "../molecules/CreateTaskForm";
import Tasks from "../organisms/Tasks";

interface Props {
  newTaskName: string;
  tasks: TaskStructure[];
  sliderValue: number;
  handleCompletedTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
  handleInputChange: (e: ChangeEvent) => void;
  handleCreateTask: (e: FormEvent) => void;
  handleSliderChange: (e: Event, newValue: number | number[]) => void;
}

const ActiveTasksTab = ({
  newTaskName,
  tasks,
  sliderValue,
  handleCompletedTask,
  handleDeleteTask,
  handleInputChange,
  handleCreateTask,
  handleSliderChange,
}: Props) => {
  return (
    <>
      <CreateTaskForm
        value={newTaskName}
        sliderValue={sliderValue}
        handleInputChange={handleInputChange}
        handleCreateTask={handleCreateTask}
        handleSliderChange={handleSliderChange}
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
