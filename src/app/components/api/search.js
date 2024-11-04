// pages/api/search.js
export default async function handler(req, res) {
    console.log('NEXT_PUBLIC_GOOGLE_API_KEY:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
    console.log('NEXT_PUBLIC_GOOGLE_CX:', process.env.NEXT_PUBLIC_GOOGLE_CX);

    if (req.method === 'GET') {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        const cx = process.env.NEXT_PUBLIC_GOOGLE_CX;

        try {
            const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`);
            
            if (!response.ok) {
                return res.status(response.status).json({ error: 'Error fetching data from Google API' });
            }

            const data = await response.json();
            res.status(200).json({ items: data.items || [] });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Server error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}