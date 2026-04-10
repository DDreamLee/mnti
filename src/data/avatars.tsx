// Abstract SVG avatars for each personality type

export function Avatar({ code, size = 80 }: { code: string; size?: number }) {
  const map: Record<string, () => JSX.Element> = {
    ARCH:   Arch,
    CRUD:   Crud,
    'PRIN-T': Print,
    FORK:   Fork,
    'CLEA-N': Clean,
    TODO:   Todo,
    UNIT:   Unit,
    YOLO:   Yolo,
    TERM:   Term,
    BLOG:   Blog,
    IDLE:   Idle,
    JACK:   Jack,
    FOMO:   Fomo,
    'RELI-C': Relic,
    LGTM:   Lgtm,
    FAKE:   Fake,
    VETO:   Veto,
    DOCS:   Docs,
    DEBT:   Debt,
    'GRIN-D': Grind,
    FLAT:   Flat,
    FOSS:   Foss,
    'PROM-T': Prompt,
    'CRAF-T': Craft,
    DOOM:   Doom,
    SELF:   Self,
    NULL:   Null,
    RMRF:   Rmrf,
  }
  const Comp = map[code] ?? Null
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Comp />
    </svg>
  )
}

// ── ARCH 架构宇宙 ─────────────────────────────────────────────
function Arch() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#1f6feb" opacity="0.1"/>
    {[20,50,80].map(x => <line key={`v${x}`} x1={x} y1="10" x2={x} y2="90" stroke="#1f6feb" strokeWidth="0.8" opacity="0.4"/>)}
    {[20,50,80].map(y => <line key={`h${y}`} x1="10" y1={y} x2="90" y2={y} stroke="#1f6feb" strokeWidth="0.8" opacity="0.4"/>)}
    <path d="M50 18 L82 50 L50 82 L18 50 Z" stroke="#58a6ff" strokeWidth="2.5" fill="#1f6feb" fillOpacity="0.2"/>
    <circle cx="50" cy="50" r="9" fill="#58a6ff"/>
    {[[20,20],[80,20],[80,80],[20,80]].map(([cx,cy]) =>
      <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3.5" fill="#1f6feb"/>
    )}
  </>
}

// ── CRUD CRUD战士 ─────────────────────────────────────────────
function Crud() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#484f58" opacity="0.1"/>
    {[[15,15],[55,15],[15,55],[55,55]].map(([x,y]) =>
      <rect key={`${x}${y}`} x={x} y={y} width="30" height="30" rx="3" fill="#21262d" stroke="#484f58" strokeWidth="1.5"/>
    )}
    <line x1="24" y1="27" x2="36" y2="27" stroke="#8b949e" strokeWidth="2"/>
    <line x1="24" y1="33" x2="40" y2="33" stroke="#8b949e" strokeWidth="2"/>
    <line x1="64" y1="27" x2="76" y2="27" stroke="#8b949e" strokeWidth="2"/>
    <line x1="64" y1="33" x2="80" y2="33" stroke="#8b949e" strokeWidth="2"/>
    <line x1="24" y1="67" x2="36" y2="67" stroke="#8b949e" strokeWidth="2"/>
    <line x1="24" y1="73" x2="40" y2="73" stroke="#8b949e" strokeWidth="2"/>
    <line x1="64" y1="67" x2="76" y2="67" stroke="#8b949e" strokeWidth="2"/>
    <line x1="64" y1="73" x2="80" y2="73" stroke="#8b949e" strokeWidth="2"/>
  </>
}

// ── PRIN-T console.log侦探 ────────────────────────────────────
function Print() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#ffa657" opacity="0.1"/>
    <circle cx="40" cy="42" r="22" stroke="#ffa657" strokeWidth="4" fill="#161b22"/>
    <line x1="56" y1="58" x2="78" y2="80" stroke="#ffa657" strokeWidth="6" strokeLinecap="round"/>
    <line x1="31" y1="36" x2="49" y2="36" stroke="#ffa657" strokeWidth="2" opacity="0.7"/>
    <line x1="31" y1="43" x2="49" y2="43" stroke="#ffa657" strokeWidth="2" opacity="0.7"/>
    <line x1="31" y1="50" x2="43" y2="50" stroke="#ffa657" strokeWidth="2" opacity="0.7"/>
  </>
}

