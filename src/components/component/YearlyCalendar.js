import React from 'react';

function YearlyCalendar({ year }) {
  const months = [...Array(12).keys()];
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <table>
      <tbody>
        {months.map(month => (
          <React.Fragment key={month}>
            <tr>
              <td colSpan="7">{new Date(year, month).toLocaleString('default', { month: 'long' })}</td>
            </tr>
            <tr>
              {daysOfWeek.map(day => (
                <td key={day}>{day}</td>
              ))}
            </tr>
            {(() => {
              const firstDayOfMonth = new Date(year, month).getDay();
              const daysInMonth = new Date(year, month + 1, 0).getDate();
              let dayOfMonth = 1;
              const weeks = [...Array(6).keys()];
              return weeks.map(week => (
                <tr key={`${month}-${week}`}>
                  {daysOfWeek.map((dayOfWeek, index) => {
                    if (week === 0 && index < firstDayOfMonth) {
                      return <td key={`${month}-${week}-${index}`}></td>;
                    } else if (dayOfMonth > daysInMonth) {
                      return <td key={`${month}-${week}-${index}`}></td>;
                    } else {
                      const day = dayOfMonth;
                      dayOfMonth++;
                      return <td key={`${month}-${week}-${index}`}>{day}</td>;
                    }
                  })}
                </tr>
              ));
            })()}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default YearlyCalendar;