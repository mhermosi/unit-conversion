
const conversion = (jsonString) => {
    return fetch('/api/verify-conversion', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: jsonString
    }).then((res) => res.json())
    .catch((error) => {console.log('Api call error: ', error)});
};

export default conversion;