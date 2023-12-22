import React from 'react'

export default function useFormatDate(date, type) {
  const inputDate = new Date(date);

  if (type === 'numbers') {
    // Options for formatting the date with numbers
    const options = {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    };
    // Format the date using the options
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate);
    return formattedDate;
  } else if (type === 'with-month') {
    // Options for formatting the date with month
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    // Format the date using the options
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    return formattedDate;
  } else if (type === 'time') {
    // Format the time in 12-hour format with AM/PM
    const hours = inputDate.getHours() % 12 || 12; // Handle midnight (0) as 12 AM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${inputDate.getMinutes().toString().padStart(2, '0')} ${inputDate.getHours() >= 12 ? 'PM' : 'AM'}`;
    console.log(formattedTime)
    return formattedTime;
  }
}
