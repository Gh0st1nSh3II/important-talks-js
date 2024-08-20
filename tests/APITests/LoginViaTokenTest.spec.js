const { test, expect } = require('@playwright/test');
const axios = require('axios');

test.describe('API Tests', () => {


    test('Successful login returns a token', async () => {
        const response = await axios.post('https://demoqa.com/Account/v1/GenerateToken', {
            userName: 'Gh0st1n',
            password: 'nfkPM#j2g$!sRX}'
        });

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('token');
        console.log(response.data.token);
        expect(response.data.token).not.toBeNull();
    });
});