import { useState } from 'react'
import { personalities } from '../data/personalities'
import { PersonalityType } from '../types'
import { Avatar } from '../data/avatars'

interface Props {
  onBack: () => void
}

export default function GalleryScreen({ onBack }: Props) {
  const [selected, setSelected] = useState<PersonalityType | null>(null)

  const standard = personalities.filter(p => !p.isSpecial)
  const special = personalities.filter(p => p.isSpecial)

  return (
    <div className="screen gallery-screen">
      <div className="gallery-content">
        <div className="gallery-header">
          <button className="btn-back" onClick={onBack}>
            <span className="btn-prefix">$</span> cd ..
          </button>
          <h2 className="gallery-title">28 种码农人格</h2>
        </div>

        <div className="gallery-grid">
          {standard.map(p => (
            <div key={p.code} className="gallery-card" onClick={() => setSelected(p)}>
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
            <div key={p.code} className="gallery-card gallery-card-special" onClick={() => setSelected(p)}>
              <div className="gallery-avatar">
                <Avatar code={p.code} size={72} />
              </div>
              <div className="gallery-code gallery-code-special">{p.code}</div>
              <div className="gallery-name">{p.name}</div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-avatar">
              <Avatar code={selected.code} size={100} />
            </div>
            <div className={`modal-code ${selected.isSpecial ? 'modal-code-special' : ''}`}>
              {selected.code}
            </div>
            <div className="modal-name">{selected.name}</div>
            <p className="modal-desc">{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}
