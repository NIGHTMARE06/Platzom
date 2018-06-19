# Platzom
Platzom is a fake language to the [Platzi Javascript course](https://platzi.com/js)

## Description of the language
- if it ends with AR the AR is removed
- if it starts with Z, PE is added at the end
- if you have more than ten characters you put one - in the middle
- if it is a palindrome, no rule is applied and capitals are interspersed

## Instalation
```
npm i platzom
```

## How to use
```
import platzom from 'platzom'

platzom('Programar') // Program
platzom('Zorro') // Zorrope
platzom('Abecedario') // abece-dario
platzom('Sometemos') // SoMeTeMoS
```

## Credits
- [Alan Santiago](https://github.com/NIGHTMARE06)

## License
[MIT](https://opensource.org/licenses/MIT)
