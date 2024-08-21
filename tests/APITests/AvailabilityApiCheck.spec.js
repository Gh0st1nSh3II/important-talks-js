const axios = require('axios');

async function checkApiStatus(url) {
    try {
        const fishkiGnilushkiResponceMustHave200Code = await axios.get(url);
        console.log(`Status Code for ${url}: ${fishkiGnilushkiResponceMustHave200Code.status}`);
        if (fishkiGnilushkiResponceMustHave200Code.status === 200) {
            console.log('API is accessible. Status text: ' + fishkiGnilushkiResponceMustHave200Code.statusText);
        } else {
            console.log('API returned a non-200 status code.');
        }
    } catch (error) {
        console.error(`CODE RED CODE RED CODE RED PIDOOOO PIDOOO PIDOOOOO ${url}:`, error.message);
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
    return checkApiStatus(url)
})

