import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import { buildProfile, findPersonality } from './utils/scoring'
import { PersonalityType, Profile } from './types'
import './App.css'

type Screen = 'welcome' | 'questions' | 'calculating' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<PersonalityType | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)

  function handleStart() {
    setAnswers([])
    setScreen('questions')
  }

  function handleAnswer(questionIndex: number, optionIndex: number) {
    setAnswers(prev => {
      const next = [...prev]
      next[questionIndex] = optionIndex
      return next
    })
  }

  function handleComplete() {
    setScreen('calculating')
    setTimeout(() => {
      const finalAnswers = [...answers]
      const p = buildProfile(finalAnswers)
      const r = findPersonality(p)
      setProfile(p)
      setResult(r)
      setScreen('result')
    }, 1800)
  }

  function handleRestart() {
    setScreen('welcome')
    setResult(null)
    setProfile(null)
    setAnswers([])
  }

  return (
    <div className="app">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'questions' && (
        <QuestionScreen
          onAnswer={handleAnswer}
          onComplete={handleComplete}
        />
      )}
      {screen === 'calculating' && (
        <div className="screen calculating-screen">
          <div className="calculating-content">
            <div className="spinner" />
            <p className="calc-text">正在分析你的码农基因...</p>
            <p className="calc-sub">匹配 27 种人格类型中</p>
          </div>
        </div>
      )}
      {screen === 'result' && result && profile && (
        <ResultScreen result={result} profile={profile} onRestart={handleRestart} />
      )}
    </div>
  )
}
