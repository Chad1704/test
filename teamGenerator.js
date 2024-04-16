const teamNames = [
    "Thunderhawks", "Avalanche", "Renegades", "Titans", "Hurricanes",
    "Wildcats", "Dragons", "Mavericks", "Guardians", "Storm",
    "Blazers", "Wolverines", "Cyclones", "Patriots", "Bandits",
    "Lightning", "Heatwave", "Scorpions", "Hawks", "Sharks",
    "Tigers", "Falcons", "Bears", "Lions", "Wolves",
    "Panthers", "Rebels", "Raiders", "Spartans", "Eagles"
];

var teams = Array.from({ length: 30 }, (_, i) => ({ 
    id: 'team_'+(i+1), 
    name: teamNames[i], 
    players: [],
    league: 'NBA',
    beganYear: 0,
    untilYear: 2024,
    yearsLasted: 0,
    gamesPlayed: 0,
    winloss: parseFloat(this.wins-this.gamesPlayed),
    playoffs: 0,
    divisionals: 0,
    conferences: 0,
    championships: 0,
    wins: 0,
    lost: 0,}));

function generateTeams() {

    teams.forEach((team, index) => {

        const startIndex = index * 12; // Calculate the starting index for players of this team
        if (team.beganYear == 0) {
            for (let i = startIndex; i < startIndex + 12; i++) {
                currentTeam = JSON.parse(localStorage.getItem("team_")+(index+1));
                team.beganYear = getRandomNumber(1946,1990);
                team.yearsLasted = (this.untilYear-this.beganYear);
                team.gamesPlayed = (this.wins + this.lost);
                team.playoffs = (getRandomNumber(10,30));
                team.divisionals = (getRandomNumber(5,15));
                team.conferences = (getRandomNumber(5,15));
                team.championships = (getRandomNumber(5,10));
                team.wins = (getRandomNumber(50, 99));
                team.lost = (getRandomNumber(50, 99));
                const playerId = 'player_' + i;
                const player = JSON.parse(localStorage.getItem(playerId));
                if (player && player.teamId === team.id) {
                    team.players.push(player);
                }
            }
        }
        localStorage.setItem(team.id, JSON.stringify(team));
        localStorage.setItem("teams", JSON.stringify(teams));
    });
}

// Function to regenerate teams
function regenerateTeams() {
    if (localStorage.getItem('teams')) {
        alert('Teams already exist. Please refresh the page to regenerate.');
        return;
    }

    const teams = Array.from({ length: 30 }, (_, i) => generateRandomTeam(i)); // Generate 30 teams

    localStorage.setItem('teams', JSON.stringify(teams)); // Store team data in local storage
}
