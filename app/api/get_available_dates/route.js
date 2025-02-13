import { NextResponse } from 'next/server';

export async function GET() {

  // Generate a list of 10 days in the MM/DD/YYYY format.
  const initializeTimes = () => {
    let dates = [];
    for (let i = 1; i <= 10; i++) {
      // Calculate date i days forward using 24 hours per day.
      const daysForward = 24 * i;
      const date = new Date(new Date().getTime() + daysForward * 60 * 60 * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      dates.push(`${month}/${day}/${year}`);
    }
    return dates;
  };

  const dates = initializeTimes();

  return NextResponse.json({
    dates
  });
}
