import { NextResponse } from 'next/server';

// Generate a dummy list of "available times" for booking a table.
export async function GET(req) {
    const url = new URL(req.url);
    const date = url.searchParams.get('date');

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
        for (let i = 13; i <= 23; i++) {
        if (random() < 0.5) {
            let addRandomly = Math.random();
            if (addRandomly < 0.5) result.push(i + ':00');
        }
        if (random() < 0.5) {
            let addRandomly = Math.random();
            if (addRandomly < 0.5) result.push(i + ':30');
        }
        }
        return result;
    };

    const dateObject = new Date(date.trim());
    const availableTimes = fetchAPI(dateObject);

    return NextResponse.json({
        availableTimes
    });
}