import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Define the path to the JSON file
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found." }, { status: 404 });
    }

    // Read the file contents
    const fileData = fs.readFileSync(filePath, 'utf8');

    // Parse JSON data
    const bookings = JSON.parse(fileData);

    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Error reading booking data." }, { status: 500 });
  }
}
