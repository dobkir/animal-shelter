const forLoop = (count, block) => {
  let accum = ''

  for (let i = 0; i < count; i++) {
    accum += block.fn(i)
    console.log(block[i])
  }

  return accum
}

module.exports = forLoop
