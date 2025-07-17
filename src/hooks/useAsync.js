import { useCallback, useState } from 'react';

export default function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const wrappedFunction = useCallback(
    async (...args) => {
      setError(null);
      setPending(true);
      try {
        return await asyncFunction(args[0]);
      } catch (error) {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );
  return [pending, error, wrappedFunction];
}
