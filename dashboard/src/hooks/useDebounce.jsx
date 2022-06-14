import { useState, useCallback } from 'react';

function useDebounce(functionToDebounce, delay = 500) {
  const [timer, setTimer] = useState(null);

  const debouncedFunction = useCallback(
    value => {
      if (timer !== null) {
        clearTimeout(timer);
      }

      let functionCallPromise = setTimeout(() => {
        functionToDebounce(value);
      }, delay);

      setTimer(functionCallPromise);
    },
    [functionToDebounce, timer, delay]
  );

  return debouncedFunction;
}

export default useDebounce;
