import axios from 'axios';

const conversion = async (jsonString) => {
    const response = await axios.get('/api/verify-conversion');
    const body = await response;
    return body;
};

export default conversion;