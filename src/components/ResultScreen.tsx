import { PersonalityType, Profile } from '../types'
import { MODELS } from '../utils/scoring'

interface Props {
  result: PersonalityType
  profile: Profile
  onRestart: () => void
}

const TIER_LABEL: Record<string, string> = { L: '低', M: '中', H: '高' }
const TIER_CLASS: Record<string, string> = { L: 'tier-l', M: 'tier-m', H: 'tier-h' }

const modelColors = ['#3fb950','#58a6ff','#f78166','#d2a8ff','#ffa657','#79c0ff']

export default function ResultScreen({ result, profile, onRestart }: Props) {
  const isHidden = result.code === 'RMRF' || result.code === 'NULL'

  return (
    <div className="screen result-screen">
      <div className="result-content">
        {isHidden && (
          <div className="hidden-badge">隐藏人格解锁</div>
        )}

        <div className="result-code-wrap">
          <div className="result-code">{result.code}</div>
          <div className="result-name">{result.name}</div>
        </div>

        <div className="result-desc">
          <p>{result.description}</p>
        </div>

        <div className="profile-grid">
          <h3 className="profile-title">你的维度图谱</h3>
          {MODELS.map((model, mi) => (
            <div key={model.name} className="model-section">
              <div className="model-section-title" style={{ color: modelColors[mi] }}>
                {model.name}
              </div>
              <div className="dims-row">
                {model.dimensions.map((dim, di) => {
                  const dimIndex = mi * 3 + di
                  const tier = profile[dimIndex]
                  return (
                    <div key={dim} className="dim-item">
                      <span className="dim-name">{dim}</span>
                      <span className={`dim-tier ${TIER_CLASS[tier]}`}>{TIER_LABEL[tier]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <button className="btn-restart" onClick={onRestart}>
          <span className="btn-prefix">$</span> ./restart.sh
        </button>
      </div>
    </div>
  )
}
