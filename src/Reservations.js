import React, {useState} from 'react';




function Reservations () {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [availableTimes] = useState([
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);


  return (
    <>
      <h1>Reserve a Table</h1>
      <form method='POST'>
      <div>
          <label htmlFor='First-name'>First Name</label>
          <input
            type='text'
            id='First-name'
            className='First-name'
            name='First-name'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor='Last-Name'>Last Name</label>
          <input
            type='text'
            id='Last-name'
            className='Last-name'
            name='Last-name'
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="Res-date">Choose date</label>
          <input
            type='date'
            id='Res-date'
            className='Res-date'
            name='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Res-time">Choose time</label>
          <select
            type='time'
            id='Res-time'
            className='Res-time'
            name='Time'
            value={time}
            onChange={(e) => setTime(e.target.value)}>
             <option value="">Select a time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="Guests">Number of guests</label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='Guests'
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="Occasion">Occasion</label>
          <select
            id='Occasion'
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Make Your reservation"/>
        </div>
      </form>
    </>
  )
}

export default Reservations;