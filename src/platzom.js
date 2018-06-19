export default function platzom(text) {
  let completeTr = ''

  for (str of text.toLowerCase().split(' ')) {
    let tr = str

    tr = isPal(str)
    tr = endsWith(tr, 'ar')
    tr = startsWith(tr, 'z')
    tr = moreThan(tr, 10)

    completeTr += tr + ' '
  }

  return completeTr
}


// Primera regla: si termina con AR se le quita el AR
function endsWith(str, end) {
  let tr = str

  if (str.toLowerCase().endsWith(end)) {
    tr = str.slice(0, -2)
  }

  return tr
}

// Segunda regla: si empieza con Z se le agrega PE al final
function startsWith(str, start) {
  let tr = str

  if (tr.toLowerCase().startsWith(start)) {
    tr = str + 'pe'
  }

  return tr
}

// Tercer regla: si tiene mas de diez caracteres se pone un - en medio
function moreThan(str, n) {
  let tr = str
  let length = str.length

  if (length >= n) {
    let first = tr.slice(0, Math.round(length / 2))
    let second = tr.slice(Math.round(length / 2))

    tr = first + '-' + second
  }

  return tr
}

// Cuarta regla: si es un palindromo no se aplica ninguna regla y se intercalan las mayusculas
function isPal(str) {
  let array = str.split('')
  let pal = array.reverse().join('')
  let tr = str

  if (pal == str) {
    tr = ''

    for (let i = 0; i < array.length; i++) {
      tr += i % 2 == 0 ? array[i].toUpperCase() : array[i].toLowerCase()
    }
  }

  return tr
}
