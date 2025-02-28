import { useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const set = (key: string, value: unknown) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      if (Array.isArray(value)) {
        value.forEach((val) => params.append(key, val));
      } else if (typeof value === 'number') {
        params.set(key, value.toString());
      } else {
        params.set(key, value as string);
      }
    } else {
      params.delete(key);
    }

    push(`?${params.toString()}`);
  };

  const getInt = (key: string) => {
    const value = searchParams.get(key);
    return value ? parseInt(value) : undefined;
  };

  const getFloat = (key: string) => {
    const value = searchParams.get(key);
    return value ? parseFloat(value) : undefined;
  };

  return {
    getString: searchParams.get,
    getInt,
    getFloat,
    set,
  };
};
