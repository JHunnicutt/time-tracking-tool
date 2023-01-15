const timeToDecimal = (time) => {
    time = time.split(':')
    const convertedArr = time.map(el => parseInt(el))
    const minutes = (convertedArr[1]/6) * 10
    const convertedTime = parseFloat(`${convertedArr[0]}.${minutes<10 ? '0' : ''}${minutes}`)
    return convertedTime
}

export default timeToDecimal