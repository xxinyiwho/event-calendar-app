/**
 * Events
 */

import moment from 'moment'
import Event from '../events/Event'

const Events = [
  // {
  //   allDay: true,
  //   color: 'green',
  //   title: { event.title }
  //   date: moment()
  //     .date(2)
  //     .format('YYYY-MM-DD'),
  //   description: { event.description },
  // },
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
export default Events
// export const AvailableViews = [
//   'dayGridMonth',
//   'dayGridWeek',
//   'dayGridDay',
//   'dayGrid',
//   'timeGridWeek',
//   'timeGridDay',
//   'timeGrid'
//   // 'listYear','listMonth','listWeek','listDay','list',
//   // 'timelineYear', 'timelineMonth', 'timelineWeek', 'timelineDay', 'timeline'
// ]
