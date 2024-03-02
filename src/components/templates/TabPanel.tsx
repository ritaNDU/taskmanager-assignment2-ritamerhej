import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  value: number;
  index: number;
  isLoading: boolean;
}

const TabPanel = ({ children, value, index, isLoading }: Props) => {
  return (
    <div hidden={index !== value}>
      {isLoading ? "Loading" : <div>{children}</div>}
    </div>
  );
};

export default TabPanel;
