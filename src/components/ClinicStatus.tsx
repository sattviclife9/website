import React, { useState, useEffect } from "react";

export function getClinicStatus() {
  const now = new Date();

  // Calculate current time in IST
  const formatterParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);

  let tempHour = 0;
  let tempMin = 0;
  let currentDay = "";

  formatterParts.forEach(({ type, value }) => {
    if (type === "hour") tempHour = parseInt(value, 10);
    if (type === "minute") tempMin = parseInt(value, 10);
    if (type === "weekday") currentDay = value;
  });

  // if tempHour is 24, fix it to 0
  if (tempHour === 24) tempHour = 0;

  const currentMinutes = tempHour * 60 + tempMin;

  type Shift = { open: number; close: number };

  // Define schedule in minutes from midnight
  const schedule: Record<string, Shift[]> = {
    Sun: [{ open: 10 * 60, close: 14 * 60 }],
    Mon: [
      { open: 10 * 60, close: 14 * 60 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
    Tue: [
      { open: 10 * 60, close: 14 * 60 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
    Wed: [
      { open: 10 * 60, close: 14 * 60 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
    Thu: [
      { open: 10 * 60, close: 14 * 60 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
    Fri: [
      { open: 10 * 60, close: 14 * 60 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
    Sat: [
      { open: 10 * 60, close: 14 * 60 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
  };

  const todaySchedule = schedule[currentDay] || [];

  let isOpen = false;
  let nextTransition: {
    type: "open" | "close";
    timeMinutes: number;
    isToday: boolean;
    dayStr?: string;
  } | null = null;
  let upcomingTransition: {
    type: "open";
    timeMinutes: number;
    isToday: boolean;
    dayStr?: string;
  } | null = null;

  for (let i = 0; i < todaySchedule.length; i++) {
    const shift = todaySchedule[i];
    if (currentMinutes >= shift.open && currentMinutes < shift.close) {
      isOpen = true;
      nextTransition = {
        type: "close",
        timeMinutes: shift.close,
        isToday: true,
      };

      // Look for the next open shift (either later today or tomorrow)
      if (i < todaySchedule.length - 1) {
        upcomingTransition = {
          type: "open",
          timeMinutes: todaySchedule[i + 1].open,
          isToday: true,
        };
      } else {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let tomorrowIndex = (daysOfWeek.indexOf(currentDay) + 1) % 7;
        let tomorrowStr = daysOfWeek[tomorrowIndex];
        let firstShiftTomorrow = schedule[tomorrowStr][0];
        upcomingTransition = {
          type: "open",
          timeMinutes: firstShiftTomorrow.open,
          isToday: false,
          dayStr: tomorrowStr,
        };
      }
      break;
    }
  }

  // If closed, find next open time
  if (!isOpen) {
    for (let shift of todaySchedule) {
      if (currentMinutes < shift.open) {
        nextTransition = {
          type: "open",
          timeMinutes: shift.open,
          isToday: true,
        };
        break;
      }
    }

    if (!nextTransition) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let tomorrowIndex = (daysOfWeek.indexOf(currentDay) + 1) % 7;
      let tomorrowStr = daysOfWeek[tomorrowIndex];
      let firstShiftTomorrow = schedule[tomorrowStr][0];
      nextTransition = {
        type: "open",
        timeMinutes: firstShiftTomorrow.open,
        isToday: false,
        dayStr: tomorrowStr,
      };
    }
  }

  const formatTime = (totalMins: number) => {
    let h = Math.floor(totalMins / 60);
    let m = totalMins % 60;
    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    if (h === 0) h = 12;
    let minStr = m === 0 ? "" : `:${m.toString().padStart(2, "0")}`;
    return `${h}${minStr} ${ampm}`;
  };

  let statusText1 = "";
  let statusText2 = "";
  if (isOpen && nextTransition) {
    statusText1 = `Available until ${formatTime(nextTransition.timeMinutes)}`;
    if (upcomingTransition) {
      let upcomingPrefix = upcomingTransition.isToday
        ? "Available again at "
        : `Available again ${upcomingTransition.dayStr} at `;
      statusText2 = `${upcomingPrefix}${formatTime(upcomingTransition.timeMinutes)}`;
    }
  } else if (!isOpen && nextTransition) {
    let dayPrefix = nextTransition.isToday
      ? "Next available at "
      : `Next available ${nextTransition.dayStr} at `;
    statusText1 = `${dayPrefix}${formatTime(nextTransition.timeMinutes)}`;
  }

  return { isOpen, statusText1, statusText2 };
}

export function ClinicStatus() {
  const [status, setStatus] = useState({
    isOpen: false,
    statusText1: "",
    statusText2: "",
  });

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
    <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 bg-clinic-ivory/10 rounded-full border border-clinic-gold/20">
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="relative flex h-2 w-2">
          {status.isOpen ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          )}
        </span>
        <span
          className={`font-bold leading-tight uppercase ${status.isOpen ? "text-green-400" : "text-amber-400"}`}
        >
          <span className="hidden sm:inline-block">
            {status.isOpen ? "DOCTOR AVAILABLE" : "DOCTOR UNAVAILABLE"}
          </span>
          <span className="sm:hidden flex flex-col text-[10px]">
            <span>DOCTOR</span>
            <span>{status.isOpen ? "AVAILABLE" : "UNAVAILABLE"}</span>
          </span>
        </span>
      </div>

      {(status.statusText1 || status.statusText2) && (
        <>
          <span className="text-clinic-gold/50 hidden sm:inline-block">•</span>
          <span className="w-px h-6 bg-clinic-gold/20 sm:hidden"></span>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-[9px] sm:text-xs">
            {status.statusText1 && (
              <span className="text-clinic-white-off/90 tracking-wide whitespace-nowrap uppercase">
                {status.statusText1}
              </span>
            )}
            {status.statusText2 && (
              <div className="flex items-center">
                <span className="text-clinic-gold/50 mr-2 hidden sm:inline-block">
                  •
                </span>
                <span className="text-clinic-white-off/90 tracking-wide whitespace-nowrap uppercase">
                  {status.statusText2}
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
