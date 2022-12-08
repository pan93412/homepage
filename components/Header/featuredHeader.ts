/**
 * Add some special words to `name`, such as `$ `,
 * `crate::` and `window.` to make it special.
 *
 * @param name The name to be specialized.
 *
 * FIXME: optimize
 */
export function featuredName(name: string) {
  const headers = [
    () => `$ ${name}`,
    () => `# ${name}`,
    () => `crate::${name}`,
    () => `window.${name}`,
    () => `eval(${name})`,
    () => `new ${name}()`,
    () => `import ${name} from '${name.toLowerCase()}'`,
    () => `use ${name.toLowerCase()}::${name}`,
  ];

  return headers[Math.floor(Math.random() * headers.length)]();
}
