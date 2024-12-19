import "./Jotai.css";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage, selectAtom, useAtomCallback } from "jotai/utils";

// not only simple values, but also objects are supported

// with persistence in the localStorage (custom JSON-structured storages are possible, e.g. cookie-storage)
const countsAtom = atomWithStorage("count", { a: 0, b: 0 });

// selectors
const selectA = selectAtom(countsAtom, (object) => object.a);
const selectB = selectAtom(countsAtom, (object) => object.b);

// more: actions and reducers are also possible if you want to make it more complex

// computed atom
// sync atom - async atom possible, will trigger a Suspense
const totalCountAtom = atom((get) => {
  const counts = get(countsAtom);
  return counts.a + counts.b;
});

export function Jotai1() {
  const dispatchCounts = useSetAtom(countsAtom);
  const countA = useAtom(selectA);
  const countB = useAtom(selectB);
  const total = useAtomValue(totalCountAtom);

  // useAtomCallback could also be used inside useCallback
  const reset = useAtomCallback((_, set) => {
    set(countsAtom, { a: 0, b: 0 });
  });

  return (
    <div className="card">
      <button onClick={() => dispatchCounts((counts) => ({ ...counts, a: counts.a + 1 }))}>
        count A is {countA}
      </button>

      <button onClick={() => dispatchCounts((counts) => ({ ...counts,  b: counts.b + 1 }))}>
        count B is {countB}
      </button>

      <div>total count: {total}</div>

      <button onClick={() => reset()}>
        reset atoms
      </button>
    </div>
  );
}
