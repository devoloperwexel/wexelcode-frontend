export const getDirtyValues = (
  dirtyFields: Record<string, any>,
  allValues: Record<string, any>
): Record<string, any> => {
  const dirtyValues: Record<string, any> = {};

  Object.keys(dirtyFields).forEach((key) => {
    dirtyValues[key] = allValues[key];
  });

  return dirtyValues;
};
