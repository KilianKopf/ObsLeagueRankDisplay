const request = require('request');


class Api {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    sendRequest(){
        let url$ = this.endpoint + `/lol/summoner/v4/summoners/by-name/SectionHD?api_key=RGAPI-c9adf2bc-27be-4707-ad6f-b05d232e01a5`;
        request
            .get(url$).on('response', function (var1, va2, va3){
            console.log(var1);
        })

    }

}

module.exports = Api