// src/hooks/useMutation.js

export const useMutation = (mutationFn, { onSuccess } = {}) => {
  const [loading, setLoading] = useState(false);

  const mutate = async (variables) => {
    setLoading(true);

    try {
      const result = await mutationFn(variables);
      onSuccess?.(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading };
};