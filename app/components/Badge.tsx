import { ReactNode } from "react";

interface Props {
  text: number;
  children: ReactNode;
}

const Badge = ({ text, children }: Props) => {
  return (
    <div className="badge-container">
      {children}
      {text > 0 && <span className="badge">{text}</span>}
    </div>
  );
};

export default Badge;
