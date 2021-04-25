export function associationsToArray(
  associationArr: string[],
): { association: string }[] {
  return associationArr.map((join) => ({ association: join }));
}
