import { NextResponse } from 'next/server';
import { join } from 'path';
import { readFileSync } from 'fs';
import { outputFile } from 'fs-extra/esm';

const filePath = join(process.cwd(), 'data', 'submissions.json');

export async function POST(req) {

    const appendNewBooking = (data) => {
        let existingData = [];
        try {
            const fileContent = readFileSync(filePath, 'utf8');
            existingData = fileContent ? JSON.parse(fileContent) : [];
        } catch (error) {
            console.log(error);
            return error;
        }
        existingData.push(data);
        return existingData;
    };

    try {
        const formData = await req.formData();

        // Iterate through the inputed form data
        let data = {};
        for (let [key, prop] of formData) {
            data[key] = prop;
        }

        const updatedBookingFile = appendNewBooking(data);

        const updatedData = JSON.stringify(updatedBookingFile, null, 2);

        await outputFile(filePath, updatedData);

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error processing form submission request', error: error.message }, { status: 500 });
    }
}
