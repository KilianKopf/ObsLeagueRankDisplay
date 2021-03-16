const LeagueofLegends = require('leagueapiwrapper');
const Fs = require('fs');


const API_KEY = 'RGAPI-c9adf2bc-27be-4707-ad6f-b05d232e01a5'


if(!Fs.existsSync('configuration.txt')){
    Fs.writeFileSync('configuration.txt',
        '{\n' +
        '"summonerName": "your-name",\n' +
        '"region": "euw1",\n' +
        '"interval_sec": "10"\n' +
        '}\n')
    console.log("Write your Summoner Name and Region into the configuration.txt file and start the process again");

}
else {
    console.log("ObsLeagueRankDisplay by Kiko");
    console.log("---");

    let config_file$ = Fs.readFileSync('configuration.txt');
    let config$ = JSON.parse(config_file$.toString());

    let player$ = config$['summonerName'];
    let platform$ = config$['region']
    let interval$ = config$['interval_sec']

    function fnProcess() {
        let League = new LeagueofLegends(API_KEY, platform$);
        League.getSummonerByName(player$).then(function (acc$) {
            League.getLeagueRanking(acc$).then(function (data$) {
                let tier$ = data$[0]['tier'];
                let rank$ = data$[0]['rank'];
                let leaguePoints = data$[0]['leaguePoints'];
                let losses = data$[0]['losses'];
                let wins = data$[0]['wins'];

                let write_data$ = `${tier$} ${rank$} ${leaguePoints}LP (${wins}W/${losses}L)`

                Fs.writeFile('rank.txt', write_data$, function () {
                    console.log("Rank updated")
                })
            })
        })

    }

    fnProcess();
    setInterval(fnProcess, interval$ * 1000);
}

