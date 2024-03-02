import { ChangeEvent, FormEvent, useState } from "react";
import TabsManager from "./TabsManager";
import TaskStructure from "../../data/tasksStructure";

const TasksManager = () => {
  const [allTasks, setAllTasks] = useState<TaskStructure[]>([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState(0);

  const completedTasks: TaskStructure[] = allTasks.filter(
    (task) => task.isCompleted
  );
  const activeTasks: TaskStructure[] = allTasks
    .filter((task) => !task.isCompleted)
    .sort((task1, task2) => (task1.priority > task2.priority ? 1 : -1));

  const handleDeleteTask = (taskId: string) => {
    setAllTasks(allTasks.filter((task) => taskId != task.id));
  };
  const handleCompletedTask = (taskId: string) => {
    const updatedTasks: TaskStructure[] = allTasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setAllTasks(updatedTasks);
  };

  const handleInputChange = (e: ChangeEvent) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    setNewTaskName(currentTarget.value);
  };
  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    setNewTaskPriority(newValue as number);
  };

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();
    setAllTasks([
      ...allTasks,
      {
        id: crypto.randomUUID(),
        title: newTaskName,
        isCompleted: false,
        priority: newTaskPriority,
      },
    ]);
    setNewTaskName("");
  };

  return (
    <>
      <TabsManager
        newTaskName={newTaskName}
        completedTasks={completedTasks}
        sliderValue={newTaskPriority}
        activeTasks={activeTasks}
        handleDeleteTask={handleDeleteTask}
        handleCompletedTask={handleCompletedTask}
        handleInputChange={handleInputChange}
        handleCreateTask={handleCreateTask}
        handleSliderChange={handleSliderChange}
      />
    </>
  );
};

export default TasksManager;