// ── FORK 轮子哥 ───────────────────────────────────────────────
function Fork() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#f78166" opacity="0.1"/>
    <circle cx="50" cy="50" r="32" stroke="#f78166" strokeWidth="3" fill="none"/>
    <circle cx="50" cy="50" r="8" fill="#f78166"/>
    {[0,45,90,135,180,225,270,315].map(deg => {
      const rad = deg * Math.PI / 180
      const x1 = 50 + 14 * Math.cos(rad), y1 = 50 + 14 * Math.sin(rad)
      const x2 = 50 + 29 * Math.cos(rad), y2 = 50 + 29 * Math.sin(rad)
      return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f78166" strokeWidth="2.5"/>
    })}
  </>
}

// ── CLEA-N 重构狂魔 ───────────────────────────────────────────
function Clean() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#3fb950" opacity="0.1"/>
    <line x1="20" y1="80" x2="70" y2="30" stroke="#3fb950" strokeWidth="4" strokeLinecap="round"/>
    <path d="M70 30 L80 20 L75 35 Z" fill="#3fb950"/>
    <rect x="10" y="75" width="15" height="8" rx="2" fill="#238636" opacity="0.8"/>
    {[[78,18],[85,32],[72,12]].map(([x,y]) =>
      <circle key={`${x}${y}`} cx={x} cy={y} r="3" fill="#3fb950"/>
    )}
    {[[60,70],[70,60],[80,50]].map(([x,y], i) =>
      <line key={i} x1={x-6} y1={y} x2={x+6} y2={y} stroke="#3fb950" strokeWidth="1.5" opacity="0.5"/>
    )}
  </>
}

// ── TODO //TODO收藏家 ─────────────────────────────────────────
function Todo() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#ffa657" opacity="0.1"/>
    {[{x:25,y:55,c:'#ffa657'},{x:32,y:45,c:'#e3b341'},{x:40,y:35,c:'#ffa657'},{x:48,y:25,c:'#e3b341'}].map(({x,y,c},i) =>
      <rect key={i} x={x} y={y} width="38" height="30" rx="2" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.5"/>
    )}
    <line x1="46" y1="33" x2="57" y2="33" stroke="#ffa657" strokeWidth="2" opacity="0.7"/>
    <line x1="46" y1="39" x2="62" y2="39" stroke="#ffa657" strokeWidth="2" opacity="0.7"/>
  </>
}

// ── UNIT TDD圣徒 ──────────────────────────────────────────────
function Unit() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#3fb950" opacity="0.1"/>
    {[30,50,70].map(x => <line key={`v${x}`} x1={x} y1="15" x2={x} y2="85" stroke="#21262d" strokeWidth="1"/>)}
    {[30,50,70].map(y => <line key={`h${y}`} x1="15" y1={y} x2="85" y2={y} stroke="#21262d" strokeWidth="1"/>)}
    <path d="M22 52 L40 70 L78 30" stroke="#3fb950" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </>
}

// ── YOLO git push -f型 ────────────────────────────────────────
function Yolo() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#ffa657" opacity="0.1"/>
    <path d="M50 10 L62 42 L85 42 L65 60 L73 88 L50 70 L27 88 L35 60 L15 42 L38 42 Z" fill="#ffa657" fillOpacity="0.15" stroke="#ffa657" strokeWidth="2"/>
    <path d="M50 15 L55 35 L65 35" stroke="#ffa657" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="50" cy="50" r="6" fill="#ffa657"/>
  </>
}

