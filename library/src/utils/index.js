/**
 * @param {{name: string, type: string, description: string}[]} data
 */
export const createStorybookArgTypes = (data) =>
  data.reduce(
    (acc, { name, type, description }) => ({
      ...acc,
      [name]: { table: { type: { summary: type } }, type, description }
    }),
    {}
  );
