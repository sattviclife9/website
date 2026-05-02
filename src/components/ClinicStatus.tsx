import React, { useState, useEffect } from 'react';

export function getClinicStatus() {
  const now = new Date();
  
  // Calculate current time in IST
  const formatterParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).formatToParts(now);

  let tempHour = 0;
  let tempMin = 0;
  let currentDay = '';

  formatterParts.forEach(({ type, value }) => {
    if (type === 'hour') tempHour = parseInt(value, 10);
    if (type === 'minute') tempMin = parseInt(value, 10);
    if (type === 'weekday') currentDay = value;
  });
  
  // if tempHour is 24, fix it to 0
  if (tempHour === 24) tempHour = 0;

  const currentMinutes = tempHour * 60 + tempMin;
  
  type Shift = { open: number, close: number };
  
  // Define schedule in minutes from midnight
  const schedule: Record<string, Shift[]> = {
    Sun: [{ open: 10 * 60, close: 14 * 60 }],
    Mon: [{ open: 10 * 60, close: 14 * 60 }, { open: 17 * 60, close: 20 * 60 + 30 }],
    Tue: [{ open: 10 * 60, close: 14 * 60 }, { open: 17 * 60, close: 20 * 60 + 30 }],
    Wed: [{ open: 10 * 60, close: 14 * 60 }, { open: 17 * 60, close: 20 * 60 + 30 }],
    Thu: [{ open: 10 * 60, close: 14 * 60 }, { open: 17 * 60, close: 20 * 60 + 30 }],
    Fri: [{ open: 10 * 60, close: 14 * 60 }, { open: 17 * 60, close: 20 * 60 + 30 }],
    Sat: [{ open: 10 * 60, close: 14 * 60 }, { open: 17 * 60, close: 20 * 60 + 30 }],
  };

  const todaySchedule = schedule[currentDay] || [];
  
  let isOpen = false;
  let nextTransition: { type: 'open' | 'close', timeMinutes: number, isToday: boolean, dayStr?: string } | null = null;
  
  for (let shift of todaySchedule) {
    if (currentMinutes >= shift.open && currentMinutes < shift.close) {
      isOpen = true;
      nextTransition = { type: 'close', timeMinutes: shift.close, isToday: true };
      break;
    }
  }

  // If closed, find next open time
  if (!isOpen) {
    for (let shift of todaySchedule) {
      if (currentMinutes < shift.open) {
        nextTransition = { type: 'open', timeMinutes: shift.open, isToday: true };
        break;
      }
    }
    
    if (!nextTransition) {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let tomorrowIndex = (daysOfWeek.indexOf(currentDay) + 1) % 7;
      let tomorrowStr = daysOfWeek[tomorrowIndex];
      let firstShiftTomorrow = schedule[tomorrowStr][0];
      nextTransition = { type: 'open', timeMinutes: firstShiftTomorrow.open, isToday: false, dayStr: tomorrowStr };
    }
  }
  
  const formatTime = (totalMins: number) => {
     let h = Math.floor(totalMins / 60);
     let m = totalMins % 60;
     let ampm = h >= 12 ? 'PM' : 'AM';
     h = h % 12;
     if (h === 0) h = 12;
     let minStr = m === 0 ? '' : `:${m.toString().padStart(2, '0')}`;
     return `${h}${minStr} ${ampm}`;
  };

  let statusText = '';
  if (isOpen && nextTransition) {
     statusText = `Closes at ${formatTime(nextTransition.timeMinutes)}`;
  } else if (!isOpen && nextTransition) {
     let dayPrefix = nextTransition.isToday ? 'Opens at ' : `Opens ${nextTransition.dayStr} at `;
     statusText = `${dayPrefix}${formatTime(nextTransition.timeMinutes)}`;
  }

  return { isOpen, statusText };
}

export function ClinicStatus() {
  const [status, setStatus] = useState({ isOpen: false, statusText: '' });

  useEffect(() => {
    // Initial fetch
    setStatus(getClinicStatus());

    // Update every minute to accurately flip open/closed status
    const intervalId = setInterval(() => {
      setStatus(getClinicStatus());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-clinic-ivory/10 rounded-full border border-clinic-gold/20">
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          {status.isOpen ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          )}
        </span>
        <span className={`font-bold ${status.isOpen ? 'text-green-400' : 'text-red-400'}`}>
          {status.isOpen ? "OPEN NOW" : "CLOSED NOW"}
        </span>
      </div>
      {status.statusText && (
        <>
          <span className="text-clinic-gold/50 mx-0.5">•</span>
          <span className="text-clinic-white-off/90 tracking-widest">{status.statusText}</span>
        </>
      )}
    </div>
  );
}