// ── TERM 终端美学家 ───────────────────────────────────────────
function Term() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#3fb950" opacity="0.1"/>
    <rect x="12" y="18" width="76" height="64" rx="5" fill="#0d1117" stroke="#3fb950" strokeWidth="2"/>
    <rect x="12" y="18" width="76" height="14" rx="5" fill="#3fb950" fillOpacity="0.3"/>
    <circle cx="24" cy="25" r="3" fill="#f78166"/>
    <circle cx="34" cy="25" r="3" fill="#ffa657"/>
    <circle cx="44" cy="25" r="3" fill="#3fb950"/>
    <text x="18" y="48" fill="#3fb950" fontSize="10" fontFamily="monospace" opacity="0.9">$ ./run.sh</text>
    <rect x="18" y="55" width="7" height="10" rx="1" fill="#3fb950" opacity="0.9"/>
  </>
}

// ── BLOG 技术布道者 ───────────────────────────────────────────
function Blog() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#d2a8ff" opacity="0.1"/>
    <path d="M25 60 L45 40 L45 70 Z" fill="#d2a8ff" fillOpacity="0.8"/>
    {[12,20,28].map((r, i) =>
      <path key={i} d={`M48 50 Q${48+r} ${50-r*1.2} ${48+r*2} 50`} stroke="#d2a8ff" strokeWidth={3-i*0.7} fill="none" opacity={1-i*0.25}/>
    )}
    {[12,20,28].map((r, i) =>
      <path key={i} d={`M48 50 Q${48+r} ${50+r*1.2} ${48+r*2} 50`} stroke="#d2a8ff" strokeWidth={3-i*0.7} fill="none" opacity={1-i*0.25}/>
    )}
  </>
}

// ── IDLE 摸鱼艺术家 ───────────────────────────────────────────
function Idle() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#58a6ff" opacity="0.1"/>
    <path d="M20 50 Q35 30 50 50 Q65 70 80 50 Q65 30 50 50 Q35 70 20 50 Z" fill="#58a6ff" fillOpacity="0.7"/>
    <circle cx="72" cy="46" r="4" fill="#58a6ff"/>
    <circle cx="71" cy="45" r="1.5" fill="#0d1117"/>
    {[0,1,2].map(i =>
      <path key={i} d={`M${82+i*5} ${44+i*3} Q${85+i*5} ${40+i*3} ${88+i*5} ${44+i*3}`} stroke="#58a6ff" strokeWidth="1.5" fill="none" opacity={0.9-i*0.3}/>
    )}
  </>
}

// ── JACK 全栈缝合怪 ───────────────────────────────────────────
function Jack() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#ffa657" opacity="0.05"/>
    <circle cx="35" cy="40" r="22" fill="#58a6ff" fillOpacity="0.4" stroke="#58a6ff" strokeWidth="1.5"/>
    <circle cx="65" cy="40" r="22" fill="#3fb950" fillOpacity="0.4" stroke="#3fb950" strokeWidth="1.5"/>
    <circle cx="50" cy="62" r="22" fill="#ffa657" fillOpacity="0.4" stroke="#ffa657" strokeWidth="1.5"/>
    <circle cx="50" cy="47" r="8" fill="#e6edf3" fillOpacity="0.15"/>
  </>
}

// ── FOMO 框架追星族 ───────────────────────────────────────────
function Fomo() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#d2a8ff" opacity="0.1"/>
    {[[50,15],[26,30],[74,30],[17,55],[83,55],[30,75],[70,75]].map(([cx,cy],i) => {
      const s = i === 0 ? 10 : 5
      return <path key={i} d={`M${cx} ${cy-s} L${cx+s*0.4} ${cy-s*0.3} L${cx+s} ${cy-s*0.3} L${cx+s*0.6} ${cy+s*0.2} L${cx+s*0.8} ${cy+s} L${cx} ${cy+s*0.6} L${cx-s*0.8} ${cy+s} L${cx-s*0.6} ${cy+s*0.2} L${cx-s} ${cy-s*0.3} L${cx-s*0.4} ${cy-s*0.3} Z`} fill="#d2a8ff" fillOpacity={i===0?0.9:0.5}/>
    })}
  </>
}

