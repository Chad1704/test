// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random player with a unique ID and team ID
function generateRandomPlayer(playerId, teamId) {
    const positions = ['PG', 'SG', 'C', 'SF', 'PF'];
    const firstNames = ['Chad', 'Michael','Chris','James', 'John', 'Robert', 'David', 'William', 'Daniel', 'Joseph', 'Richard', 'Thomas', 'Charles',
    'Matthew', 'Christopher', 'George', 'Steven', 'Edward', 'Brian', 'Ronald', 'Timothy', 'Jason', 'Jeffrey',
    'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Stephen', 'Jonathan', 'Larry', 'Justin', 'Scott',
    'Brandon', 'Benjamin', 'Samuel', 'Jeremy', 'Patrick', 'Carlos', 'Terry', 'Sean', 'Keith', 'Albert',
    'Lawrence', 'Alexander', 'Kevin', 'Philip', 'Bryan', 'Randy', 'Frank', 'Howard', 'Eugene', 'Curtis'];
    const lastNames = ['Katz','Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
    'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
    'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts' ];


    const position = positions[Math.floor(Math.random() * positions.length)]; // Randomly select position

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]; //make a random name
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const playerName = firstName + ' ' + lastName;


    //shooting stats
    const threePointSkill = getRandomNumber(50, 99);
    const midRangePointSkill = getRandomNumber(50, 99);
    const NearPointSkill = getRandomNumber(50, 99);

    //defense stats
    const ReboundingSkill  = getRandomNumber(50, 99);
    const SpeedSkill = getRandomNumber(50, 99);
    const StealSkill = getRandomNumber(50, 99);
    const BlockSkill = getRandomNumber(50, 99);
    
    //playmaking stats
    const visionSkill = getRandomNumber(40, 90);
    const ballHandlingSkill = getRandomNumber(40, 90);
    const passingSkill = getRandomNumber(40, 90);

    const shootingSkill = Math.floor((threePointSkill + midRangePointSkill + NearPointSkill) / 2.90)
    const playmakingSkill = Math.floor((visionSkill + ballHandlingSkill + passingSkill) / 2.90)
    const defenseSkill = Math.floor((ReboundingSkill + SpeedSkill + StealSkill + BlockSkill) / 3.90)

    const player = { // Player Data
        id: playerId, // Id
        name: playerName, // Name
        position: position, // Position
        teamId: teamId, // Team ID


        shooting: shootingSkill, // Overall Shooting
        ThreePoint: threePointSkill, // 3pt
        MidRange: midRangePointSkill, // Middy
        Finishing: NearPointSkill, // Layups and dunks

        vision: visionSkill,
        ballhandling:ballHandlingSkill,
        passing: passingSkill,
        playmaking:playmakingSkill,

        defense: defenseSkill,
        steal: StealSkill,
        block: BlockSkill,
        speed: SpeedSkill,
        Rebounding: ReboundingSkill,

        PPG: 0,
        APG: 0,
        RPG: 0,
        



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
    let teamId = 0; // Initialize teamId
    for (let i = 0; i < 360; i++) {
        const playerId = 'player_' + i;
        const player = generateRandomPlayer(playerId, ('team_'+(teamId+1))); // Pass the current teamId
        localStorage.setItem(playerId, JSON.stringify(player)); // Store player data in local storage
        if ((i + 1) % 12 === 0) { // Check if 12 players have been generated for the current team
            teamId++; // Increment teamId for the next group of players
        }
    }
}
