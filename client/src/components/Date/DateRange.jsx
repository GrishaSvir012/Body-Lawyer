import React, { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';

export default function MyDateRange() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  console.log(range);

  const hideOnClickOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutSide, true);
  }, []);

  return (
    <>
      <input
        value={`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
        readOnly
        className="inputBox"
        // eslint-disable-next-line no-shadow
        onClick={() => setOpen((open) => !open)}
      />
      <div ref={refOne}>
        {open
      && (
        <DateRange
          onChange={(item) => setRange([item.selection])}
          editableDateInputs
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="horizontal"
          className="calendarElement"
        />
      )}
      </div>
    </>
  );
}
