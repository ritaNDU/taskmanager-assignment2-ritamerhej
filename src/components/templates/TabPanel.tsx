import { ReactNode } from "react";
import "./TabPanel.css";

interface Props {
  children: ReactNode;
  value: number;
  index: number;
  isLoading: boolean;
}

const TabPanel = ({ children, value, index, isLoading }: Props) => {
  const className = isLoading ? "h-full flex justify-center" : "";
  return (
    <div className={className}>
      {isLoading ? (
        <div hidden={index !== value} className="spinner"></div>
      ) : (
        <div hidden={index !== value}>{children}</div>
      )}
    </div>
  );
};

export default TabPanel;
