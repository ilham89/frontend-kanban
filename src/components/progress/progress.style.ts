import { CSSProperties } from "react";

import { IStyles } from "./progress.type";

export const containerStyles = {
  height: 16,
  width: "100%",
  backgroundColor: "#EDEDED",
  borderRadius: 50,
} as CSSProperties;

export const fillerStyles = ({ completed }: IStyles) =>
  ({
    height: "100%",
    width: `${completed}%`,
    backgroundColor: completed === 100 ? "#43936C" : "#01959F",
    borderRadius: `${completed === 100 ? "inherit" : "50px 0px 0px 50px"}`,
    textAlign: "right",
  } as CSSProperties);
