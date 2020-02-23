import moment from 'moment'
import Event from '../events/Event'

export const Events = [
  {
    borderColor: 'black',
    color: 'grey',
    daysOfWeek: [2],
    description: 'Recurring event, once per week, all day',
    endRecur: moment()
      .date(30)
      .format('YYYY-MM-DD'),
    startRecur: moment()
      .date(5)
      .format('YYYY-MM-DD'),
    title: 'PPM: Boiler Check'
  },
]
// export default Events

