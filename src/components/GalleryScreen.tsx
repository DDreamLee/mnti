import { personalities } from '../data/personalities'
import { Avatar } from '../data/avatars'

interface Props {
  onBack: () => void
}

export default function GalleryScreen({ onBack }: Props) {
  const standard = personalities.filter(p => !p.isSpecial)
  const special = personalities.filter(p => p.isSpecial)

  return (
    <div className="screen gallery-screen">
      <div className="gallery-content">
        <div className="gallery-header">
          <button className="btn-back" onClick={onBack}>
            <span className="btn-prefix">$</span> cd ..
          </button>
          <h2 className="gallery-title">27 种码农人格</h2>
        </div>

        <div className="gallery-grid">
          {standard.map(p => (
            <div key={p.code} className="gallery-card">
              <div className="gallery-avatar">
                <Avatar code={p.code} size={72} />
              </div>
              <div className="gallery-code">{p.code}</div>
              <div className="gallery-name">{p.name}</div>
            </div>
          ))}
        </div>

        <div className="gallery-special-label">隐藏类型</div>
        <div className="gallery-grid gallery-grid-special">
          {special.map(p => (
            <div key={p.code} className="gallery-card gallery-card-special">
              <div className="gallery-avatar">
                <Avatar code={p.code} size={72} />
              </div>
              <div className="gallery-code gallery-code-special">{p.code}</div>
              <div className="gallery-name">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
