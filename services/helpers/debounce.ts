export default function (func: Function, time: number) {
  let timeout: NodeJS.Timeout | null;
  return (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      func(...args);
    }, time);
  };
}
