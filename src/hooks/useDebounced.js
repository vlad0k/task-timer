import { useCallback } from 'react';

import debounce from '../utils/debounce';

const useDebounced = (callback, delay) => {
  const debouncedCallback = useCallback(debounce(callback, delay), []);

  return debouncedCallback;
};

export default useDebounced;
