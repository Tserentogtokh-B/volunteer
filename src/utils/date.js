export function formatShortDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Тодорхойгүй'
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

export function formatLongDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Тодорхойгүй'
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year} оны ${month} сарын ${day}`
}

export function daysUntil(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  const today = new Date()
  const diff = date.getTime() - today.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}
