import { NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data.name || !data.email || !data.pickup || !data.delivery) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const result = await sendQuoteRequestEmail(data);

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Quote request sent successfully' });
        } else {
            return NextResponse.json(
                { success: false, error: 'Failed to send email' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Quote submission error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
