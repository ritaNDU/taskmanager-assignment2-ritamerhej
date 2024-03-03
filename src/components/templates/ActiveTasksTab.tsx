import { Dispatch } from "react";
import TaskStructure from "../../data/tasksStructure";
import CreateTaskForm from "../molecules/CreateTaskForm";
import Tasks from "../organisms/Tasks";
import { ACTION, State } from "./TasksManager";
import "./Tabs.css";

interface Props {
  tasks: TaskStructure[];
  state: State;
  dispatch: Dispatch<ACTION>;
}

const ActiveTasksTab = ({ tasks, state, dispatch }: Props) => {
  return (
    <div className="tab-layout">
      <CreateTaskForm state={state} dispatch={dispatch} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} dispatch={dispatch} />
      ) : (
        <h2>No Active Tasks.</h2>
      )}
    </div>
  );
};

export default ActiveTasksTab;
