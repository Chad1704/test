// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random player with a unique ID
function generateRandomPlayer(playerId) {
    const positions = ['PG', 'SG', 'C', 'SF','PF'];
    const playerName = 'Player ' + playerId.split('_')[1]; // Extract numeric part from player ID
    const position = positions[Math.floor(Math.random() * positions.length)]; // Randomly select position
    
    const threePointSkill = getRandomNumber(50, 99);
    const midRangePointSkill = getRandomNumber(50, 99);
    const NearPointSkill = getRandomNumber(50, 99);
    
    
    const shootingSkill = Math.floor((threePointSkill + midRangePointSkill + NearPointSkill) / 2.75)
    const passingSkill = getRandomNumber(40, 90);
    const defenseSkill = getRandomNumber(30, 95);

    const player = { //Player Data

        id: playerId, //Id
        name: playerName, //name
        position: position,//Position



        shooting: shootingSkill, //Overall Shooting

        ThreePoint: threePointSkill, //3pt
        MidRange: midRangePointSkill, //middy
        Finishing: NearPointSkill, //layups and dunks


        passing: passingSkill,
        defense: defenseSkill,
        overall: Math.floor((shootingSkill + passingSkill + defenseSkill) / 2.75)
    };

    return player;
}

// Function to regenerate players
function regeneratePlayers() {
    if (Object.keys(localStorage).filter(key => key.startsWith('player_')).length > 0) {
        alert('Players already exist. Please refresh the page to regenerate.');
        return;
    }
    for (let i = 0; i < 360; i++) { // Generate 360 players (30 teams * 12 players)
        const playerId = 'player_' + i;
        const player = generateRandomPlayer(playerId);
        localStorage.setItem(playerId, JSON.stringify(player)); // Store player data in local storage
    }
}
