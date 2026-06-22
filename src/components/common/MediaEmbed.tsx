import { useState } from 'react'
import type { YouTubeRef } from '../../content'
import { Icon } from './Icon'

/**
 * Privacy-friendly YouTube embed with a click-to-load facade — no third-party
 * scripts load until the user opts in. Unapproved videos are labeled as
 * pending physician review. Videos are never the only instruction; the diagram
 * and text always stand alone.
 */
export function MediaEmbed({ video }: { video: YouTubeRef }) {
  const [loaded, setLoaded] = useState(false)

  const thumb = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
  const src = `https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0${
    video.startSeconds ? `&start=${video.startSeconds}` : ''
  }`
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`

  return (
    <div className="media-embed no-print">
      {!loaded ? (
        <button
          type="button"
          className="media-facade"
          style={{ backgroundImage: `url(${thumb})` }}
          onClick={() => setLoaded(true)}
          aria-label={`Play video: ${video.title}`}
        >
          <span className="media-play">
            <Icon name="play" size={26} />
          </span>
        </button>
      ) : (
        <div className="media-frame">
          <iframe
            src={src}
            title={video.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="media-meta">
        <span className="media-title">{video.title}</span>
        <span className="media-channel">
          {video.channel}
          {!video.approved && <em className="media-pending">Pending review</em>}
        </span>
        <a className="media-source" href={watchUrl} target="_blank" rel="noreferrer">
          Watch on YouTube
          <Icon name="external" size={14} />
        </a>
      </div>
    </div>
  )
}
