import { GET } from "../../app/api/get_available_dates/route"; // Adjust path as needed
import { NextResponse } from "next/server";

describe("API - GET /api/get_available_dates", () => {

  test("returns a JSON response with an array of 10 dates", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response).toBeInstanceOf(NextResponse);
    expect(Array.isArray(data.dates)).toBe(true);
    expect(data.dates.length).toBe(10);
  });

  test("returns correctly formatted dates (DD/MM/YYYY)", async () => {
    const response = await GET();
    const data = await response.json();

    data.dates.forEach(date => {
      expect(date).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}$/); // Format check
    });
  });

});
