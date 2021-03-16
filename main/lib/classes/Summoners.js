const Api = require('./Api');


class Summoners extends Api{

    constructor(endpoint) {
        super(endpoint);
    }

    test = function (){
        this.sendRequest();
    }



}

module.exports = Summoners
