interface Props {
  onStart: () => void
  onGallery: () => void
}

export default function WelcomeScreen({ onStart, onGallery }: Props) {
  return (
    <div className="screen welcome-screen">
      <div className="welcome-content">
        <div className="logo-area">
          <div className="logo-badge">MN</div>
          <h1 className="logo-title">MNTI</h1>
          <p className="logo-sub">码农型人格测试</p>
        </div>

        <div className="welcome-desc">
          <p>36 道题 · 18 个维度 · 27 种码农人格</p>
          <p className="welcome-tagline">测出你是哪种码农</p>
        </div>

        <div className="models-preview">
          {['码字玄学', '排查禅', '工程道', '协作经', '打工魂', '硅基共存'].map(m => (
            <span key={m} className="model-tag">{m}</span>
          ))}
        </div>

        <button className="btn-start" onClick={onStart}>
          <span className="btn-prefix">$</span> ./start-test.sh
        </button>

        <button className="btn-gallery" onClick={onGallery}>
          查看所有结局 →
        </button>

        <p className="welcome-note">大约需要 5 分钟</p>
      </div>
    </div>
  )
}
