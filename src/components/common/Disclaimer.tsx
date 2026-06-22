import { Icon } from './Icon'

export function Disclaimer({ text, compact }: { text: string; compact?: boolean }) {
  return (
    <p className={`disclaimer ${compact ? 'compact' : ''}`}>
      <Icon name="info" size={compact ? 15 : 17} />
      <span>{text}</span>
    </p>
  )
}
