import { utils } from "../utils";

type StarDisplayProps = {
  count: number;
};

export function StarDisplay({ count }: StarDisplayProps) {
  return (
    <>
      {utils.range(1, count).map(starId => (
        <div key={starId} className="star" />
      ))}
    </>
  );
}
