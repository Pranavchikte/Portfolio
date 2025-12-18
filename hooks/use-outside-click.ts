// @/hooks/use-outside-click.ts

import { useEffect } from "react"

/**
 * A custom hook to detect clicks outside of a specified element.
 * @param ref - A React ref attached to the element to monitor.
 * @param callback - The function to call when an outside click is detected.
 */
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    // Function to handle the click event
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside)
    
    // Cleanup: remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, callback])
}
