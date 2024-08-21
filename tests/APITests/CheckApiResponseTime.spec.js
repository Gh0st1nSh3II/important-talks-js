const axios = require('axios');

async function checkApiResponseTime(url) {
    const start = Date.now();
    try {
        await axios.get(url);
        const duration = Date.now() - start;
        console.log(`API response time for ${url}: ${duration} ms`);
    } catch (error) {
        console.error(`Error accessing ${url}:`, error.message);
    }
}

const myUrls = ["https://www.zalando.pl/",
    "https://www.zalando.pl/faq/",
    "https://www.zalando.pl/mezczyzni-home/",
    "https://www.zalando.pl/zalando-dane-firmy/",
    "https://www.zalando.pl/zalando-terms",
    "https://www.zalando.pl/karty-upominkowe/",
    "https://www.zalando-lounge.pl/",
    "https://www.zalando.pl/zalando-privacy-policy/"
];

myUrls.forEach((url) => {
    return checkApiResponseTime(url)
})

