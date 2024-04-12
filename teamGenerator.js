function generateTeams() {
    teams.forEach((team, index) => {
        const startIndex = index * 12; // Calculate the starting index for players of this team
        for (let i = startIndex; i < startIndex + 12; i++) {
            const playerId = 'player_' + i;
            const player = JSON.parse(localStorage.getItem(playerId));
            if (player && player.teamId === team.id) {
                team.players.push(player);
            }
        }
        // Assign the team name from the array based on the team's index
        team.name = teamNames[index];
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