// ── RELI-C 遗留代码守护神 ─────────────────────────────────────
function Relic() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#8b949e" opacity="0.1"/>
    <rect x="22" y="14" width="56" height="72" rx="3" fill="#161b22" stroke="#484f58" strokeWidth="2"/>
    <path d="M22 28 L78 28" stroke="#484f58" strokeWidth="1.5"/>
    <line x1="32" y1="38" x2="68" y2="38" stroke="#484f58" strokeWidth="1.5"/>
    <line x1="32" y1="46" x2="68" y2="46" stroke="#484f58" strokeWidth="1.5"/>
    <line x1="32" y1="54" x2="55" y2="54" stroke="#484f58" strokeWidth="1.5"/>
    <line x1="32" y1="62" x2="68" y2="62" stroke="#484f58" strokeWidth="1.5"/>
    <path d="M45 28 L52 70" stroke="#8b949e" strokeWidth="1" opacity="0.5"/>
    <path d="M60 38 L65 75" stroke="#8b949e" strokeWidth="1" opacity="0.4"/>
    <text x="26" y="24" fill="#8b949e" fontSize="8" fontFamily="monospace">2008.js</text>
  </>
}

// ── LGTM LGTM橡皮图章 ────────────────────────────────────────
function Lgtm() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#3fb950" opacity="0.1"/>
    <circle cx="50" cy="50" r="35" stroke="#3fb950" strokeWidth="4" fill="none"/>
    <circle cx="50" cy="50" r="28" stroke="#3fb950" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 3"/>
    <text x="50" y="46" fill="#3fb950" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LG</text>
    <text x="50" y="62" fill="#3fb950" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TM</text>
  </>
}

// ── FAKE 冒充者 ───────────────────────────────────────────────
function Fake() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#8b949e" opacity="0.1"/>
    <clipPath id="leftHalf"><rect x="0" y="0" width="50" height="100"/></clipPath>
    <clipPath id="rightHalf"><rect x="50" y="0" width="50" height="100"/></clipPath>
    <circle cx="50" cy="42" r="22" fill="#1c2128" stroke="#58a6ff" strokeWidth="2" clipPath="url(#leftHalf)"/>
    <circle cx="50" cy="42" r="22" fill="#1c2128" stroke="#8b949e" strokeWidth="2" clipPath="url(#rightHalf)"/>
    <path d="M36 52 Q50 60 64 52" stroke="#58a6ff" strokeWidth="2" fill="none" clipPath="url(#leftHalf)"/>
    <path d="M36 52 Q50 46 64 52" stroke="#8b949e" strokeWidth="2" fill="none" clipPath="url(#rightHalf)"/>
    <circle cx="43" cy="38" r="3" fill="#58a6ff" clipPath="url(#leftHalf)"/>
    <circle cx="57" cy="38" r="3" fill="#8b949e" clipPath="url(#rightHalf)"/>
    <line x1="50" y1="18" x2="50" y2="80" stroke="#484f58" strokeWidth="1" strokeDasharray="3 3"/>
  </>
}

// ── VETO 需求粉碎机 ───────────────────────────────────────────
function Veto() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#f78166" opacity="0.1"/>
    <circle cx="50" cy="50" r="33" stroke="#f78166" strokeWidth="4" fill="none"/>
    <line x1="26" y1="26" x2="74" y2="74" stroke="#f78166" strokeWidth="6" strokeLinecap="round"/>
  </>
}

// ── DOCS 文档狂魔 ─────────────────────────────────────────────
function Docs() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#58a6ff" opacity="0.1"/>
    {[{x:18,y:20,c:'#1f6feb'},{x:26,y:30,c:'#58a6ff'},{x:34,y:40,c:'#79c0ff'}].map(({x,y,c},i) =>
      <rect key={i} x={x} y={y} width="48" height="48" rx="3" fill="#161b22" stroke={c} strokeWidth="1.5"/>
    )}
    <line x1="42" y1="50" x2="72" y2="50" stroke="#79c0ff" strokeWidth="2"/>
    <line x1="42" y1="57" x2="72" y2="57" stroke="#79c0ff" strokeWidth="2"/>
    <line x1="42" y1="64" x2="60" y2="64" stroke="#79c0ff" strokeWidth="2"/>
    <line x1="42" y1="71" x2="72" y2="71" stroke="#79c0ff" strokeWidth="2" opacity="0.5"/>
  </>
}

