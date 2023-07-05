import React, { useRef } from "react";

import useHover from "@/hooks/useHover";

export interface IHover {
  active: React.ReactNode;
  not: React.ReactNode;
}
const Hover: React.FC<IHover> = ({ active, not }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useHover(ref);

  return <div ref={ref}>{isHovered ? active : not}</div>;
};

export default Hover;
