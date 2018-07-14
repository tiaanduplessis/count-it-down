export default function countItDown (date, onUpdate = () => {}) {
  const countdownDate = date instanceof Date ? date.getTime() : (new Date(date)).getTime()

  const riq = window.requestIdleCallback || (cb => setTimeout(cb, 0))

  function handle () {
    return riq(() => {
      // Based on https://www.w3schools.com/howto/howto_js_countdown.asp
      const now = new Date().getTime()

      const distance = countdownDate - now

      onUpdate({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    })
  }

  return window.setInterval(handle, 1000)
}
