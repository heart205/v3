/**
 * @author heart
 * @description
 * @Date 2022-05-17
 */
export function useOpenKey(path: string, openKeyArray: string[]): string[] {
  if (path === '/') return openKeyArray
  const startPath = path.split('/')[path.startsWith('/') ? 1 : 0]
  if (openKeyArray.includes(`/${startPath}`)) return openKeyArray
  else {
    openKeyArray.push(`/${startPath}`)
    return openKeyArray
  }
}
