import { ReactNode } from "react";

interface Prop {
  color?: "primary" | "secondary" | "";
  children: ReactNode;
  onClick: () => void;
}

function Button({ color = "primary", children, onClick }: Prop) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
