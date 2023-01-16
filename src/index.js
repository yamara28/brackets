module.exports = function check(str, bracketsConfig) {

  const isOpenedBracket = (str) => {
    return bracketsConfig.some(ar => ar[0].includes(str))
  }

  const isClosedBracket = (str) => {
    return bracketsConfig.some(ar => ar[1].includes(str))
  }

  const isSameBrackets = (bracket1, bracket2) => {
    return bracket1 === bracket2
  }

  const stack = [];

  const array = Array.from(str);

  for (let i = 0; i < array.length; i++) {
    if (isOpenedBracket(array[i]) && !isClosedBracket(array[i])) {
      stack.push(array[i])
    }
    else
      if (isClosedBracket(array[i])) {
        stack.push(array[i])

        const getOpenedBracket = bracketsConfig.find(ar => ar[1].includes(array[i]))[0]
        if (isSameBrackets(getOpenedBracket, stack[stack.length - 2])) { //-2 because closed bracket is added in stack
          stack.pop(array[i])
          stack.pop(array[i - 1])
        }
      }
  }

  if (stack.length === 0) {
    return true
  } else return false
}
