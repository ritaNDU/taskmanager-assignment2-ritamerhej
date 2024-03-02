import { ChangeEvent, FormEvent, useState, useReducer } from "react";
import TabsManager from "./TabsManager";
import TaskStructure from "../../data/tasksStructure";

const TasksManager = () => {
  const [allTasks, setAllTasks] = useState<TaskStructure[]>([]);
  const [newTaskName, setNewTaskName] = useState("");

  const completedTasks: TaskStructure[] = allTasks.filter(
    (task) => task.isCompleted
  );
  const activeTasks: TaskStructure[] = allTasks.filter(
    (task) => !task.isCompleted
  );

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

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();
    setAllTasks([
      ...allTasks,
      {
        id: crypto.randomUUID(),
        title: newTaskName,
        isCompleted: false,
      },
    ]);
    setNewTaskName("");
  };

  return (
    <>
      <TabsManager
        newTaskName={newTaskName}
        completedTasks={completedTasks}
        activeTasks={activeTasks}
        handleDeleteTask={handleDeleteTask}
        handleCompletedTask={handleCompletedTask}
        handleInputChange={handleInputChange}
        handleCreateTask={handleCreateTask}
      />
    </>
  );
};

export default TasksManager;
