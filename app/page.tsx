"use client"

import { LuzCursor } from "@/components/luz-cursor"
import { BarraLateral } from "@/components/barra-lateral"
import { Inicio } from "@/components/inicio"
import { SobreMi } from "@/components/sobre-mi"
import { Habilidades } from "@/components/habilidades"
import { Proyectos } from "@/components/proyectos"
import { Contacto } from "@/components/contacto"

export default function Pagina() {
  return (
    <div className="relative min-h-screen bg-background">
      <LuzCursor />
      <div className="flex">
        <BarraLateral />
        <main className="flex-1 lg:ml-80">
          <Inicio />
          <SobreMi />
          <Habilidades />
          <Proyectos />
          <Contacto />
        </main>
      </div>
    </div>
  )
}
