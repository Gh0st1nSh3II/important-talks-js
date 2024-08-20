const axios = require('axios');
const {test, expect} = require("@playwright/test");



const urls = [
    'https://www.zalando.pl/obuwie-meskie/',
    'https://www.zalando.pl/mezczyzni-promocja/',
    'https://www.zalando.pl/dzieci-home/'
];
test.describe('API Tests', () => {
    test('Simple speed test', async () => {
        await measureResponseTime(urls);
    });
});

async function measureResponseTime(url) {
    const startTime = Date.now();
    try {
        const response = await axios.get(url);
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        console.log(`Response time: ${responseTime} ms`);
        return response.data;
    } catch (error) {
        console.error('Error in execute moment:', error);
    }
}



