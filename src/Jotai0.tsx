import "./Jotai.css";
import { atom, useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";

const countAtom = atom(0);

export function Jotai0() {
  const [count, dispatchCount] = useAtom(countAtom);

  // useAtomCallback could also be used inside useCallback
  const reset = useAtomCallback((_, set) => {
    set(countAtom, 0);
  });

  return (
    <div className="card">
      <button onClick={() => dispatchCount((count) => count + 1)}>
        count is {count}
      </button>

      <button onClick={() => reset()}>
        reset atoms
      </button>
    </div>
  );
}
