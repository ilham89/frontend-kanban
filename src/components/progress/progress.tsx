import { containerStyles, fillerStyles } from "./progress.style";
import { IStyles } from "./progress.type";

const Progress = ({ completed }: IStyles) => {
  return (
    <div style={containerStyles}>
      <div style={fillerStyles({ completed })}></div>
    </div>
  );
};

export default Progress;
