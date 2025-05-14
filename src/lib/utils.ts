import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Ensure theme is always dark regardless of any condition in the app
export const ensureDarkTheme = (theme: string) => 'dark';
