"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: "chars" | "words" | "lines"
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  textAlign?: React.CSSProperties["textAlign"]
  onLetterAnimationComplete?: () => void
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null)
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true)
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    }
  }, [])

  const splitTextIntoElements = (text: string, type: string) => {
    if (type === "chars") {
      return text.split("").map((char, i) => (
        <span
          key={i}
          className="split-char inline-block"
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))
    } else if (type === "words") {
      return text.split(" ").map((word, i) => (
        <span key={i} className="split-word inline-block" style={{ display: "inline-block" }}>
          {word}
          {i < text.split(" ").length - 1 && <span style={{ display: "inline-block", width: "0.25em" }}>&nbsp;</span>}
        </span>
      ))
    }
    return text
  }

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return

      const targets = ref.current.querySelectorAll(splitType === "chars" ? ".split-char" : ".split-word")
      if (!targets.length) return

      const startPct = (1 - threshold) * 100
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px"
      const sign =
        marginValue === 0 ? "" : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`
      const start = `top ${startPct}%${sign}`

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
          onComplete: () => {
            onLetterAnimationComplete?.()
          },
        },
      )
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
      ],
      scope: ref,
    },
  )

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      wordWrap: "break-word",
    }
    const classes = `split-parent ${className}`
    const content = splitTextIntoElements(text, splitType)

    switch (tag) {
      case "h1":
        return (
          <h1 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {content}
          </h1>
        )
      case "h2":
        return (
          <h2 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {content}
          </h2>
        )
      case "h3":
        return (
          <h3 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {content}
          </h3>
        )
      case "h4":
        return (
          <h4 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {content}
          </h4>
        )
      case "h5":
        return (
          <h5 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {content}
          </h5>
        )
      case "h6":
        return (
          <h6 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {content}
          </h6>
        )
      case "span":
        return (
          <span ref={ref as React.RefObject<HTMLSpanElement>} style={style} className={classes}>
            {content}
          </span>
        )
      default:
        return (
          <p ref={ref as React.RefObject<HTMLParagraphElement>} style={style} className={classes}>
            {content}
          </p>
        )
    }
  }

  return renderTag()
}

export default SplitText
