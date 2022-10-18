
export default function debounce(fn: any, delay = 1000) {
  let timeout: NodeJS.Timeout | null = null
  return function () {
    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, delay)
  }
}
