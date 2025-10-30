"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react"

export function BarraLateral() {
  const [activo, setActivo] = useState("inicio")

  useEffect(() => {
    const manejarScroll = () => {
      const secciones = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"]
      const posicion = window.scrollY + 200

      for (const id of secciones) {
        const elemento = document.getElementById(id)
        if (elemento) {
          const { offsetTop, offsetHeight } = elemento
          if (posicion >= offsetTop && posicion < offsetTop + offsetHeight) {
            setActivo(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", manejarScroll)
    return () => window.removeEventListener("scroll", manejarScroll)
  }, [])

  const enlaces = [
    { id: "inicio", texto: "Inicio" },
    { id: "sobre-mi", texto: "Sobre Mí" },
    { id: "habilidades", texto: "Habilidades" },
    { id: "proyectos", texto: "Proyectos" },
    { id: "contacto", texto: "Contacto" },
  ]

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-80 bg-card/80 backdrop-blur-xl border-r border-primary/20 p-8 hidden lg:flex flex-col justify-between z-40">
        <div>
          <div className="mb-12 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <h1 className="text-4xl font-black text-primary">TS</h1>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-1">Tobias Sendyk</h2>
              <p className="text-muted-foreground font-medium">Desarrollador Backend</p>
            </div>
          </div>

          <nav className="space-y-2">
            {enlaces.map((enlace) => (
              <a
                key={enlace.id}
                href={`#${enlace.id}`}
                className={`block px-5 py-4 rounded-xl transition-all duration-500 font-bold relative overflow-hidden group ${
                  activo === enlace.id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground scale-105 shadow-lg shadow-primary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:scale-105"
                }`}
              >
                <span className="relative z-10">{enlace.texto}</span>
                {activo === enlace.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50 blur-xl" />
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <div className="flex gap-3">
            <a
              href="https://github.com/48592475"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-500 hover:scale-125 hover:rotate-12 shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tobias-sendyk-b4290a343/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-500 hover:scale-125 hover:rotate-12 shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sendyktobias@gmail.com"
              className="p-3 rounded-xl bg-secondary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-500 hover:scale-125 hover:rotate-12 shadow-lg"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground space-y-2 font-medium">
            <p className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              sendyktobias@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +54 911 2688-3536
            </p>
          </div>
        </div>
      </aside>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-xl border-t border-primary/20 p-4 z-40">
        <div className="flex justify-around">
          {enlaces.map((enlace) => (
            <a
              key={enlace.id}
              href={`#${enlace.id}`}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-500 ${
                activo === enlace.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground scale-110 shadow-lg"
                  : "text-muted-foreground hover:scale-110"
              }`}
            >
              {enlace.texto}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
