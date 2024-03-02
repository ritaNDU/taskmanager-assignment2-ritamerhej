import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import ActiveTasksTab from "./ActiveTasksTab";
import CompletedTasksTab from "./CompletedTasksTab";
import { Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import TaskStructure from "../../data/tasksStructure";

interface Props {
  newTaskName: string;
  sliderValue: number;
  completedTasks: TaskStructure[];
  activeTasks: TaskStructure[];
  handleDeleteTask: (taskId: string) => void;
  handleCompletedTask: (taskId: string) => void;
  handleInputChange: (e: ChangeEvent) => void;
  handleCreateTask: (e: FormEvent) => void;
  handleSliderChange: (e: Event, newValue: number | number[]) => void;
}

const TabsManager = ({
  newTaskName,
  completedTasks,
  activeTasks,
  sliderValue,
  handleDeleteTask,
  handleCompletedTask,
  handleInputChange,
  handleCreateTask,
  handleSliderChange,
}: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={(e: SyntheticEvent, newIndex: number) => {
          setCurrentTab(newIndex);
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 1000);
        }}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Active Tasks" />
        <Tab label="Completed Tasks" />
      </Tabs>
      <TabPanel value={0} index={currentTab} isLoading={isLoading}>
        <ActiveTasksTab
          tasks={activeTasks}
          sliderValue={sliderValue}
          newTaskName={newTaskName}
          handleCompletedTask={handleCompletedTask}
          handleDeleteTask={handleDeleteTask}
          handleInputChange={handleInputChange}
          handleCreateTask={handleCreateTask}
          handleSliderChange={handleSliderChange}
        />
      </TabPanel>
      <TabPanel value={1} index={currentTab} isLoading={isLoading}>
        <CompletedTasksTab
          tasks={completedTasks}
          handleCompletedTask={handleCompletedTask}
          handleDeleteTask={handleDeleteTask}
        />
      </TabPanel>
    </>
  );
};

export default TabsManager;
