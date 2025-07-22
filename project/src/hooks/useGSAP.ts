import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animations with 3D transforms
      gsap.fromTo('.hero-title', 
        { 
          opacity: 0, 
          y: 150,
          scale: 0.6,
          rotationX: 90,
          rotationY: 45,
          z: -200
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          z: 0,
          duration: 2,
          ease: "power4.out",
          stagger: 0.3
        }
      )

      gsap.fromTo('.hero-subtitle', 
        { 
          opacity: 0, 
          y: 80,
          filter: 'blur(20px)',
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.5,
          delay: 0.8,
          ease: "power3.out"
        }
      )

      gsap.fromTo('.hero-buttons', 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.7,
          rotationX: 45
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          delay: 1.3,
          ease: "back.out(2)"
        }
      )

      // Enhanced floating icons with 3D rotation
      gsap.to('.floating-icon', {
        y: -30,
        rotation: 360,
        rotationY: 180,
        duration: 6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random"
        }
      })

      // Advanced parallax with multiple layers
      gsap.utils.toArray('.parallax-slow').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -30,
          rotationX: 15,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
      })

      gsap.utils.toArray('.parallax-fast').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -80,
          rotationY: 10,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
      })

      // Enhanced card reveal with 3D effects
      gsap.utils.toArray('.reveal-card').forEach((card: any, index) => {
        gsap.fromTo(card, 
          {
            opacity: 0,
            y: 120,
            rotationY: 60,
            rotationX: 30,
            scale: 0.6,
            z: -100
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.15
          }
        )
      })

      // Enhanced text reveal with typewriter effect
      gsap.utils.toArray('.reveal-text').forEach((text: any) => {
        gsap.fromTo(text, 
          {
            opacity: 0,
            y: 60,
            filter: 'blur(10px)',
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Enhanced number counter with bounce effect
      gsap.utils.toArray('.counter').forEach((counter: any) => {
        const target = parseInt(counter.getAttribute('data-target'))
        gsap.fromTo(counter, 
          { textContent: 0 },
          {
            textContent: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            onUpdate: function() {
              gsap.to(counter, {
                scale: 1.1,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
              })
            }
          }
        )
      })

      // Advanced morphing shapes with SVG
      gsap.to('.morph-shape', {
        attr: { d: "M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z" },
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      })

      // Enhanced glitch effect with multiple layers
      gsap.utils.toArray('.glitch-hover').forEach((element: any) => {
        element.addEventListener('mouseenter', () => {
          const tl = gsap.timeline()
          tl.to(element, {
            x: 3,
            duration: 0.05,
            repeat: 8,
            yoyo: true,
            ease: "power2.inOut"
          })
          .to(element, {
            skewX: 2,
            duration: 0.1,
            repeat: 4,
            yoyo: true
          }, 0)
          .to(element, {
            filter: 'hue-rotate(90deg)',
            duration: 0.2,
            yoyo: true,
            repeat: 1
          }, 0)
        })
      })

      // Enhanced magnetic effect with 3D transforms
      gsap.utils.toArray('.magnetic').forEach((button: any) => {
        button.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = button.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          
          gsap.to(button, {
            x: x * 0.4,
            y: y * 0.4,
            rotationY: x * 0.1,
            rotationX: -y * 0.1,
            transformPerspective: 1000,
            duration: 0.4,
            ease: "power2.out"
          })
        })

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.4)"
          })
        })
      })

      // Infinite scroll text with wave effect
      gsap.to('.scroll-text', {
        xPercent: -100,
        duration: 25,
        ease: "none",
        repeat: -1
      })

      // Enhanced 3D card tilt with depth
      gsap.utils.toArray('.tilt-card').forEach((card: any) => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 8
          const rotateY = (centerX - x) / 8

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            z: 50,
            duration: 0.4,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            z: 0,
            duration: 0.8,
            ease: "power2.out"
          })
        })
      })

      // Enhanced stagger animations with random effects
      gsap.utils.toArray('.stagger-grid').forEach((grid: any) => {
        const items = grid.querySelectorAll('.stagger-item')
        gsap.fromTo(items,
          {
            opacity: 0,
            y: 100,
            scale: 0.6,
            rotationY: 45,
            z: -100
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: {
              amount: 1.5,
              from: "random",
              grid: "auto"
            },
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Enhanced liquid morphing with multiple properties
      gsap.to('.liquid-morph', {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        scale: 1.05,
        rotation: 5,
        duration: 6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      })

      // Advanced typewriter effect with cursor
      gsap.utils.toArray('.typewriter').forEach((element: any) => {
        const text = element.textContent
        element.textContent = ''
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
        
        tl.to(element, {
          text: text,
          duration: text.length * 0.03,
          ease: "none"
        })
        .to(element, {
          borderRightColor: 'transparent',
          duration: 0.5,
          repeat: -1,
          yoyo: true
        })
      })

      // Particle system animation
      const createParticle = () => {
        const particle = document.createElement('div')
        particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-60'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = '100%'
        
        document.body.appendChild(particle)

        gsap.to(particle, {
          y: -window.innerHeight - 100,
          x: (Math.random() - 0.5) * 300,
          opacity: 0,
          scale: Math.random() * 2 + 0.5,
          duration: Math.random() * 4 + 3,
          ease: "none",
          onComplete: () => {
            particle.remove()
          }
        })
      }

      // Create particles periodically
      const particleInterval = setInterval(createParticle, 300)

      // Cleanup
      return () => {
        clearInterval(particleInterval)
      }

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export const useScrollAnimations = () => {
  useEffect(() => {
    // Enhanced smooth scrolling with momentum and easing
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2.5,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Enhanced ScrollTrigger integration
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Add scroll-based animations
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: 'body',
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })

    return () => {
      lenis.destroy()
    }
  }, [])
}

export const useParticleSystem = () => {
  useEffect(() => {
    const createAdvancedParticle = () => {
      const particle = document.createElement('div')
      const size = Math.random() * 4 + 1
      const color = ['#ffffff', '#06b6d4', '#fbbf24'][Math.floor(Math.random() * 3)]
      
      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        box-shadow: 0 0 ${size * 2}px ${color};
      `
      
      document.body.appendChild(particle)

      gsap.to(particle, {
        y: -window.innerHeight - 200,
        x: (Math.random() - 0.5) * 400,
        opacity: 0,
        scale: Math.random() * 3 + 0.5,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 4,
        ease: "none",
        onComplete: () => {
          particle.remove()
        }
      })
    }

    const interval = setInterval(createAdvancedParticle, 150)
    return () => clearInterval(interval)
  }, [])
}