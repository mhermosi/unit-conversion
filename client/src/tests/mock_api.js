import axios from 'axios';

module.exports = {
    Api: {
        conversion: async (jsonString) => {
            const response = await axios.get('/api/verify-conversion');
            const body = await response;
            return body;
        }
    }
};