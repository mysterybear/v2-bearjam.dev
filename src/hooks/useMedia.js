import { useEffect, useState } from "react";
import { theme } from '../../tailwind.full.config';

const useMedia = (values, defaultValue, queries = [
  `(min-width: ${theme.screens.xl})`,
  `(min-width: ${theme.screens.lg})`,
  `(min-width: ${theme.screens.md})`,
  `(min-width: ${theme.screens.sm})`,
]) => {

  const [value, setValue] = useState(defaultValue)

  useEffect(
    () => {
      const mqls = queries.map(q => window.matchMedia(q))
      const handler = () => {
        const index = mqls.findIndex(mql => mql.matches)
        const next = values[index] ? values[index] : defaultValue
        if (value !== next) setValue(next)
      }
      mqls.forEach(mql => mql.addListener(handler))
      handler()
      return () => mqls.forEach(mql => mql.removeListener(handler));
    },
  );

  return value;
}

export default useMedia
