import { NextResponse } from 'next/server';
import { join } from 'path';
import { readFileSync } from 'fs';
import { outputFile } from 'fs-extra/esm';

const filePath = join(process.cwd(), 'data', 'submissions.json');

export async function POST(req) {
    try {
        const formData = await req.formData();

        let data = {};

        for (let [key, prop] of formData) {
            data[key] = prop;
        }

        let existingData = [];
        try {
            const fileContent = readFileSync(filePath, 'utf8');
            existingData = fileContent ? JSON.parse(fileContent) : [];
        } catch (error) {
            // ionit with an empty array
        }
        existingData.push(data);

        const updatedData = JSON.stringify(existingData, null, 2);

        await outputFile(filePath, updatedData);

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error processing request', error: error.message }, { status: 500 });
    }
}
