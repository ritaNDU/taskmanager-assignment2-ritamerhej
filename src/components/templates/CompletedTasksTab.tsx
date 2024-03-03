import { Dispatch } from "react";
import TaskStructure from "../../data/tasksStructure";
import Tasks from "../organisms/Tasks";
import { ACTION } from "./TasksManager";
import "./Tabs.css";

interface Props {
  tasks: TaskStructure[];
  dispatch: Dispatch<ACTION>;
}

const CompletedTasksTab = ({ tasks, dispatch }: Props) => {
  return (
    <div className="tab-layout">
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} dispatch={dispatch} />
      ) : (
        <h2>No Completed Tasks.</h2>
      )}
    </div>
  );
};

export default CompletedTasksTab;
