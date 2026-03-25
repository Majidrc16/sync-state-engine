// src/core/cache.js

import { store } from "./store";

export const setCache = (key, data) => {
  const current = store.getState().cache;
  store.setState({
    cache: {
      ...current,
      [key]: {
        data,
        timestamp: Date.now(),
      },
    },
  });
};

export const getCache = (key, staleTime = 5000) => {
  const entry = store.getState().cache[key];

  if (!entry) return null;

  const isStale = Date.now() - entry.timestamp > staleTime;

  return isStale ? null : entry.data;
};