"use client"

import { useEffect, useRef } from "react"

export function Habilidades() {
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

  const categorias = [
    {
      titulo: "Backend",
      items: ["Node.js", "NestJS", "Express", "SQL", "MongoDB"],
    },
    {
      titulo: "Herramientas",
      items: ["Git", "Postman", "VS Code", "Vercel"],
    },
    {
      titulo: "Conocimientos",
      items: ["APIs", "Autenticación", "Arquitectura de software"],
    },
  ]

  return (
    <section id="habilidades" ref={refSeccion} className="min-h-screen flex items-center px-8 lg:px-24 py-12">
      <div className="w-full">
        <h2 className="animar opacity-0 translate-y-8 transition-all duration-1000 text-6xl lg:text-7xl font-black mb-16 flex items-center gap-6">
          <span className="text-accent text-5xl">02.</span>
          Habilidades
          <div className="flex-1 h-1 bg-gradient-to-r from-accent to-transparent"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categorias.map((categoria, idx) => (
            <div
              key={categoria.titulo}
              className="animar opacity-0 translate-y-8 transition-all duration-1000 bg-card p-10 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              <h3 className="text-3xl font-black mb-8 text-primary">{categoria.titulo}</h3>
              <ul className="space-y-4">
                {categoria.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
