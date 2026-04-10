import { useState, useEffect } from 'react'
import { questions } from '../data/questions'

interface Props {
  onAnswer: (questionIndex: number, optionIndex: number) => void
  onComplete: () => void
}

export default function QuestionScreen({ onAnswer, onComplete }: Props) {
  const [current, setCurrent] = useState(0)
  const [localAnswers, setLocalAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null)
  )
  // shuffledOrders[i] = display order for question i, e.g. [2,0,3,1]
  const [shuffledOrders] = useState<number[][]>(() =>
    questions.map(() => {
      const order = [0, 1, 2, 3]
      for (let i = 3; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]]
      }
      return order
    })
  )
  const [isLocked, setIsLocked] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'in' | 'out'>('in')

  const q = questions[current]
  const progress = (current / questions.length) * 100
  const currentAnswer = localAnswers[current]

  useEffect(() => {
    setDirection('in')
    setAnimating(true)
    const t = setTimeout(() => setAnimating(false), 300)
    return () => clearTimeout(t)
  }, [current])

  function handleSelect(idx: number) {
    if (isLocked) return
    setIsLocked(true)
    setLocalAnswers(prev => {
      const next = [...prev]
      next[current] = idx
      return next
    })
    onAnswer(current, idx)
    setTimeout(() => {
      setDirection('out')
      setAnimating(true)
      setTimeout(() => {
        if (current + 1 >= questions.length) {
          onComplete()
        } else {
          setCurrent(c => c + 1)
          setIsLocked(false)
        }
      }, 250)
    }, 350)
  }

  function handleBack() {
    if (current === 0 || isLocked) return
    setDirection('out')
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => c - 1)
    }, 250)
  }

  const modelColors: Record<string, string> = {
    '码字玄学': '#3fb950',
    '排查禅':   '#58a6ff',
    '工程道':   '#f78166',
    '协作经':   '#d2a8ff',
    '打工魂':   '#ffa657',
    '硅基共存': '#79c0ff',
  }
  const color = modelColors[q.model] || '#3fb950'

  return (
    <div className="screen question-screen">
      {/* Progress bar */}
      <div className="progress-bar-wrap">
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-label">{current + 1} / {questions.length}</span>
      </div>

      {/* Question card */}
      <div className={`question-card ${animating ? (direction === 'in' ? 'fade-in' : 'fade-out') : ''}`}>
        <div className="question-meta">
          <button
            className="btn-prev"
            onClick={handleBack}
            disabled={current === 0 || isLocked}
            aria-label="上一题"
          >
            ← 上一题
          </button>
          <span className="model-badge" style={{ color, borderColor: color }}>
            {q.model}
          </span>
          <span className="dim-label">{q.dimension}</span>
        </div>

        <p className="question-text">{q.text}</p>

        <div className="options-list">
          {shuffledOrders[current].map((origIdx, displayPos) => (
            <button
              key={origIdx}
              className={`option-btn ${currentAnswer === origIdx ? 'selected' : ''}`}
              onClick={() => handleSelect(origIdx)}
              disabled={isLocked}
            >
              <span className="option-letter">{String.fromCharCode(65 + displayPos)}</span>
              <span className="option-text">{q.options[origIdx]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
