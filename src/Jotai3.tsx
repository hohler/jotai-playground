import "./Jotai.css";
import { atom, useAtom, useAtomValue } from "jotai";
import { atomFamily, useAtomCallback } from "jotai/utils";

const countAtom = atom(0);

// atom family that computes the square of a number
const squareAtom = atomFamily((n: number) => atom(() => {
  return n * n;
}));


export function Jotai3() {
  const [count, dispatchCount] = useAtom(countAtom);
  const squareCount = useAtomValue(squareAtom(count));

  // useAtomCallback could also be used inside useCallback
  const reset = useAtomCallback((_, set) => {
    set(countAtom, 0);
  });

  return (
    <div className="card">
      <button onClick={() => dispatchCount((count) => count + 1)}>
        count is {count}
      </button>

      <div>square count: {squareCount}</div>

      <button onClick={() => reset()}>
        reset atoms
      </button>
    </div>
  );
}
