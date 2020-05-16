
import axios from 'axios';

const conversion = async (jsonString) => {
    const response = await fetch('/api/verify-conversion', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: jsonString
    });

    const body = await response.json();
    return body;
}

export default conversion;
