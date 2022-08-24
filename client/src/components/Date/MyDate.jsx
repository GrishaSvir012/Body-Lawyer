import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function myDate() {
  const [calendar, setCalendar] = useState('');
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  console.log(calendar);

  const handleSelect = (date) => {
    setCalendar(format(date, 'MM/dd/yyyy'));
    // console.log(date);
  };
  const hideOnClickOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    setCalendar(format(new Date(), 'MM/dd/yyyy'));
    document.addEventListener('click', hideOnClickOutSide, true);
  }, []);

  return (
    <>
      <input
        value={calendar}
        readOnly
        className="inputBox"
        // eslint-disable-next-line no-shadow
        onClick={() => setOpen((open) => !open)}
      />
      <div ref={refOne}>
        {open
      && (
      <Calendar
        date={new Date()}
        onChange={handleSelect}
        className="calendarElement"
      />
      )}
      </div>
    </>
  );
}
