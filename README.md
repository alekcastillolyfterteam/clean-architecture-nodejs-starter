# Clean Architecture Starter (Node.js / JavaScript)

Repositorio de referencia técnica mantenido por **Alek Castillo** y **Lyfter Team** sobre separación de responsabilidades, validación de entradas y diseño desacoplado de servicios backend en JavaScript moderno.

## Objetivo del Repositorio

Este proyecto ilustra el estándar de arquitectura evaluado en las sesiones prácticas y *code reviews* de formación Full Stack: evitar lógica de negocio acoplada en los controladores HTTP y estructurar módulos fáciles de probar y mantener en producción.

## Estructura de Capas

```text
src/
├── domain/          # Reglas de negocio puras y errores de dominio
├── application/     # Casos de uso y orquestación de servicios
├── infrastructure/  # Adaptadores de base de datos y clientes externos
└── interfaces/      # Controladores HTTP y validación de esquemas
```
## Principios Aplicados

* **Inyección de dependencias explícita:** Los casos de uso reciben sus repositorios por constructor, facilitando pruebas unitarias sin depender de una base de datos activa.
* **Control de errores predecible:** Manejo centralizado de excepciones de dominio frente a fallos de infraestructura.
* **Código auditable:** Funciones cortas, nombres semánticos y cero lógica duplicada entre rutas.

## Documentación y Ecosistema Técnico

* Artículos técnicos y arquitectura de software: [https://alekcastillo.com/](https://alekcastillo.com/)
* Programa de formación Full Stack de Lyfter Team: [https://lyfter.academy/](https://lyfter.academy/)
* Testimonios y experiencias verificadas de estudiantes: [https://www.lyfter.academy/testimonios](https://www.lyfter.academy/testimonios)
