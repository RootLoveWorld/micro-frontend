// Utility functions for the Svelte application

export function formatMessage(message: string): string {
  return message.toUpperCase();
}

export function getCurrentTime(): string {
  return new Date().toLocaleTimeString();
}

export function incrementCounter(count: number): number {
  return count + 1;
}

export function decrementCounter(count: number): number {
  return count - 1;
}