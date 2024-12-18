import "./Jotai.css";
import { atom, useAtom, useAtomValue } from "jotai";
import { atomEffect } from "jotai-effect";
import { atomWithStorage, useAtomCallback } from "jotai/utils";

const countAtom = atom(0);
const count2Atom = atomWithStorage("count2", 0);

// computed atom
// sync atom - async atom possible, will trigger a Suspense
const totalCountAtom = atom((get) => {
  return get(countAtom) + get(count2Atom);
});

// effect executed on mount and when countAtom or count2Atom change
// could also set another atom (or execute a atomWithQuery mutation)
const alertEffect = atomEffect((get) => {
  const count1 = get(countAtom);
  const count2 = get(count2Atom);

  if (count1 + count2 === 10) {
    alert("Attention, total 10!");
  }
});

export function Jotai2() {
  const [count, dispatchCount] = useAtom(countAtom);
  const [count2, dispatchCount2] = useAtom(count2Atom);
  const total = useAtomValue(totalCountAtom);
  useAtom(alertEffect);

  // useAtomCallback could also be used inside useCallback
  const reset = useAtomCallback((_, set) => {
    set(countAtom, 0);
    set(count2Atom, 0);
  });

  return (
    <div className="card">
      <button onClick={() => dispatchCount((count) => count + 1)}>
        count is {count}
      </button>

      <button onClick={() => dispatchCount2((count) => count + 1)}>
        count2 (persisted) is {count2}
      </button>

      <div>total count: {total}</div>

      <button onClick={() => reset()}>
        reset atoms
      </button>
    </div>
  );
}
