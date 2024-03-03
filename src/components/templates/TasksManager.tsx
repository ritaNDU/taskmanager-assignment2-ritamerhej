import { useReducer } from "react";
import TabsManager from "./TabsManager";
import TaskStructure from "../../data/tasksStructure";
import TasksCounter from "../organisms/TasksCounter";

export interface State {
  allTasks: TaskStructure[];
  newTaskName: string;
}

export type ACTION =
  | { type: "add" }
  | { type: "remove"; id: string }
  | { type: "updateName"; title: string }
  | { type: "updateStatus"; id: string };

function reducer(state: State, action: ACTION) {
  const { type } = action;

  switch (type) {
    case "add":
      return {
        ...state,
        allTasks: [
          ...state.allTasks,
          {
            id: crypto.randomUUID(),
            title: state.newTaskName,
            isCompleted: false,
          },
        ],
        newTaskName: "",
      };
    case "remove":
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => action.id != task.id),
      };
    case "updateName":
      return { ...state, newTaskName: action.title };
    case "updateStatus":
      return {
        ...state,
        allTasks: state.allTasks.map((task) => {
          if (task.id == action.id) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}

const TasksManager = () => {
  const [state, dispatch] = useReducer(reducer, {
    allTasks: [],
    newTaskName: "",
  });

  const completedTasks: TaskStructure[] = state.allTasks.filter(
    (task) => task.isCompleted
  );
  const activeTasks: TaskStructure[] = state.allTasks.filter(
    (task) => !task.isCompleted
  );

  return (
    <div className="p-10 w-screen">
      <div className="flex gap-3 mb-8">
        <TasksCounter name="Active" tasksCount={activeTasks.length} />
        <TasksCounter name="Complete" tasksCount={completedTasks.length} />
      </div>
      <h2 className="text-xl font-semibold">Tasks Overview</h2>
      <TabsManager
        completedTasks={completedTasks}
        activeTasks={activeTasks}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default TasksManager;
