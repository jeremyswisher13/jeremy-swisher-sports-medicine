import { illustrations } from '../../illustrations'
import type { DiagramRef } from '../../content'

/** Renders a keyed inline-SVG diagram. The key is compiler-checked to exist. */
export function SvgIllustration({
  diagram,
  className,
}: {
  diagram: DiagramRef
  className?: string
}) {
  const Art = illustrations[diagram.key]
  return (
    <figure className={`svg-illustration ${className ?? ''}`}>
      <Art title={diagram.altText} />
      {diagram.caption && <figcaption>{diagram.caption}</figcaption>}
    </figure>
  )
}
