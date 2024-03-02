import { ChangeEvent, FormEvent } from "react";
import CreateButton from "../atoms/Buttons/CreateButton";
import InputField from "../atoms/InputField";
import { Slider } from "@mui/material";

interface Props {
  value: string;
  sliderValue: number;
  handleInputChange: (e: ChangeEvent) => void;
  handleCreateTask: (e: FormEvent) => void;
  handleSliderChange: (e: Event, newValue: number | number[]) => void;
}

const CreateTaskForm = ({
  value,
  sliderValue,
  handleInputChange,
  handleCreateTask,
  handleSliderChange,
}: Props) => {
  return (
    <form className="flex">
      <InputField
        name="create-task-field"
        placeholder="Create a task..."
        value={value}
        onChange={handleInputChange}
      />
      <Slider
        value={sliderValue}
        onChange={(e: Event, newValue: number | number[]) => {
          handleSliderChange(e, newValue as number);
        }}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        shiftStep={1}
        marks
        style={{ width: "15em" }}
      />
      <CreateButton
        name="Create Task"
        disabled={value.length == 0}
        onClick={handleCreateTask}
      />
    </form>
  );
};

export default CreateTaskForm;
