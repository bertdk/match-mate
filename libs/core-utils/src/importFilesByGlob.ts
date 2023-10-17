/**
 * import command handlers dynamically
 * * IMPORTANT * For this to correctly work the handlers must be consistently named with xxx.handler.ts
 * */
export const importFilesByGlob = <T>(files: {
  (id: string): T;
  keys(): string[];
}) => {
  return files
    .keys()
    .map(files)
    .flatMap((x: any) => Object.values(x) as (new () => T)[]);
};
