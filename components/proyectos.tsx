"use client"

import { useEffect, useRef } from "react"
import { Github, ExternalLink } from "lucide-react"

export function Proyectos() {
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

  const proyectos = [
    {
      titulo: "PIA",
      descripcion:
        "Inteligencia Artificial que predice el cáncer de páncreas, brindando ayuda al médico a la hora de tomar decisiones. De esta forma se puede lograr un tratamiento temprano y eficaz.",
      tecnologias: ["Next.js", "JavaScript", "Python"],
      github: "https://github.com/48592475/PIA.git",
      destacado: "IA Médica",
    },
    {
      titulo: "Tagy Games",
      descripcion:
        "Inteligencia Artificial que brinda diferentes juegos y situaciones para niños que sufren del Espectro Autista, con el fin de que a la hora de salir a la calle el estrés por la resolución de problemas sea cada vez menor.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Python"],
      github: "https://github.com/48592475/Tagy-games.git",
      destacado: "IA Educativa",
    },
  ]

  return (
    <section id="proyectos" ref={refSeccion} className="min-h-screen flex items-center px-8 lg:px-24 py-12">
      <div className="w-full">
        <h2 className="animar opacity-0 translate-y-8 transition-all duration-1000 text-6xl lg:text-7xl font-black mb-16 flex items-center gap-6">
          <span className="text-accent text-5xl">03.</span>
          Proyectos
          <div className="flex-1 h-1 bg-gradient-to-r from-accent to-transparent"></div>
        </h2>

        <div className="space-y-12">
          {proyectos.map((proyecto, idx) => (
            <div
              key={proyecto.titulo}
              className="animar opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              <div className="bg-card p-10 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-black text-primary mb-3">{proyecto.titulo}</h3>
                    <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold">
                      {proyecto.destacado}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300"
                    >
                      <Github className="w-7 h-7" />
                    </a>
                    <a
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300"
                    >
                      <ExternalLink className="w-7 h-7" />
                    </a>
                  </div>
                </div>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{proyecto.descripcion}</p>
                <div className="flex flex-wrap gap-3">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2 bg-secondary text-base font-bold rounded-full text-accent border-2 border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
