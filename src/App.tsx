import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import GalleryScreen from './components/GalleryScreen'
import { buildProfile, findPersonality, findSecondPersonality } from './utils/scoring'
import { PersonalityType, Profile } from './types'
import './App.css'

type Screen = 'welcome' | 'questions' | 'calculating' | 'result' | 'gallery'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<PersonalityType | null>(null)
  const [second, setSecond] = useState<PersonalityType | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)

  function handleStart() {
    setAnswers([])
    setScreen('questions')
  }

  function handleGallery() { setScreen('gallery') }
  function handleBackFromGallery() { setScreen('welcome') }

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
      const r2 = findSecondPersonality(p)
      setProfile(p)
      setResult(r)
      setSecond(r2)
      setScreen('result')
    }, 1800)
  }

  function handleRestart() {
    setScreen('welcome')
    setResult(null)
    setSecond(null)
    setProfile(null)
    setAnswers([])
  }

  return (
    <div className="app">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} onGallery={handleGallery} />}
      {screen === 'gallery' && <GalleryScreen onBack={handleBackFromGallery} />}
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
            <p className="calc-sub">匹配 28 种人格类型中</p>
          </div>
        </div>
      )}
      {screen === 'result' && result && profile && (
        <ResultScreen result={result} second={second} profile={profile} onRestart={handleRestart} />
      )}
    </div>
  )
}
