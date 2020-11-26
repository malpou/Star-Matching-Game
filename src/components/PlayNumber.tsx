import { colors } from "../colors";

type PlayNumberProps = {
  number: number;
  status: string;
  onClick: (number: number, status: string) => void;
};

export function PlayNumber({ number, status, onClick }: PlayNumberProps) {
  return (
    <button
      className="number"
      style={{ "backgroundColor": colors[status]}}
      onClick={() => onClick(number, status)}
    >
      {number}
    </button>
  );
}
