import { Dispatch } from "react";
import TaskStructure from "../../data/tasksStructure";
import Tasks from "../organisms/Tasks";
import { ACTION } from "./TasksManager";

interface Props {
  tasks: TaskStructure[];
  dispatch: Dispatch<ACTION>;
}

const CompletedTasksTab = ({ tasks, dispatch }: Props) => {
  return (
    <>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} dispatch={dispatch} />
      ) : (
        <h2>No completed tasks yet!</h2>
      )}
    </>
  );
};

export default CompletedTasksTab;
