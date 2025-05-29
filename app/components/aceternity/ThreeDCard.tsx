'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react'
import { Github, ExternalLink } from 'lucide-react'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('flex items-center justify-center', containerClassName)}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex items-center justify-center relative transition-all duration-200 ease-linear',
            className
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-[500px] w-[350px] [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: React.ReactNode
  className?: string
  translateX?: number
  translateY?: number
  translateZ?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    handleAnimations()
  }, [isMouseEntered])

  const handleAnimations = () => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }

  return (
    <div
      ref={ref}
      className={cn('w-fit transition duration-200 ease-linear', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack?: string[]
  githubLink: string
  demoLink: string
}

export default function ThreeDCard({
  title,
  description,
  image,
  techStack = [],
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[350px] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ={100}
          className="w-full mt-4"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover/card:scale-110"
            />
          </div>
        </CardItem>
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        {techStack.length > 0 && (
          <CardItem
            translateZ={40}
            className="flex flex-wrap gap-2 mt-4"
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500"
              >
                {tech}
              </span>
            ))}
          </CardItem>
        )}
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            translateX={-40}
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            className="px-4 py-2 rounded-xl text-xs font-bold"
          >
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}