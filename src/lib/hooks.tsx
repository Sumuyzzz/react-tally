import { useEffect, useRef } from 'react';

const useUpdate = (callback: () => void, deps: any) => {
  let count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      callback();
    }
  }, [callback, deps]);
};

export { useUpdate };
