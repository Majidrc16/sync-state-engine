// src/hooks/useQuery.js

import { useEffect, useState } from "react";
import { getCache, setCache } from "../core/cache";

export const useQuery = (key, fetchFn) => {
  const [data, setData] = useState(getCache(key));
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(null);

useEffect(() => {
  let isMounted = true;

  if (!data) {
    setLoading(true);

    fetchFn()
      .then((res) => {
        if (!isMounted) return;
        setCache(key, res);
        setData(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }

  return () => {
    isMounted = false;
  };
}, [key, fetchFn]); // ✅ include fetchFn

  return { data, loading, error };
};