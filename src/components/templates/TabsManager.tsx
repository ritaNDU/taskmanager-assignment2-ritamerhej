import { Dispatch, SyntheticEvent, useState } from "react";
import ActiveTasksTab from "./ActiveTasksTab";
import CompletedTasksTab from "./CompletedTasksTab";
import { Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import TaskStructure from "../../data/tasksStructure";
import { ACTION, State } from "./TasksManager";

interface Props {
  completedTasks: TaskStructure[];
  activeTasks: TaskStructure[];
  dispatch: Dispatch<ACTION>;
  state: State;
}

const TabsManager = ({
  completedTasks,
  activeTasks,
  dispatch,
  state,
}: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: SyntheticEvent, newIndex: number) => {
    setCurrentTab(newIndex);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Active Tasks" />
        <Tab label="Completed Tasks" />
      </Tabs>
      <TabPanel value={0} index={currentTab} isLoading={isLoading}>
        <ActiveTasksTab tasks={activeTasks} state={state} dispatch={dispatch} />
      </TabPanel>
      <TabPanel value={1} index={currentTab} isLoading={isLoading}>
        <CompletedTasksTab tasks={completedTasks} dispatch={dispatch} />
      </TabPanel>
    </>
  );
};

export default TabsManager;
