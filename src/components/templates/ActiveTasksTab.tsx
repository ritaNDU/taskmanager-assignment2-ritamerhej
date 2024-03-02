import { Dispatch } from "react";
import TaskStructure from "../../data/tasksStructure";
import CreateTaskForm from "../molecules/CreateTaskForm";
import Tasks from "../organisms/Tasks";
import { ACTION, State } from "./TasksManager";

interface Props {
  tasks: TaskStructure[];
  state: State;
  dispatch: Dispatch<ACTION>;
}

const ActiveTasksTab = ({ tasks, state, dispatch }: Props) => {
  return (
    <>
      <CreateTaskForm state={state} dispatch={dispatch} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} dispatch={dispatch} />
      ) : (
        <h2>No active tasks yet!</h2>
      )}
    </>
  );
};

export default ActiveTasksTab;
