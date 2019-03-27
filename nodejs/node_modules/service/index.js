const axios = require('axios');
const url = 'https://6ny7ze91yk.execute-api.us-east-1.amazonaws.com/dev/location';
let response;

exports.getLocationInfo = ()=> async () => {
    try {
        const ret = await axios(url);
        console.log(ret);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                accountInfo:ret.data
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

