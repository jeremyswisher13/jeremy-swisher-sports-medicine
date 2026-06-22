import { createElement } from 'react'
import { getIcon } from '../../content'

/**
 * Renders a lucide icon by string key. Using createElement (rather than
 * assigning the looked-up component to a capitalized variable and rendering it
 * as JSX) keeps the icon lookup out of the "components created during render"
 * lint rule, while still allowing content-driven dynamic icon keys.
 */
export function Icon({
  name,
  size,
  strokeWidth,
  className,
}: {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
}) {
  return createElement(getIcon(name), { size, strokeWidth, className })
}
