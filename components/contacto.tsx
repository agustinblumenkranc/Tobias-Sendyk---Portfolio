"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function Contacto() {
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
    <section id="contacto" ref={refSeccion} className="min-h-screen flex items-center px-8 lg:px-24 py-12">
      <div className="w-full">
        <h2 className="animar opacity-0 translate-y-8 transition-all duration-1000 text-6xl lg:text-7xl font-black mb-16 flex items-center gap-6">
          <span className="text-accent text-5xl">04.</span>
          Contacto
          <div className="flex-1 h-1 bg-gradient-to-r from-accent to-transparent"></div>
        </h2>

        <div className="animar opacity-0 translate-y-8 transition-all duration-1000 delay-200">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-3xl border-2 border-primary/30 mb-12">
            <p className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              ¿Tienes un proyecto en mente?
            </p>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o
              simplemente quieres conectar, no dudes en contactarme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:sendyktobias@gmail.com"
              className="flex items-center gap-6 p-8 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 group hover:scale-105"
            >
              <div className="p-5 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Mail className="w-10 h-10" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-1">Email</p>
                <p className="text-xl font-bold">sendyktobias@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+5491126883536"
              className="flex items-center gap-6 p-8 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 group hover:scale-105"
            >
              <div className="p-5 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Phone className="w-10 h-10" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-1">Teléfono</p>
                <p className="text-xl font-bold">+54 911 2688-3536</p>
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://github.com/48592475"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-8 py-6 bg-card rounded-2xl border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xl font-bold hover:scale-105"
            >
              <Github className="w-8 h-8" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tobias-sendyk-b4290a343/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-8 py-6 bg-card rounded-2xl border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xl font-bold hover:scale-105"
            >
              <Linkedin className="w-8 h-8" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
