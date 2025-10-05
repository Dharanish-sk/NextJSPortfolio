import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.webp"
 import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Dharanish
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Dharanish " className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Dharanish
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Engineer  </p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
  <p>
    <strong className="font-semibold text-slate-900">I build full-stack applications</strong> with a focus on React, Next.js, 
    and modern web technologies. I enjoy crafting clean, functional UIs and connecting them seamlessly with the backend to deliver impactful solutions.
  </p>

  <p>
    <strong className="font-semibold text-slate-900">I learn fast and iterate quickly</strong>. From frontend to backend to databases, 
    I embrace the full stack, ship features in small steps, and constantly refine with feedback. My goal is always to deliver value fast and improve along the way.
  </p>

  <p>
    <strong className="font-semibold text-slate-900">My core philosophy is simplicity</strong>. I believe in keeping things lean and practical
    if complexity slows progress, I rebuild it the smarter and simpler way.
  </p>

  {/* signature */}
  
</Typography>

        </div>
      </div>
    </section>
  )
}
