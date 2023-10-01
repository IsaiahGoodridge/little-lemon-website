import React, {useState} from 'react';




const BookingForm  = (props) => {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e)
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }


  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <fieldset className='formField'>
            <div>
              <label htmlFor='First-name'>First Name: </label>
              <input
                type='text'
                id='First-name'
                className='First-name field'
                name='First-name'
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                />
            </div>
            <div>
              <label htmlFor='Last-Name'>Last Name: </label>
              <input
                type='text'
                id='last-name'
                className='last-name field'
                name='last-name'
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                />
            </div>
            <div>
              <label htmlFor="res-date">Choose a Date: </label>
              <input
                type='date'
                id='res-date'
                className='res-date field'
                name='res-date'
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="res-time">Choose a Time: </label>
              <select
                type='time'
                id='res-time'
                className='res-time field'
                name='time'
                value={time}
                onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select a time</option>
                {props.availableTimes && props.availableTimes.availableTimes ? (
                  props.availableTimes.availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                  ))
                ) : (
                  <option value="">No available times</option>
                )}
              </select>
            </div>
            <div>
              <label htmlFor="guests">Number of Guests: </label>
                <input
                  id='guests'
                  name='guests'
                  className='guests field'
                  min='1'
                  max='10'
                  placeholder='0'
                  value={guests}
                  onChange={(e) => {setGuests(e.target.value)}}
                  type='number'
                  required
                >
                </input>
            </div>
            <div>
              <label htmlFor="occasion">Occasion:</label>
                <select 
                  id="occasion" 
                  name='occasion'
                  className='occasion field'
                  key={occasion}
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
                </select>
              </div>
              <div className= "btnReceive">
                <input className='btn res-btn' aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>
      </header>
    </>
  )
}

export default BookingForm;