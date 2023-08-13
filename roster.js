const rosterContainer = document.getElementById("roster-container");

const wrestlers = [
    { name: "Adam Neils", image: "ADAM NIELS.png", finisher: "Phoenix Twist", role: " Technical High Flyer" },
    { name: "Adam Cole", image: "ADAM COLE.png", finisher: "Super Kick", role: "Technical" },
    { name: "Alan", image: "ALAN.png", finisher: "Hells Gate", role: "Technical" },
    { name: "Albert Cowboy", image: "ALBERT COWBOY.png", finisher: "Cowboy Shit", role: "Brawler" },
    { name: "Alex Nova", image: "ALEX NOVA.png", finisher: " Twist to Fate", role: "Street Fighter" },
    { name: "Ali Mundo", image: "ALI MUNDO.png", finisher: "Ali Arrow", role: "High Flyer" },
   { name: "Anton Apex", image: "ANTON APEX.png", finisher: "Apexbuster", role: "Submission Specialist" },
   { name: "Astrix", image: "ASTRIX.png", finisher: "...", role: "ded" },
   { name: "Beast Lion", image: "BEAST LION.png", finisher: "Lion's Roar Bomb", role: "Powerhouse" },
   { name: "Bhati Linox", image: "BHATI LINOX.png", finisher: "...", role: "ded" },
   { name: "Biggz", image: "BIGGZ.png", finisher: "Powerbomb", role: "Powerhouse" },
   { name: "Broken Mechanic", image: "BROKEN MECHANIC.png", finisher: "Spear", role: "Powerhouse" },
   { name: "Bruce Lee", image: "BRUCE LEE.png", finisher: "One Inch Punch", role: "Jeet Kun Do" },
{ name: "Cactus", image: "CACTUS.png", finisher: "Spike Piledriver", role: "Hardcore" },
{ name: "Cage", image: "CAGE.png", finisher: "Weapon X", role: "Powerhouse" },
{ name: "Carlos Overa", image: "CARLOS OVERA.png", finisher: "Biohazard Blitz", role: "MMA" },
{ name: "Chris Diaz", image: "CHRIS DIAZ.png", finisher: "Titanic Impact", role: "Powerhouse" },
{ name: "Chris Fakude", image: "CHRIS FAKUDE.png", finisher: "Shadow Strike", role: "MMA" },
{ name: "Chris Hero", image: "CHRIS HERO.png", finisher: "Rolling Elboe", role: "Hard Hitting Striker" },
{ name: "Craig Crofield", image: "CRAIG CROFIELD.png", finisher: "Hammer Fist", role: " Master of Fists" },
{ name: "Toofan", image: "DA BABY.png", finisher: "SOS", role: "Powerhouse" },
{ name: "Damn Armstrong", image: "DAMN ARMSTRONG.png", finisher: "Death Drop", role: "ded" },
{ name: "Dangar", image: "DANGAR.png", finisher: "Drift Away", role: "Technical Powerhouse " },
{ name: "Dantes Bauer", image: "DANTES BAUER.png", finisher: "Iron Fist", role: " Martial Artist " },
{ name: "Darby Black", image: "DARBY BLACK.png", finisher: "...", role: " ded " },
{ name: "Darex", image: "DAREX.png", finisher: "Flying Forearm Strike", role: "Pure Wrestler " },
{ name: "Dario", image: "DARIO SHINMAS.png", finisher: "Fist of the Nortstar", role: "Karate" },
{ name: "Dark Danger", image: "DARK DANGER.png", finisher: "...", role: "ded" },
{ name: "Deago Martix", image: "DEAGO MATRIX.png", finisher: "Punt Kick", role: "Futatsu" },
{ name: "DeanSNR", image: "DEAN SNR.png", finisher: "...", role: "ded" },
{ name: "Death Kahn", image: "DEATH KAHN.png", finisher: "Powerslam", role: "Powerhouse" },
{ name: "Deepest", image: "DEEPSET.png", finisher: "Bicycle kick", role: "Kick Boxer" },
{ name: "Demon X", image: "DEMON X.png", finisher: "...", role: "ded" },
{ name: "Devil King", image: "DEVIL KING.png", finisher: "...", role: "ded" },
{ name: "Dragon Lord", image: "DRAGON LORD.png", finisher: "Spear", role: "Technician" },

{ name: "ENIXIOUS.", image: "ENIXIOUS.png", finisher: "...", role: "ded" },
{ name: "Grunt", image: "GRUNT.png", finisher: "F6", role: "Powerhouse" },
{ name: "Hacker Callahan", image: "HACKER CALLAHAN.png", finisher: "Super Brogue", role: "Brawler" },
{ name: "Hum", image: "HUM.png", finisher: "Low Blow", role: "Drunk Artist" },
{ name: "Jaden Storm", image: "JADEN STORM.png", finisher: "Death Valley Driver", role: "Street Fighter" },
{ name: "Johnny Black", image: "JOHNNY BLACK.png", finisher: "Self Promotion Strategies", role: "Half ded" },
{ name: "Johnny Drago", image: "JOHNNY DRACO.png", finisher: "Dragon Slash", role: "Technician" },
{ name: "Johnny Silver", image: "JOHNNY SILVER.png", finisher: "Burning Back Elbow", role: "Kempo" },
{ name: "Julia Jothovic", image: "JULIA JOTOVIC.png", finisher: "Spartan Kick", role: "Kempo" },
{ name: "Kevin Aloc", image: "KEVIN ALOC.png", finisher: "Super Low Kick", role: "Gay" },
{ name: "Kingreal", image: "KINGREAL.png", finisher: "The Deadliest Move", role: "Boss" },
{ name: "Kidshore", image: "KISHOR.png", finisher: "...", role: "Roman Reigns Ver. 3001" },
{ name: "Kvng Famous", image: "KVNG FAMOUS.png", finisher: "Fame Fury", role: "Pure Wrestler" },
{ name: "Lannie", image: "LANNIE.png", finisher: "Ass babe", role: "Technician" },

{ name: "Leon Ricardo", image: "LEON RICARDO.png", finisher: "360° kick", role: "Kempo" },
{ name: "Longbow", image: "LONG BOWERS.png", finisher: "Clostline from Hell", role: "Powerhouse" },
{ name: "Louis", image: "LOUIS.png", finisher: "Spinning Brogue", role: "Brawler" },
{ name: "Lubu", image: "LUBU.png", finisher: "Super Kick", role: "Street Fighter" },
{ name: "Marcus Cross", image: "MARCUS CROSS.png", finisher: "Powerbomb Lion Tamer", role: "Street Fighter" },
{ name: "Mason Ryan", image: "MASON RYAN.png", finisher: "Spinning Punch", role: "Powerhouse" },
{ name: "Marshall Law", image: "MARSHALL LAW.png", finisher: "Pump Knee Strike", role: "Pure Wrestler" },
{ name: "Kunglao", image: "MASTER KUNGLAO.png", finisher: "Super Kick", role: "Dirty" },
{ name: "Matthew Derek", image: "MATHEW DEREK.png", finisher: "Bro Derek", role: "Drunk Artist " },
{ name: "Martinez", image: "MATINEZ.png", finisher: "MMA Mount", role: "Stree Fighter" },
{ name: "Mike Anderson", image: "MIKE ANDERSON.png", finisher: "Judas Effect", role: "Brawler" },
{ name: "Nemesis", image: "NEMESIS T13.png", finisher: "Powerbomb Hell Clostline", role: "Powerhouse" },
{ name: "Neo Kaufman", image: "NEO KAUFMAN.png", finisher: "...", role: "..." },
{ name: "Nicolas", image: "NICOLAS.png", finisher: "Suppercut", role: " Army Martial Artist" },
{ name: "Prince Slayer", image: "PRINCE SLAYER.png", finisher: "Swords edge", role: "Pure Wrestler" },
{ name: "Pten", image: "PTEN.png", finisher: "low blow", role: "Master of everything" },
{ name: "Ravager", image: "RAVAGER.png", finisher: "Stomp", role: "Technician" },
{ name: "Romikel", image: "ROMIKEL.png", finisher: "Spear", role: " Powerhouse" },
{ name: "Saturn Mercer", image: "SATURN MERCER.png", finisher:" Ultra Choke Slam", role:" Powerhouse" },
{ name: "Scorpion", image: "SCORPION.png", finisher: "Hellish Dismembermen", role: " Street Fighter" },
{ name: "Sean Crangsley", image: "SEAN CRANGSLEY.png", finisher: "Fullnelson Slam", role: " Powerhouse" },
{ name: "Simon Suzuki", image: "SIMON SUZUKI.png", finisher: "Suzuki Gun", role: "Brawlwr" },
{ name: "Smoke", image: "SMOKE.png", finisher: "Claymore", role: "Kick Boxer" },
{ name: "Sub Zero", image: "SUB ZERO.png", finisher: "Execution", role: "Technician" },
{ name: "The Mechanic", image: "THE MECHANIC.png", finisher: "Spear", role: " Powerhouse" },
{ name: "Thee Hunter", image: "THEE HUNTER.png", finisher: "Hunting Party", role: "Mixed Martial Artist" },
{ name: "Tommy Banderas", image: "TOMMY BANDERAS.png", finisher: "Doumar Bomb", role: " Technician" },
{ name: "Tommy Gun", image: "TOMMY GUN.png", finisher: "Capture Clostline", role: " Technician" },
{ name: "Tony Last", image: "TONY LAST.png", finisher: "...", role: "Pure Wrestler" },
{ name: "Van Sheadock", image: "VAN SHEADOCK.png", finisher: "Coast to Coast", role: "Technical Highflyer" },
{ name: "Vezita", image: "VEZITA.png", finisher: "KO Punch", role: "Street Fighter" },
{ name: "Violet Soths", image: "VIOLET SOTHS.png", finisher: "Violet Stomp", role: " Technician" },
{ name: "Vesktor", image: "VESKTOR.png", finisher: "...", role: "..." },
];


wrestlers.forEach(wrestler => {
    const wrestlerCard = document.createElement("div");
    wrestlerCard.classList.add("wrestler-card");

    const wrestlerImage = document.createElement("img");
    wrestlerImage.src = `images/${wrestler.image}`;
    wrestlerImage.alt = wrestler.name;
    wrestlerImage.classList.add("wrestler-image");

    const wrestlerName = document.createElement("p");
    wrestlerName.textContent = wrestler.name;
    wrestlerName.classList.add("wrestler-name");

    const wrestlerRole = document.createElement("p"); // Create a new element for the role
    wrestlerRole.textContent = `Role: ${wrestler.role}`;
    wrestlerRole.classList.add("wrestler-role"); // Add a class for styling

    const wrestlerFinisher = document.createElement("p");
    wrestlerFinisher.textContent = `Finisher: ${wrestler.finisher}`;
    wrestlerFinisher.classList.add("wrestler-finisher");

    wrestlerCard.appendChild(wrestlerImage);
    wrestlerCard.appendChild(wrestlerName);
    wrestlerCard.appendChild(wrestlerRole); // Append the role element
    wrestlerCard.appendChild(wrestlerFinisher);

    rosterContainer.appendChild(wrestlerCard);
});
