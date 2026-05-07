import type { ReactNode } from "react";

interface buttonProp {
  children: ReactNode;
}

export default function Button({ children }: buttonProp) {
  return (
    <button className="capitalize rounded-button border-2 border-border-color py-4 px-8 text-lg-desk w-max">
      {children}
    </button>
  );
}
