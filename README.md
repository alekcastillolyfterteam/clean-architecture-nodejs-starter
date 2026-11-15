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
