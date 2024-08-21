const axios = require('axios');

async function apiMethodsCorrectWorkTest(url) {
    try {
        // Test GET request
        const getResponse = await axios.get(url);
        console.log('GET Response:', getResponse.data);

        // Test POST request
        const postResponse = await axios.post(url, { name: 'New Product' });
        console.log('POST Response:', postResponse.data);

        // Test PUT request
        const putResponse = await axios.put(`${url}/1`, { name: 'Updated Product' });
        console.log('PUT Response:', putResponse.data);

        // Test DELETE request 401
        const deleteResponse = await axios.delete(`${url}/1`);
        console.log('DELETE Response:', deleteResponse.data);
    } catch (error) {
        console.error(`Error accessing ${url}:`, error.message);
    }
}

apiMethodsCorrectWorkTest('https://www.zalando.pl/');