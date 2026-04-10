import { useState, useEffect } from 'react'
import { questions } from '../data/questions'

interface Props {
  onAnswer: (questionIndex: number, optionIndex: number) => void
  onComplete: () => void
}

export default function QuestionScreen({ onAnswer, onComplete }: Props) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'in' | 'out'>('in')

  const q = questions[current]
  const progress = (current / questions.length) * 100

  useEffect(() => {
    setDirection('in')
    setAnimating(true)
    const t = setTimeout(() => setAnimating(false), 300)
    return () => clearTimeout(t)
  }, [current])

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    setTimeout(() => {
      onAnswer(current, idx)
      setSelected(null)
      setDirection('out')
      setAnimating(true)
      setTimeout(() => {
        if (current + 1 >= questions.length) {
          onComplete()
        } else {
          setCurrent(c => c + 1)
        }
      }, 250)
    }, 350)
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
          <span className="model-badge" style={{ color, borderColor: color }}>
            {q.model}
          </span>
          <span className="dim-label">{q.dimension}</span>
        </div>

        <p className="question-text">{q.text}</p>

        <div className="options-list">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className={`option-btn ${selected === idx ? 'selected' : ''}`}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
            >
              <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="option-text">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
