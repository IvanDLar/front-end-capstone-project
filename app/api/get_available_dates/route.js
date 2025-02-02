// Import NextResponse from 'next/server' to create responses
import { NextResponse } from 'next/server';

export async function GET() {
  // Define your helper functions here

  const initializeTimes = () => {
    let displayDates = [];
    let fullDateInfo = [];
    for (let i = 1; i <= 10; i++) {
      // Calculate date i days forward using 24 hours per day.
      const daysForward = 24 * i;
      const date = new Date(new Date().getTime() + daysForward * 60 * 60 * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      displayDates.push(`${day}/${month}/${year}`);
      fullDateInfo.push(date);
    }
    console.log(displayDates)
    return [displayDates, fullDateInfo];
  };

  // Additional functions (if needed)
  const seededRandom = function (seed) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  // Execute initializeTimes
  const [displayDates, fullDateInfo] = initializeTimes();
  // Convert Date objects to ISO strings for easier client consumption
  const fullDateInfoISO = fullDateInfo.map(date => date.toISOString());

  // Return the JSON response
  return NextResponse.json({
    displayDates,
    fullDateInfo: fullDateInfoISO,
  });
}
