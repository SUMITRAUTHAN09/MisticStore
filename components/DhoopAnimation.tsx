"use client"

import { motion } from "framer-motion"

function SmokeWisp({
  delay,
  duration,
  xDrift,
  startX,
  size,
  opacity,
}: {
  delay: number
  duration: number
  xDrift: number
  startX: number
  size: number
  opacity: number
}) {
  return (
    <motion.ellipse
      cx={startX}
      cy={0}
      rx={size}
      ry={size * 1.6}
      fill="url(#smokeGrad)"
      initial={{ opacity: 0, y: 0, scaleX: 0.2, scaleY: 0.3 }}
      animate={{
        opacity: [0, opacity, opacity * 0.8, opacity * 0.5, opacity * 0.2, 0],
        y: [0, -40, -90, -150, -210, -280],
        scaleX: [0.2, 0.6, 1.0, 1.5, 2.0, 2.6],
        scaleY: [0.3, 0.6, 0.9, 1.1, 1.2, 1.3],
        x: [0, xDrift * 0.4, xDrift * 0.9, xDrift * 0.5, xDrift * 1.3, xDrift * 0.8],
        rotate: [0, xDrift > 0 ? 12 : -12, xDrift > 0 ? -8 : 8, xDrift > 0 ? 18 : -18, xDrift > 0 ? -5 : 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
        repeatDelay: 0,
      }}
    />
  )
}

function EmberParticle({ delay, angle }: { delay: number; angle: number }) {
  const rad = (angle * Math.PI) / 180
  const tx = Math.cos(rad) * 18
  const ty = Math.sin(rad) * 8
  return (
    <motion.circle
      cx={50}
      cy={115}
      r={1.2}
      fill="#ff9500"
      initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        x: [0, tx * 0.5, tx],
        y: [0, ty - 10, ty - 20],
        scale: [1, 0.8, 0],
      }}
      transition={{
        duration: 1.4,
        delay,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: "easeOut",
      }}
    />
  )
}