// ── DEBT 永动技术债机 ─────────────────────────────────────────
function Debt() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#ffa657" opacity="0.1"/>
    {[{y:72,w:60},{y:60,w:48},{y:50,w:36},{y:41,w:24},{y:34,w:14}].map(({y,w},i) => {
      const x = (100-w)/2
      return <rect key={i} x={x} y={y} width={w} height={11} rx="2" fill="#ffa657" fillOpacity={0.3+i*0.1} stroke="#ffa657" strokeWidth="1.5"/>
    })}
    <path d="M42 72 L44 60" stroke="#f78166" strokeWidth="1" opacity="0.6"/>
    <path d="M58 72 L57 60" stroke="#f78166" strokeWidth="1" opacity="0.6"/>
  </>
}

// ── GRIN-D 卷王本王 ───────────────────────────────────────────
function Grind() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#f78166" opacity="0.1"/>
    <path d="M50 15 L58 38 L50 35 L58 55 L50 52 L58 72" stroke="#f78166" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M42 55 L50 35 L58 55 Z" fill="#ffa657" fillOpacity="0.6"/>
    <path d="M44 72 L50 52 L56 72 Z" fill="#f78166" fillOpacity="0.5"/>
    <path d="M40 78 Q50 72 60 78 Q55 85 50 88 Q45 85 40 78 Z" fill="#f78166" fillOpacity="0.4"/>
  </>
}

// ── FLAT 躺平工程师 ───────────────────────────────────────────
function Flat() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#8b949e" opacity="0.1"/>
    <line x1="10" y1="55" x2="90" y2="55" stroke="#8b949e" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="35" cy="48" r="10" fill="#21262d" stroke="#8b949e" strokeWidth="2"/>
    <path d="M45 51 L80 51 L80 55" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="68" y1="55" x2="68" y2="70" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="75" y1="55" x2="75" y2="70" stroke="#8b949e" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 38 Q32 32 40 38" stroke="#8b949e" strokeWidth="1.5" fill="none" opacity="0.5"/>
  </>
}

// ── FOSS 开源英雄 ─────────────────────────────────────────────
function Foss() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#3fb950" opacity="0.1"/>
    <circle cx="50" cy="22" r="8" fill="#3fb950"/>
    <circle cx="22" cy="68" r="8" fill="#3fb950"/>
    <circle cx="78" cy="68" r="8" fill="#3fb950"/>
    <line x1="50" y1="30" x2="50" y2="52" stroke="#3fb950" strokeWidth="2.5"/>
    <line x1="50" y1="52" x2="24" y2="62" stroke="#3fb950" strokeWidth="2.5"/>
    <line x1="50" y1="52" x2="76" y2="62" stroke="#3fb950" strokeWidth="2.5"/>
    <circle cx="50" cy="52" r="5" fill="#238636"/>
    <path d="M50 30 Q62 40 78 62" stroke="#3fb950" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.4"/>
  </>
}

// ── PROM-T AI全托管 ───────────────────────────────────────────
function Prompt() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#79c0ff" opacity="0.1"/>
    <rect x="22" y="22" width="56" height="56" rx="6" fill="#0d1117" stroke="#79c0ff" strokeWidth="2"/>
    {[[30,30],[50,30],[70,30],[30,50],[50,50],[70,50],[30,70],[50,70],[70,70]].map(([x,y]) =>
      <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#79c0ff" fillOpacity="0.7"/>
    )}
    {[[30,30,50,30],[50,30,70,30],[30,50,50,50],[50,50,70,50],[30,70,50,70],[50,70,70,70],
      [30,30,30,50],[50,30,50,50],[70,30,70,50],[30,50,30,70],[50,50,50,70],[70,50,70,70]].map(([x1,y1,x2,y2],i) =>
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#79c0ff" strokeWidth="1" opacity="0.3"/>
    )}
    <circle cx="50" cy="50" r="7" fill="#79c0ff" fillOpacity="0.9"/>
  </>
}

