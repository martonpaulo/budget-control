export function simulateDelay<T>(result: T, delay = 1000): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(result), delay));
}
