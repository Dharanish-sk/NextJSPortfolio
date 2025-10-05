"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import CoadingPlatform from "@/app/images/coding-plat.webp"
import AdvanceAIAgent from "@/app/images/Advance-ai-agent.webp"
import Vidtube from "@/app/images/youtube-clone.webp"
import Todo from "@/app/images/todo-app.webp"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

// Fixed: IDs should match the gridId props used below
const ids = ["CodeVerse", "NeuroMind", "StreamSphere", "DockiTask"]
export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  // Fixed: Keys should match the ids array
  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    CodeVerse: { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    NeuroMind: { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    StreamSphere: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    DockiTask: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id] || { x: 0, y: 0 } // Added fallback
      const t = OFFSET_TUNING[id] || {} // Added fallback
      return [
        id,
        {
          x: (base.x || 0) + (t.dx || 0), // Safe access
          y: (base.y || 0) + (t.dy || 0), // Safe access
          rot: t.rot || 0, // Safe access
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  
return (
  <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
    <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
      <AnimatedCard
        key="CodeVerse"
        src={CoadingPlatform}
        alt="CodeVerse"
        offset={offsets["CodeVerse"]}
        gridId="CodeVerse"
        color="#3B06D1"
        type="Platform to improve problem-solving skills"
        progress={progress}
        href={externalLinks.CodeVerse}
        dataText="View on GitHub"
      />
      <AnimatedCard
        key="NeuroMind"
        src={AdvanceAIAgent}
        alt="NeuroMind"
        offset={offsets["NeuroMind"]}
        gridId="NeuroMind"
        color="#024EFC"
        type="Advanced AI Research Agent"
        progress={progress}
        href={externalLinks.NeuroMind}
        dataText="View on GitHub"
      />
      <AnimatedCard
        key="StreamSphere"
        src={Vidtube}
        alt="StreamSphere"
        offset={offsets["StreamSphere"]}
        gridId="StreamSphere"
        color="#DA961A"
        type="Video streaming platform"
        progress={progress}
        href={externalLinks.StreamSphere}
        dataText="View on GitHub"
      />
      <AnimatedCard
        key="DockiTask"
        src={Todo}
        alt="DockiTask"
        offset={offsets["DockiTask"]}
        gridId="DockiTask"
        color="#13739C"
        type="Dockerized Todo App"
        progress={progress}
        href={externalLinks.DockiTask}
        dataText="View on GitHub"
      />
    </div>
  </section>
)

}