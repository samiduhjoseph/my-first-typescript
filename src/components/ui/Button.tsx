import type { ReactNode } from "react";

interface buttonProp {
  children: ReactNode;
  bgType?: string;
  textType?: string;
}

export default function Button({ children, bgType, textType }: buttonProp) {
  return (
    <button
      className={`capitalize rounded-button border-2 border-border-color py-4 px-8 text-lg-desk w-max ${bgType} ${textType}`}
    >
      {children}
    </button>
  );
}
