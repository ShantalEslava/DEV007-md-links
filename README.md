
# MdLinks

## Índice

    1. Preambulo

    2. Descripción

    3. Instalación y Ejecución Local

        3.1.Validate

        3.2.Stats

    4. Diagrama de Flujo

    5. Criterios Minimos de Aceptación

## 1. Preambulo

Descubre una forma eficaz de gestionar tus enlaces en archivos Markdown con MdLinks. Optimiza tu flujo de trabajo, ahorra tiempo y garantiza la integridad de tus recursos en línea con esta herramienta versátil y potente. Lo mejor es que MdLinks se integra perfectamente con npm, lo que significa que su instalación y despliegue son tan sencillos como los comandos que ofrece. 

![portadaTech](C:\Users\Shanty\Desktop\Laboratoria\mdLinks\DEV007-md-links\images\imagentechportada.jpg)

## 2. Descripción

MdLinks es una innovadora herramienta desarrollada con Node.js que simplifica la verificación y análisis de enlaces en archivos Markdown. Diseñada para automatizar el proceso de detección de enlaces rotos o incorrectos, MdLinks se destaca por su facilidad de uso y eficiencia.

Mediante su interfaz de línea de comandos intuitiva, MarkdownLinkChecker permite a los usuarios escanear archivos en formato Markdown en busca de enlaces, brindando opciones versátiles para personalizar el análisis.

## 3. Instalación y Ejecución Local

Clona el proyecto desde GitHub

```bash
  git clone https://github.com/ShantalEslava/DEV007-md-links
```

Dirigete al directorio del proyecto

```bash
  cd my-project
```

Instala las dependencias necesarias

```bash
  npm install
```

Ejecuta MdLinks, no olvides agregar tu directorio a verificar junto con la acción que deseas realizar

```bash
  node mdLinks [Aqui va tu directorio] --ejemplo
```
###  3.1 --Validate

A través de esta característica, somos capaces de identificar y presentar de manera eficiente aquellos enlaces que se encuentran plenamente operativos, presentándolos en la consola con un acompañamiento de texto descriptivo. Esta capacidad no solo facilita la revisión y verificación de la integridad de los enlaces en nuestro archivo, sino que también simplifica la tarea de asegurarnos de que los recursos enlazados estén disponibles y sean precisos.

Ejemplo:

```bash
 {
  text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
  url: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
  status: 200
}
{
  text: '4. Consideraciones generales',
  url: '#4-consideraciones-generales',
  status: 404
}
```

###   3.2 --Stats

Mientras tanto al incluir la opción  **--stats** el resultado generado tras la ejecución contendrá un texto que resumirá estadísticas fundamentales acerca de los enlaces presentes.

 Ejemplo:

```bash
Enlaces encontrados:
Total:  80
Enlaces únicos:  75
```










## 4. Diagrama de Flujo

El proyecto se ideó inicialmente trazando su curso en un diagrama de flujo, esbozando de manera visual las etapas y secuencias clave que guiarían su desarrollo. Este diagrama proporcionó una hoja de ruta clara al equipo, delineando las interconexiones entre tareas y decisiones cruciales en el proyecto.


![portadaTech](C:\Users\Shanty\Desktop\Laboratoria\mdLinks\DEV007-md-links\images\diagramawhimscal.png)

## 5. Control de calidad y Testeo
El control de calidad se implementó mediante la ejecución de tests, estableciendo una estructura que permitió evaluar de manera sistemática cada componente del proyecto. A través de estos tests, se verificó la funcionalidad y el rendimiento, identificando posibles errores y asegurando que el resultado final cumpliera con los estándares requeridos.

![portadaTech](C:\Users\Shanty\Desktop\Laboratoria\mdLinks\DEV007-md-links\images\testimage1.png)
