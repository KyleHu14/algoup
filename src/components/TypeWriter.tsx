"use client"

import React, { useState, useEffect, useRef } from "react"

interface TypewriterProps {
    text: string[]
    speed?: number
    delay?: number
    loop?: boolean
    cursor?: boolean
    onComplete?: () => void
    className?: string
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    speed = 50,
    delay = 1500,
    loop = false,
    cursor = true,
    onComplete,
    className = "",
}) => {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const textArray = text
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        const currentText = textArray[currentTextIndex]

        // If the text is fully typed
        if (currentIndex >= currentText.length && !isDeleting) {
            // If we're looping or using multiple strings, start deletion after delay
            if (loop || currentTextIndex < textArray.length - 1) {
                timeoutRef.current = setTimeout(() => {
                    setIsDeleting(true)
                }, delay)
                return
            } else {
                // Animation is complete
                setIsComplete(true)
                if (onComplete) onComplete()
                return
            }
        }

        // If deleting is complete
        if (isDeleting && currentIndex === 0) {
            setIsDeleting(false)
            // Move to next text in array or loop back to first
            setCurrentTextIndex((prev) => (prev + 1) % textArray.length)
            return
        }

        // Calculate timeout based on whether we're typing or deleting
        const timeout = isDeleting ? speed / 2 : speed

        timeoutRef.current = setTimeout(() => {
            if (isDeleting) {
                setDisplayText(currentText.substring(0, currentIndex - 1))
                setCurrentIndex((prev) => prev - 1)
            } else {
                setDisplayText(currentText.substring(0, currentIndex + 1))
                setCurrentIndex((prev) => prev + 1)
            }
        }, timeout)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [
        currentIndex,
        currentTextIndex,
        delay,
        isDeleting,
        loop,
        onComplete,
        speed,
        textArray,
    ])

    return (
        <span className={className}>
            {displayText}
            {cursor && !isComplete && <span className="animate-cursor">|</span>}
        </span>
    )
}

export default Typewriter
