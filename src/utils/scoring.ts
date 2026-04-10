import { DimScore, Profile } from '../types'
import { personalities } from '../data/personalities'

// A=2, B=3, C=5, D=6
const OPTION_SCORES = [2, 3, 5, 6]

// 18 dimensions, 2 questions each → 36 questions total
// answers[i] is 0-3 (index into OPTION_SCORES)
export function buildProfile(answers: number[]): Profile {
  const profile: Profile = []
  for (let dim = 0; dim < 18; dim++) {
    const q1 = answers[dim * 2]
    const q2 = answers[dim * 2 + 1]
    const sum = OPTION_SCORES[q1] + OPTION_SCORES[q2]
    profile.push(scoreToTier(sum))
  }
  return profile
}

function scoreToTier(sum: number): DimScore {
  if (sum <= 6) return 'L'
  if (sum <= 9) return 'M'
  return 'H'
}

function tierToNum(t: DimScore): number {
  return t === 'L' ? 0 : t === 'M' ? 1 : 2
}

function manhattanDistance(a: Profile, b: Profile): number {
  return a.reduce((sum, val, i) => sum + Math.abs(tierToNum(val) - tierToNum(b[i])), 0)
}

// RMRF hidden type: triggered when the user is maximally chaotic
// no tests (dim 6 = L) + LGTM reviewer (dim 9 = L) + AI blind trust (dim 16 = H) + random debug (dim 3 = L)
function isRMRF(profile: Profile): boolean {
  return profile[6] === 'L' && profile[9] === 'L' && profile[16] === 'H' && profile[3] === 'L'
}

export function findPersonality(profile: Profile) {
  if (isRMRF(profile)) {
    return personalities.find(p => p.code === 'RMRF')!
  }

  const standard = personalities.filter(p => !p.isSpecial)
  let bestMatch = standard[0]
  let bestDistance = Infinity

  for (const p of standard) {
    const d = manhattanDistance(profile, p.profile)
    if (d < bestDistance) {
      bestDistance = d
      bestMatch = p
    }
  }

  // Max possible distance = 18 dims * 2 = 36
  const matchPct = (1 - bestDistance / 36) * 100
  if (matchPct < 60) {
    return personalities.find(p => p.code === 'NULL')!
  }

  return bestMatch
}

export const MODELS = [
  { name: '码字玄学', dimensions: ['洁癖指数', '抽象欲', '防御性'] },
  { name: '排查禅',   dimensions: ['系统性', '求救阈值', '工具段位'] },
  { name: '工程道',   dimensions: ['测试信仰', '重构冲动', '文档热情'] },
  { name: '协作经',   dimensions: ['Review 风格', '表达欲', '会议观'] },
  { name: '打工魂',   dimensions: ['卷度', '摸鱼指数', '追新焦虑'] },
  { name: '硅基共存', dimensions: ['AI 依赖度', 'AI 信任度', 'AI 焦虑感'] },
]