// ── CRAF-T 纯手工匠人 ─────────────────────────────────────────
function Craft() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#ffa657" opacity="0.1"/>
    <rect x="44" y="16" width="12" height="36" rx="4" fill="#ffa657" fillOpacity="0.9"/>
    <ellipse cx="50" cy="55" rx="18" ry="10" fill="#ffa657" fillOpacity="0.7"/>
    <ellipse cx="50" cy="53" rx="14" ry="7" fill="#e3b341"/>
    <line x1="50" y1="63" x2="50" y2="80" stroke="#ffa657" strokeWidth="6" strokeLinecap="round"/>
    <path d="M40 80 Q50 76 60 80" stroke="#ffa657" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </>
}

// ── DOOM 硅基焦虑症 ───────────────────────────────────────────
function Doom() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#f78166" opacity="0.1"/>
    <path d="M50 14 L88 78 L12 78 Z" stroke="#f78166" strokeWidth="3" fill="#f78166" fillOpacity="0.15"/>
    <text x="50" y="68" fill="#f78166" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="monospace">!</text>
    {[[12,30],[88,30],[8,55],[92,55],[15,72],[85,72]].map(([x,y],i) =>
      <circle key={i} cx={x} cy={y} r="2" fill="#f78166" opacity={0.4+i*0.1}/>
    )}
  </>
}

// ── SELF 硅基自我意识 ─────────────────────────────────────────
function Self() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#79c0ff" opacity="0.08"/>
    {[38,28,18].map((r,i) =>
      <circle key={r} cx="50" cy="50" r={r} stroke="#79c0ff" strokeWidth={1.5-i*0.3} fill="none" opacity={0.8-i*0.2} strokeDasharray={i===2?"3 3":"none"}/>
    )}
    {[0,60,120,180,240,300].map((deg,i) => {
      const rad = deg * Math.PI / 180
      const x = 50 + 38 * Math.cos(rad), y = 50 + 38 * Math.sin(rad)
      return <circle key={deg} cx={x} cy={y} r="4" fill="#79c0ff" opacity={0.6+i*0.06}/>
    })}
    {[0,60,120,180,240,300].map((deg) => {
      const rad = deg * Math.PI / 180
      const x1 = 50 + 28 * Math.cos(rad), y1 = 50 + 28 * Math.sin(rad)
      const x2 = 50 + 38 * Math.cos(rad), y2 = 50 + 38 * Math.sin(rad)
      return <line key={`l${deg}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#79c0ff" strokeWidth="1.5" opacity="0.5"/>
    })}
    <circle cx="50" cy="50" r="7" fill="#79c0ff" opacity="0.9"/>
    <circle cx="50" cy="50" r="3" fill="#0d1117"/>
  </>
}

// ── NULL undefined ────────────────────────────────────────────
function Null() {
  return <>
    <circle cx="50" cy="50" r="44" stroke="#484f58" strokeWidth="2" strokeDasharray="5 4" fill="none"/>
    <text x="50" y="60" fill="#484f58" fontSize="36" fontWeight="bold" textAnchor="middle" fontFamily="monospace">?</text>
  </>
}

// ── RMRF sudo rm -rf / ────────────────────────────────────────
function Rmrf() {
  return <>
    <circle cx="50" cy="50" r="44" fill="#f78166" opacity="0.1"/>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
      const rad = deg * Math.PI / 180
      const len = i % 2 === 0 ? 36 : 24
      const x2 = 50 + len * Math.cos(rad), y2 = 50 + len * Math.sin(rad)
      return <line key={deg} x1="50" y1="50" x2={x2} y2={y2} stroke={i%2===0?'#f78166':'#ffa657'} strokeWidth={i%2===0?3:2} strokeLinecap="round"/>
    })}
    <circle cx="50" cy="50" r="8" fill="#f78166"/>
    <circle cx="50" cy="50" r="4" fill="#ffa657"/>
  </>
}
