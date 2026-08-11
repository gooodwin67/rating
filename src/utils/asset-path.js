export function resolveAssetPath(path = '') {
  if (!path || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) {
    return path;
  }

  const relativePath = path.replace(/^\.\//, '').replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${relativePath}`;
}
