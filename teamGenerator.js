// Function to generate a random team with players
function generateRandomTeam(teamId) {
    const teamName = "Team " + (teamId + 1);
    const players = [];

    // Generate 12 players for each team
    for (let i = 0; i < 12; i++) {
        const playerId = 'player_' + (teamId * 12 + i);
        const player = generateRandomPlayer(playerId, teamId); // Use the existing player generation function
        players.push(player);
    }

    const team = {
        id: teamId + 1,
        name: teamName,
        players: players
    };

    return team;
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
