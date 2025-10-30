"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Sparkles } from "lucide-react"

export function Inicio() {
  const refSeccion = useRef<HTMLElement>(null)

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("opacity-100", "translate-y-0", "scale-100")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elementos = refSeccion.current?.querySelectorAll(".animar")
    elementos?.forEach((el) => observador.observe(el))

    return () => observador.disconnect()
  }, [])

  return (
    <section
      id="inicio"
      ref={refSeccion}
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />

      <div className="max-w-4xl relative z-10">
        <div className="animar opacity-0 translate-y-8 scale-95 transition-all duration-1000">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-accent animar-flotar" />
            <p className="text-accent text-xl font-bold tracking-wider uppercase">Hola, mi nombre es</p>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black mb-6 text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animar-brillo">
            Tobias Sendyk
          </h1>

          <h2 className="text-4xl lg:text-6xl font-black text-foreground/80 mb-8 text-balance tracking-tight">
            Construyo sistemas <span className="text-primary animar-brillo">rápidos y seguros</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium">
            Soy desarrollador backend especializado en crear sistemas rápidos, seguros y bien organizados. Trabajo con
            Node.js y JavaScript para construir APIs, bases de datos y servidores eficientes y escalables.
          </p>

          <a
            href="#proyectos"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:scale-110 hover:rotate-2 transition-all duration-500 animar-pulso-borde shadow-2xl"
          >
            Ver mis proyectos
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
