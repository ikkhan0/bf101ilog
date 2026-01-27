import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your-gemini-api-key-here'
    ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    : null;

export async function analyzeProfile(type: 'carrier' | 'shipper', data: any): Promise<string | null> {
    if (!genAI) {
        console.log('Gemini API key not configured, skipping AI analysis');
        return type === 'carrier'
            ? 'Safety profile analysis not available. Please configure Gemini API key.'
            : 'Industry analysis not available. Please configure Gemini API key.';
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        let prompt = '';
        if (type === 'carrier') {
            prompt = `Analyze this motor carrier's profile and provide a brief 2-3 sentence safety and suitability assessment:
      
DOT #: ${data.dotNumber}
MC #: ${data.mcNumber}
Authority Date: ${data.authorityDate}
Company: ${data.legalName}
Location: ${data.city}, ${data.state}
Equipment: ${data.equipmentTypes?.join(', ') || 'Not specified'}

Provide a professional assessment suitable for logistics broker review.`;
        } else {
            prompt = `Analyze this shipper's profile and provide a brief 2-3 sentence industry and business suitability assessment:
      
Company: ${data.legalName}
Location: ${data.city}, ${data.state}
Commodity: ${data.commodityType || 'Not specified'}
Monthly Volume: ${data.monthlyVolume || 'Not specified'}

Provide a professional assessment suitable for logistics broker review.`;
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error analyzing profile with Gemini:', error);
        return null;
    }
}
