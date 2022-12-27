"use client";

import { useCallback, useEffect, useState } from "react";

const BORN_AT = new Date("2004-04-12T01:00:00+08:00");
const msToYr = (ms: number) => ms * 3.168808781402895 * Math.pow(10, -11);

/**
 * Get the current precise age.
 */
export function CurrentAge() {
  const [age, setYears] = useState(
    (2022 - BORN_AT.getFullYear()).toPrecision(12)
  );
  const ageRenderer = useCallback(() => {
    const preciseAge = msToYr(Number(new Date()) - Number(BORN_AT)).toPrecision(
      12
    );
    setYears(preciseAge);
  }, [setYears]);

  useEffect(() => {
    ageRenderer(); // initial render
    const interval = setInterval(ageRenderer, 1145.14);

    return () => {
      clearInterval(interval);
    };
  }, [ageRenderer]);

  return <>{age}</>;
}
