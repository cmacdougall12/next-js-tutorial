import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  console.log('date input function =',dateString)
  const date = parseISO(dateString)
  console.log('date output function =',date)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}