export default function DhoopAnimation() {
  const wisps = [
    { delay: 0,    duration: 5.0, xDrift:  3,  startX: 50,   size: 6,   opacity: 0.55 },
    { delay: 0.5,  duration: 4.8, xDrift: -7,  startX: 49,   size: 7,   opacity: 0.50 },
    { delay: 1.0,  duration: 5.2, xDrift:  9,  startX: 51,   size: 5,   opacity: 0.45 },
    { delay: 1.5,  duration: 4.6, xDrift: -5,  startX: 50,   size: 8,   opacity: 0.40 },
    { delay: 2.0,  duration: 5.4, xDrift:  6,  startX: 49,   size: 6,   opacity: 0.50 },
    { delay: 2.5,  duration: 4.9, xDrift: -10, startX: 51,   size: 7,   opacity: 0.45 },
    { delay: 3.0,  duration: 5.1, xDrift:  4,  startX: 50,   size: 5.5, opacity: 0.35 },
    { delay: 3.5,  duration: 4.7, xDrift: -3,  startX: 50,   size: 9,   opacity: 0.42 },
    { delay: 0.8,  duration: 5.3, xDrift:  8,  startX: 48,   size: 6,   opacity: 0.38 },
    { delay: 1.8,  duration: 4.5, xDrift: -8,  startX: 52,   size: 5,   opacity: 0.30 },
  ]

  const embers = [
    { delay: 0,   angle: -60 },
    { delay: 0.7, angle:  40 },
    { delay: 1.4, angle: -30 },
    { delay: 2.1, angle:  70 },
    { delay: 2.8, angle: -80 },
  ]

  return (
    <div className="flex flex-col items-center select-none pointer-events-none">
      <svg
        width="120"
        height="380"
        viewBox="0 0 100 380"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Multi-stop smoke gradient — golden/warm grey */}
          <radialGradient id="smokeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#e8c97a" stopOpacity="0.9" />
            <stop offset="25%"  stopColor="#c8a055" stopOpacity="0.6" />
            <stop offset="60%"  stopColor="#9a7a3a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6b5420" stopOpacity="0" />
          </radialGradient>

          {/* Inner core smoke — whiter/brighter near tip */}
          <radialGradient id="smokeCoreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fff8e7" stopOpacity="0.8" />
            <stop offset="50%"  stopColor="#e8d090" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c8a055" stopOpacity="0" />
          </radialGradient>

          {/* Cone: rich brown-gold */}
          <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f7d060" />
            <stop offset="20%"  stopColor="#e89020" />
            <stop offset="55%"  stopColor="#9a5510" />
            <stop offset="85%"  stopColor="#6b3508" />
            <stop offset="100%" stopColor="#3d1e00" />
          </linearGradient>

          {/* Cone left highlight */}
          <linearGradient id="coneHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#fff8e0" stopOpacity="0.25" />
            <stop offset="30%"  stopColor="#fff8e0" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000"    stopOpacity="0.35" />
          </linearGradient>

          {/* Tip glow */}
          <radialGradient id="tipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
            <stop offset="20%"  stopColor="#ffcc00" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#ff6600" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff2200" stopOpacity="0" />
          </radialGradient>

          {/* Base plate */}
          <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#c8a020" />
            <stop offset="50%"  stopColor="#7a5a0a" />
            <stop offset="100%" stopColor="#2a1500" />
          </linearGradient>

          {/* Base plate shine */}
          <linearGradient id="baseShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#fff8e0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fff8e0" stopOpacity="0" />
          </linearGradient>

          {/* Smoke blur filter */}
          <filter id="smokeBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>

          {/* Tip bloom filter */}
          <filter id="tipBloom" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ground glow filter */}
          <filter id="groundGlow" x="-30%" y="-100%" width="160%" height="400%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* ── SMOKE COLUMN ── */}
        {/* Outer diffuse layer */}
        <g transform="translate(0, 88)" filter="url(#smokeBlur)">
          {wisps.map((w, i) => (
            <SmokeWisp key={i} {...w} />
          ))}
        </g>

        {/* Inner bright core near tip */}
        <motion.ellipse
          cx={50} cy={100}
          rx={3} ry={10}
          fill="url(#smokeCoreGrad)"
          animate={{
            opacity: [0.6, 0.9, 0.5, 0.8, 0.4],
            scaleX: [0.5, 0.8, 0.6, 0.9, 0.5],
            y: [-2, -8, -4, -10, -2],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── EMBER PARTICLES ── */}
        <g>
          {embers.map((e, i) => (
            <EmberParticle key={i} {...e} />
          ))}
        </g>

        {/* ── GLOWING TIP ── */}
        <g filter="url(#tipBloom)">
          <motion.ellipse
            cx={50} cy={114}
            rx={7} ry={7}
            fill="url(#tipGlow)"
            animate={{
              opacity: [0.7, 1, 0.6, 1, 0.8],
              rx: [5, 8, 5, 9, 5],
              ry: [5, 8, 5, 9, 5],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* White-hot ember center */}
        <motion.circle
          cx={50} cy={114} r={2}
          fill="white"
          animate={{ opacity: [0.9, 1, 0.7, 1, 0.8] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── CONE BODY ── */}
        <polygon points="50,116 16,265 84,265" fill="url(#coneGrad)" />
        {/* Highlight/shadow overlay */}
        <polygon points="50,116 16,265 84,265" fill="url(#coneHighlight)" />

        {/* Texture rings */}
        {[0.18, 0.38, 0.58, 0.78].map((t, i) => {
          const y = 116 + t * 149
          const halfW = t * 34
          return (
            <line
              key={i}
              x1={50 - halfW} y1={y}
              x2={50 + halfW} y2={y}
              stroke="#f5c84230"
              strokeWidth={i % 2 === 0 ? "0.7" : "0.4"}
            />
          )
        })}

        {/* Left edge highlight streak */}
        <line x1={50} y1={116} x2={23} y2={255} stroke="#fff8e030" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── BASE PLATFORM ── */}
        {/* Shadow underneath plate */}
        <ellipse cx={50} cy={275} rx={42} ry={9} fill="#000" opacity={0.5} filter="url(#groundGlow)" />

        {/* Main plate */}
        <ellipse cx={50} cy={266} rx={36} ry={7.5} fill="url(#baseGrad)" />
        {/* Plate shine */}
        <ellipse cx={50} cy={264} rx={36} ry={7.5} fill="url(#baseShine)" />
        {/* Plate gold rim */}
        <ellipse cx={50} cy={266} rx={36} ry={7.5} fill="none" stroke="#f5c842" strokeWidth="0.8" strokeOpacity="0.6" />

        {/* Inner disc */}
        <ellipse cx={50} cy={270} rx={28} ry={5} fill="#1a0d00" />
        <ellipse cx={50} cy={270} rx={28} ry={5} fill="none" stroke="#8b6914" strokeWidth="0.5" strokeOpacity="0.5" />

        {/* ── AMBIENT GROUND GLOW ── */}
        <motion.ellipse
          cx={50} cy={268}
          rx={44} ry={9}
          fill="#d47a10"
          animate={{ opacity: [0.12, 0.28, 0.12], rx: [40, 46, 40] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(8px)" }}
        />
      </svg>
    </div>
  )
}