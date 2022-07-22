export function formatTimer(time: number): string {
  const roundedTime = Math.round(time)
  const hours = Math.floor(roundedTime / 3600)
  const minutes = Math.floor(roundedTime / 60) % 60
  const seconds = roundedTime % 60
  
  let formattedTime = ''
  if(hours > 0) formattedTime += `${hours}:`
  formattedTime += `${minutes}:${('0' + seconds).slice(-2)}`

  return formattedTime
}