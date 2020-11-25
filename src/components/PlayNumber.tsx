import { colors } from "../colors";

type PlayNumberProps = {
  number: number;
  status: string;
};

export function PlayNumber({ number, status }: PlayNumberProps) {
  return (
    <button
      className="number"
      style={{ "backgroundColor": colors[status]}}
      onClick={() => console.log("Num", number)}
    >
      {number}
    </button>
  );
}
