import { useMemo, useEffect, useState } from "react";

export const useOnScreen = (ref: React.MutableRefObject<any>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)), [ref]);

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
};
