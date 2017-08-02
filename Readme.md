#Platzom

Este es un ejemplo de como se pueden generar reglas basicas y condiciones que afecten a un string o cadena de texto. 

Reemplazamos contenido y lo afectamos conforme a como termine o este configurado un detemrinado string.

## Descripción de las reglas

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install platz
```

## Uso

```
import platz from 'platz'

platz("Programar") // Program
platz("Zorro") // Zorrope
platz("Zarpar") // Zarppe
platz("abecedario") // abece-dario
platz("sometemos") // SoMeTeMoS
```

## Créditos
- [Edgardo Tupiño](https://twitter.com/@emtv)

## Licencia

[MIT](https://opensource.org/licenses/MIT)