import { StaticImageData } from "next/image"
import { Phase } from "../components/ProjectSection/ApproachSection"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
// import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
// import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
// import { LineChart } from "../components/ProjectSection/LineChart"
// import { REVIEW_MAP, type ReviewProps } from "./review-data"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"
// import heroCoding from "@/public/assets/coding-platform.png"
// import heroDockerTodo from "@/public/assets/docker-todo.png"
// import heroYouTubeClone from "@/public/assets/youtube-clone.png"
// import heroAIResearch from "@/public/assets/ai-research-agent.png"

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter?: {
    heroBefore?: StaticImageData
    heroBeforeMobile?: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText?: string
    beforeMobileAltText?: string
    afterAltText?: string
  }
  results?: AnalyticCardProps[]
  phases: Phase[]
  review?: ReviewProps
  slug: string
}

// ======================== Online Coding Platform ========================
export const onlineCodingPlatform: ProjectData = {
  hero: {
    title: "Interactive Online Coding Platform",
    client: "CodePlay",
    year: "2025",
    description:
      "Built a fully interactive coding platform that allows users to write, test, and execute code in real-time across multiple languages, with live syntax highlighting, auto-complete, and instant feedback.",
    categories: ["Next.js", "React", "Web Development", "Code Execution"],
    link: "https://example-codeplay.com",
  },
  slug: "online-coding-platform",
  phases: [
    {
      id: 1,
      title: "IDE Development",
      subtitle: "In-browser Code Editor",
      description: "Implemented a web-based IDE supporting multiple languages with real-time syntax highlighting and error detection.",
      details: [
        "Monaco Editor integration for rich code editing",
        "Language server protocol (LSP) for auto-complete",
        "Real-time syntax validation and linting",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/coding-platform.png" alt="Online IDE" />,
    },
    {
      id: 2,
      title: "Code Execution Engine",
      subtitle: "Run Code Instantly",
      description: "Designed a sandboxed backend to safely execute user-submitted code and return real-time results.",
      details: [
        "Dockerized execution environment for each language",
        "Real-time streaming of program output",
        "Security measures to prevent malicious code execution",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/coding-platform-execution.png" alt="Code Execution" />,
    },
  ],
}

// ======================== Advanced AI Research Agent ========================
export const aiResearchAgent: ProjectData = {
  hero: {
    title: "Advanced AI Research Agent",
    client: "OpenAgent AI",
    year: "2025",
    description:
      "Developed a sophisticated AI agent capable of conducting multi-step research tasks, summarizing findings, and generating actionable insights from multiple sources.",
    categories: ["Next.js", "AI", "Node.js", "LangChain", "OpenAI API"],
    link: "https://example-ai-agent.com",
  },
  slug: "ai-research-agent",
  phases: [
    {
      id: 1,
      title: "Data Retrieval",
      subtitle: "Gather Knowledge Efficiently",
      description: "Integrated APIs and web scraping tools to fetch structured and unstructured data from multiple sources.",
      details: [
        "Automated web scraping pipelines",
        "Connected multiple APIs for research aggregation",
        "Implemented caching to improve response times",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/ai-research-agent.png" alt="AI Research Dashboard" />,
    },
    {
      id: 2,
      title: "Insight Generation",
      subtitle: "Summarize & Recommend",
      description:
        "Used natural language processing (NLP) models to analyze data, summarize key insights, and recommend actionable steps.",
      details: [
        "OpenAI GPT-4 for summarization and Q&A",
        "LangChain integration for multi-step reasoning",
        "Context-aware recommendations for research queries",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/ai-research-agent-summary.png" alt="AI Insights" />,
    },
  ],
}

// ======================== YouTube Clone ========================
export const youtubeClone: ProjectData = {
  hero: {
    title: "Full-Featured YouTube Clone",
    client: "StreamHub",
    year: "2024",
    description:
      "Developed a YouTube-like video streaming platform with upload, playback, comments, likes, search, and recommendation algorithms.",
    categories: ["Next.js", "React", "Node.js", "MongoDB", "Video Streaming"],
    link: "https://example-youtube-clone.com",
  },
  slug: "youtube-clone",
  phases: [
    {
      id: 1,
      title: "Video Streaming",
      subtitle: "Upload & Playback",
      description: "Implemented video upload, encoding, and adaptive streaming for seamless playback.",
      details: [
        "Node.js backend with AWS S3 storage",
        "FFmpeg video encoding pipeline",
        "HLS adaptive streaming support",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/youtube-clone.png" alt="YouTube Clone" />,
    },
    {
      id: 2,
      title: "Recommendation Engine",
      subtitle: "Personalized Video Feed",
      description: "Built a recommendation system based on user behavior and video metadata.",
      details: [
        "Collaborative filtering for user-based suggestions",
        "Content-based filtering using video tags and categories",
        "Efficient caching for fast feed updates",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/youtube-clone-recommendation.png" alt="Recommendation Engine" />,
    },
  ],
}

// ======================== Dockerized Todo App ========================
export const dockerTodoApp: ProjectData = {
  hero: {
    title: "Dockerized Full-Stack Todo App",
    client: "TaskMaster",
    year: "2025",
    description:
      "Built a Dockerized full-stack todo app with user authentication, CRUD operations, and persistent storage using PostgreSQL and Node.js.",
    categories: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://example-docker-todo.com",
  },
  slug: "docker-todo-app",
  phases: [
    {
      id: 1,
      title: "Backend & Database",
      subtitle: "Robust API with PostgreSQL",
      description: "Developed RESTful APIs with Node.js and connected to a PostgreSQL database for reliable data storage.",
      details: [
        "CRUD API endpoints with Express.js",
        "Database schema design and migrations",
        "User authentication with JWT",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/docker-todo.png" alt="Todo App Backend" />,
    },
    {
      id: 2,
      title: "Docker Setup",
      subtitle: "Containerized for Portability",
      description: "Containerized the full application using Docker for easy deployment and reproducibility.",
      details: [
        "Created Dockerfile for backend and frontend",
        "Docker Compose for local development",
        "Optimized container size and startup speed",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/docker-todo-docker.png" alt="Docker Setup" />,
    },
  ],
}
