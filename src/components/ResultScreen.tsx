import { PersonalityType, Profile } from '../types'
import { MODELS } from '../utils/scoring'
import { Avatar } from '../data/avatars'

interface Props {
  result: PersonalityType
  second: PersonalityType | null
  profile: Profile
  onRestart: () => void
}

const TIER_LABEL: Record<string, string> = { L: '低', M: '中', H: '高' }
const TIER_CLASS: Record<string, string>  = { L: 'tier-l', M: 'tier-m', H: 'tier-h' }
const modelColors = ['#3fb950','#58a6ff','#f78166','#d2a8ff','#ffa657','#79c0ff']

// Short tag names for each of the 18 dimensions
const DIM_TAGS = [
  '代码洁癖','抽象设计','防御编程','系统思维','独立解决','工具运用',
  '测试驱动','重构冲动','文档热情','审查严格','技术布道','会议友好',
  '工作投入','摸鱼艺术','追新欲望','AI 依赖','AI 信任','AI 焦虑',
]

export default function ResultScreen({ result, second, profile, onRestart }: Props) {
  const isHidden = result.code === 'RMRF' || result.code === 'NULL'

  // Collect H dims as strengths, L dims as "doesn't care about"
  const strengths = profile
    .map((tier, i) => ({ tier, tag: DIM_TAGS[i] }))
    .filter(d => d.tier === 'H')

  const lowDims = profile
    .map((tier, i) => ({ tier, tag: DIM_TAGS[i] }))
    .filter(d => d.tier === 'L')
    .slice(0, 4)

  return (
    <div className="screen result-screen">
      <div className="result-content">
        {isHidden && (
          <div className="hidden-badge">隐藏人格解锁</div>
        )}

        {/* Avatar */}
        <div className="result-avatar">
          <Avatar code={result.code} size={120} />
        </div>

        {/* Code + Name */}
        <div className="result-code-wrap">
          <div className="result-code">{result.code}</div>
          <div className="result-name">{result.name}</div>
        </div>

        {/* Description */}
        <div className="result-desc">
          <p>{result.description}</p>
        </div>

        {/* Strength tags */}
        {strengths.length > 0 && (
          <div className="analysis-block">
            <div className="analysis-label">你的标签</div>
            <div className="tag-row">
              {strengths.map(d => (
                <span key={d.tag} className="tag-high">{d.tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Low dims */}
        {lowDims.length > 0 && (
          <div className="analysis-block">
            <div className="analysis-label">你不太在乎</div>
            <div className="tag-row">
              {lowDims.map(d => (
                <span key={d.tag} className="tag-low">{d.tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Growth advice */}
        <div className="growth-block">
          <div className="growth-icon">💡</div>
          <p className="growth-text">{result.growth}</p>
        </div>

        {/* Second closest type */}
        {second && (
          <div className="second-block">
            <div className="analysis-label">你也有点像</div>
            <div className="second-inner">
              <span className="second-code">{second.code}</span>
              <span className="second-name">{second.name}</span>
              <span className="second-desc">{second.description.slice(0, 40)}...</span>
            </div>
          </div>
        )}

        {/* Dimension grid */}
        <div className="profile-grid">
          <h3 className="profile-title">维度图谱</h3>
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
