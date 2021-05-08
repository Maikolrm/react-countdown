export const handleCountDown = (date) => {
  const distance = new Date(date).getTime() - new Date().getTime()
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}
