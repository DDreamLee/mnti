# MNTI 码农型人格测试

> 测出你是哪种码农 — 27 种人格，总有一款是你

**[🚀 立即测试](https://DDreamLee.github.io/mnti/)**

---

## 这是什么

受 SBTI 测试启发，MNTI（**M**ă**N**óng **T**ype **I**ndicator，码农型人格测试）是一个程序员向的性格测试。

36 道题，覆盖 18 个维度，匹配 27 种码农人格类型，包含 2 种隐藏结局。

## 维度模型

| 模型 | 维度 |
|------|------|
| 码字玄学 | 洁癖指数 · 抽象欲 · 防御性 |
| 排查禅 | 系统性 · 求救阈值 · 工具段位 |
| 工程道 | 测试信仰 · 重构冲动 · 文档热情 |
| 协作经 | Review 风格 · 表达欲 · 会议观 |
| 打工魂 | 卷度 · 摸鱼指数 · 追新焦虑 |
| 硅基共存 | AI 依赖度 · AI 信任度 · AI 焦虑感 |

## 人格类型一览

| 代码 | 名称 | 代码 | 名称 |
|------|------|------|------|
| ARCH | 架构宇宙 | LGTM | LGTM 橡皮图章 |
| CRUD | CRUD 战士 | FAKE | 冒充者 |
| PRIN-T | console.log 侦探 | VETO | 需求粉碎机 |
| FORK | 轮子哥 | DOCS | 文档狂魔 |
| CLEA-N | 重构狂魔 | DEBT | 永动技术债机 |
| TODO | // TODO 收藏家 | GRIN-D | 卷王本王 |
| UNIT | TDD 圣徒 | FLAT | 躺平工程师 |
| YOLO | git push -f 型 | FOSS | 开源英雄 |
| TERM | 终端美学家 | PROM-T | AI 全托管 |
| BLOG | 技术布道者 | CRAF-T | 纯手工匠人 |
| IDLE | 摸鱼艺术家 | DOOM | 硅基焦虑症 |
| JACK | 全栈缝合怪 | NULL | undefined ⭐ |
| FOMO | 框架追星族 | RMRF | sudo rm -rf / ⭐ |
| RELI-C | 遗留代码守护神 | | |

⭐ 隐藏类型，需要特定答题组合触发

## 技术栈

- React 18 + TypeScript + Vite 5
- 纯 CSS，无 UI 框架
- 人格匹配算法：18 维 L/M/H 向量 Manhattan 距离
- 每种人格配有手写 SVG 抽象画像

## 本地运行

```bash
git clone https://github.com/DDreamLee/mnti.git
cd mnti
npm install
npm run dev
```

## 部署

```bash
npm run deploy   # 发布到 GitHub Pages
```
