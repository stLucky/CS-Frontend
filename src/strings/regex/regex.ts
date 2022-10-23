function check(str: string): void {
  if (str == null) throw new Error('need a string');
}

export function isValidName(str: string): boolean {
  check(str);
  return /^[a-zA-Z_$][\w$]*$/g.test(str);
}

export function split(str: string, separators = '[.,;]|\\s+'): string[] {
  check(str);
  return str.split(new RegExp(`${separators}`));
}

export function format(str: string, params: Record<string, unknown>): string {
  check(str);
  return str.replace(
    /\$\{([a-zA-Z_$][\w$]*)\}/g,
    (match, p1: string) => (params[p1] ? String(params[p1]) : match),
  );
}

export function removeDuplicates(str: string): string {
  check(str);
  return str.replace(/([\s\S]{1,3}?)\1+/gi, '$1');
}

export function calc(str: string): string {
  check(str);
  return str.replace(
    /[\d(-][()+/%\s\d*-]+[\d)]/gi,
    (match) => new Function(`return ${match}`)(),
  );
}
