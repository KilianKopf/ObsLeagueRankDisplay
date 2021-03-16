
// const ChampionMastery = require('./classes/Mastery')
// const Champions = require('./classes/Champions')
// const Games = require('./classes/Games')
// const Matches = require('./classes/Matches')
// const Stats = require('./classes/Stats')
const Summoners = require('./classes/Summoners')

class RiotApi{


    constructor(api_key, region) {
        this.api_key = api_key;
        this.region = region
        this.endpoint = `https://${this.region}.api.riotgames.com/`;
        // this.Mastery = new ChampionMastery();
        // this.Champions = new ChampionMastery();
        // this.Games = new ChampionMastery();
        // this.Matches = new ChampionMastery();
        // this.Stats = new ChampionMastery();
        this.Summoners = new Summoners(this.endpoint);
    }
}

module.exports = RiotApi