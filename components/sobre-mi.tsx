"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function SobreMi() {
  const refSeccion = useRef<HTMLElement>(null)

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("opacity-100", "translate-y-0")
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
    <section id="sobre-mi" ref={refSeccion} className="min-h-screen flex items-center px-8 lg:px-24 py-12">
      <div className="w-full">
        <h2 className="animar opacity-0 translate-y-8 transition-all duration-1000 text-6xl lg:text-7xl font-black mb-16 flex items-center gap-6">
          <span className="text-accent text-5xl">01.</span>
          Sobre Mí
          <div className="flex-1 h-1 bg-gradient-to-r from-accent to-transparent"></div>
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8 animar opacity-0 translate-y-8 transition-all duration-1000 delay-200">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Soy desarrollador backend y me gusta crear sistemas rápidos, seguros y bien organizados. Disfruto trabajar
              en la parte que no se ve, pero que hace que todo funcione bien: las APIs, bases de datos y servidores.
            </p>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Trabajo principalmente con Node.js y JavaScript, y me enfoco en que el código sea eficiente, fácil de
              mantener y escalable. Me gusta resolver problemas y encontrar la mejor forma de que una aplicación
              funcione sin fallar.
            </p>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              En mi tiempo libre, me interesa aprender nuevas tecnologías, participar en proyectos de código abierto y
              seguir mejorando mis conocimientos sobre desarrollo backend e infraestructura.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-card p-6 rounded-xl border-2 border-accent/30">
                <div className="text-5xl font-black text-accent mb-2">2+</div>
                <div className="text-lg text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="bg-card p-6 rounded-xl border-2 border-primary/30">
                <div className="text-5xl font-black text-primary mb-2">10+</div>
                <div className="text-lg text-muted-foreground">Proyectos Completados</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animar opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KSOOB22ENFE7TG5ZGQRWZHTRZE-1m9Cujv5G2gMc8jvswjTXFQK2Xp93i.avif"
                alt="Tobias Sendyk"
                width={500}
                height={500}
                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-300 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
