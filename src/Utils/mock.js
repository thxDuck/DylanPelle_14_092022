const names = [
	"Olivia",
	"Emma",
	"Charlotte",
	"Amelia",
	"Ava",
	"Sophia",
	"Isabella",
	"Mia",
	"Evelyn",
	"Harper",
	"Luna",
	"Camila",
	"Gianna",
	"Elizabeth",
	"Eleanor",
	"Ella",
	"Abigail",
	"Sofia",
	"Avery",
	"Scarlett",
	"Emily",
	"Aria",
	"Liam",
	"Noah",
	"Oliver",
	"Elijah",
	"James",
	"William",
	"Benjamin",
	"Lucas",
	"Henry",
	"Theodore",
	"Jack",
	"Levi",
	"Alexander",
	"Jackson",
	"Mateo",
	"Daniel",
	"Michael",
	"Mason",
	"Sebastian",
	"Ethan",
	"Logan",
	"Owen",
	"Kai",
	"Zion",
	"Jayden",
	"Eliana",
	"Luca",
	"Ezra",
	"Maeve",
	"Aaliyah",
	"Mia",
	"Nova",
	"Aurora",
	"Amara",
	"Kayden",
	"Ivy",
	"Alina",
	"Mila",
	"Quinn",
	"Rowan",
	"Elliot",
	"Finn",
	"Lilibet",
	"River",
	"Xavier",
	"Rachel",
	"Amaya",
	"Remi",
	"Axel",
	"Zoey",
	"Malachi",
	"Alex",
	"Blake",
	"Lyla",
	"Alice",
	"Isla",
	"Rebecca",
	"Rohan",
	"Milo",
	"Elias",
	"Ari",
	"Aria",
	"Molly",
	"Jude",
	"Isabella",
	"Arthur",
	"Millie",
	"Andrea",
	"Marcus",
	"Atlas",
	"Ariella",
	"Kyle",
	"Evan",
	"Ira",
	"Hayden",
	"Bailey",
	"Gianna",
	"Valerie",
	"Brianna",
	"Jesse",
	"Cecilia",
	"Leo",
	"Leilani",
	"Dante",
	"Zoe",
	"Khadijah",
	"Mya",
	"Sharon",
	"Sean",
	"Brielle",
	"Ayla",
	"Shia",
	"Riley",
	"Raya",
	"Sloane",
	"Alana",
	"Charlie",
	"Kian",
	"Hudson",
	"Elise",
	"Akira",
	"Mika",
	"Freya",
	"Nia",
	"Natasha",
	"Myra",
	"Mateo",
	"Everett",
	"Rae",
	"Savannah",
	"Thea",
	"Finley",
	"Alaina",
	"Mina",
	"Yara",
	"Emerson",
	"Camille",
	"Ivan",
	"Skyler",
	"Skylar",
	"Alma",
	"Reese",
	"Sasha",
	"Asa",
	"Sage",
	"Camila",
	"Amira",
	"Kieran",
	"Monica",
	"Everly",
	"Evie",
	"Maverick",
	"Kyra",
	"Ian",
	"Julia",
	"Vivian",
	"Theo",
	"Ophelia",
	"Chelsea",
	"Azariah",
	"Jade",
	"Lara",
	"Ava",
	"Morgan",
	"Lennox",
	"Luna",
	"Isabelle",
	"Amir",
	"Rhys",
	"Arlo",
	"Giovanni",
	"Aisha",
	"Orion",
	"Ahmed",
	"Nolan",
	"Ezekiel",
	"Michelle",
	"Lea",
	"Silas",
	"Elaine",
	"Adira",
	"Callan",
	"Lilith",
	"Justin",
	"Simon",
	"Rhea",
	"Marie",
	"Lisa",
	"Damien",
	"Ximena",
	"Lilah",
	"Elora",
	"Sienna",
	"Fiona",
	"Urban",
	"Jean",
	"Eden",
	"Kayla",
	"Avi",
	"Octavia",
	"Skye",
	"Nancy",
	"Otis",
	"Lila",
	"Anya",
	"Elena",
	"Zayne",
	"Gigi",
	"Alyssa",
	"Amelia",
	"Giselle",
	"Francis",
	"Jacqueline",
	"Aiden",
	"Kylie",
	"Wren",
	"Maria",
	"Mae",
	"Colette",
	"Louise",
	"Aliyah",
	"Chase",
	"Tara",
	"Lorenzo",
	"Sydney",
	"Callie",
	"Niko",
	"Avery",
	"Gemma",
	"Rafael",
	"Hailey",
	"Harlow",
	"Adeline",
	"Margot",
	"Rory",
	"Nyla",
	"Helena",
	"Colin",
	"Xander",
	"Rylee",
	"Irene",
	"Ashton",
	"Marley",
	"Arden",
	"Kaira",
	"Arianna",
	"Pia",
	"Nola",
	"Miles",
	"Brooks",
	"Annalise",
	"Imani",
	"Josie",
	"Ellis",
	"Cali",
	"Hadassah",
	"Phoenix",
	"Piper",
	"Emery",
	"Aliza",
	"Mackenzie",
	"Timothy",
	"Adrian",
	"Sawyer",
	"Harvey",
	"Enoch",
	"Lachlan",
	"Kaiden",
	"Zuri",
	"Shelby",
	"Liam",
	"Olivia",
	"Aubrey",
	"Sanjana",
	"Rayne",
	"Stella",
	"Cleo",
	"Gracie",
	"Oakley",
	"Madeline",
	"Melissa",
	"Lauren",
	"Mona",
	"Alicia",
	"Jasmine",
	"Scott",
	"Abel",
	"Elliott",
	"Wesley",
	"Aditya",
	"Alan",
	"Brooke",
	"Sunny",
	"Sana",
	"Blair",
	"Leon",
	"Emmanuel",
	"Lilian",
	"Priya",
	"Malia",
	"Elodie",
	"Adriel",
	"Amos",
	"Trisha",
	"Naomi",
	"Damian",
	"Nevaeh",
	"Judah",
	"Sloan",
	"Joel",
	"Nicholas",
	"Azriel",
	"Lyra",
	"Lee",
	"Kevin",
	"Remy",
	"Omar",
	"Amelie",
	"Caleb",
	"Aleena",
	"Killian",
	"Theodore",
	"Asher",
	"Mariam",
	"Claudia",
	"Noelle",
	"Juliana",
	"Makayla",
	"Beau",
	"Nikita",
	"Beckett",
	"Nadia",
	"Ana",
	"Zane",
	"Jayce",
	"Brayden",
	"Elia",
	"Leia",
	"Cooper",
	"Zain",
	"Ronan",
	"Liana",
	"Kali",
	"Serena",
	"Davina",
	"Zaid",
	"Dillon",
	"Sylvia",
	"Rhiannon",
	"Ryder",
	"Zara",
	"Amina",
	"Keanu",
	"Amaris",
	"Eloise",
	"Mara",
	"Vera",
	"Sonny",
	"Keira",
	"Ali",
	"Sierra",
	"Harper",
	"Katherine",
	"Siobhan",
	"Ada",
	"Gia",
	"Heather",
	"Kalani",
	"Penny",
	"Camilla",
	"Cole",
	"Amani",
	"Emmet",
	"Leila",
	"Ethan",
	"Alani",
	"Fallon",
	"Joyce",
	"Joan",
	"Winifred",
	"Amyra",
	"Mira",
	"Quincy",
	"Kimberly",
	"Faye",
	"Colton",
	"Cayden",
	"Maira",
	"Ayana",
	"Shiloh",
	"Darren",
	"Evelyn",
	"Lorelei",
	"Iva",
	"Felix",
	"Tessa",
	"Jalen",
	"Rylan",
	"Nellie",
	"Masha",
	"Amora",
	"Alvin",
	"Leighton",
	"Keziah",
	"Mikayla",
	"Harley",
	"Oliver",
	"Huxley",
	"Martin",
	"Noa",
	"Rocco",
	"Shane",
	"Ines",
	"Rai",
	"Harry",
	"Lily",
	"Stanley",
	"Darcy",
	"Bryce",
	"Devin",
	"Lucas",
	"Jamie",
	"Teddy",
	"Martha",
	"Albert",
	"Travis",
	"Lucian",
	"Emelia",
	"Delilah",
	"Norah",
	"Azalea",
	"Valentina",
	"Hallie",
	"Nora",
	"Kara",
	"Misha",
	"Ishmael",
	"Mimi",
	"Pamela",
	"Genevieve",
	"Thalia",
	"Collin",
	"Grayson",
	"June",
	"May",
	"Kenji",
	"Chiara",
	"Ravi",
	"Rosie",
	"Seraphina",
	"Juno",
	"Sophie",
	"Simone",
	"Gavin",
	"Alayna",
	"Miriam",
	"Patricia",
	"Christine",
	"Joaquin",
	"Dior",
	"Israel",
	"Teagan",
	"Jocelyn",
	"Zaira",
	"Tiffany",
	"Cedric",
	"Reyna",
	"Winston",
	"Maximus",
	"Dennis",
	"George",
	"Braxton",
	"Deborah",
	"Lorraine",
	"Romy",
	"Dakota",
	"Reuben",
	"Hayley",
	"Anisha",
	"Saira",
	"Veda",
	"Tiana",
	"Kyler",
	"Preston",
	"Olive",
	"Ellie",
	"Rio",
	"Yvonne",
	"Parker",
	"Yana",
	"Maia",
	"Levi",
	"Tyson",
	"Graham",
	"Cain",
	"Kelvin",
	"Lynn",
	"Lia",
	"Kaden",
	"Rian",
	"Aurelia",
	"Spencer",
	"Usnavi",
	"Elina",
	"Ellen",
	"Kaya",
	"Tamara",
	"Mabel",
	"Remington",
	"Ember",
	"Sadie",
	"Sahil",
	"Azrael",
	"Kendall",
	"Raine",
	"Noah",
	"Athena",
	"Declan",
	"Leigh",
	"Helen",
	"Rey",
	"Janet",
	"Ace",
	"Alena",
	"Lola",
	"Karina",
	"Grace",
	"Jedidiah",
	"Alaia",
	"Aman",
	"Brian",
	"Milan",
	"Malcolm",
	"Javier",
	"Emma",
	"Marion",
	"Adaline",
	"Daisy",
	"Amal",
	"Holly",
	"Cillian",
	"Kayleigh",
];
const department = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];
const cities = [
	"Paris",
	"Marseille",
	"Lyon",
	"Toulouse",
	"Nice",
	"Nantes",
	"Strasbourg",
	"Montpellier",
	"Bordeaux",
	"Lille",
	"Rennes",
	"Reims",
	"Le Havre",
	"Saint-Étienne",
	"Toulon",
	"Grenoble",
	"Dijon",
	"Nîmes",
	"Angers",
	"Villeurbanne",
	"Le Mans",
	"Saint-Denis",
	"Aix-en-Provence",
	"Clermont-Ferrand",
	"Brest",
	"Limoges",
	"Tours",
	"Amiens",
	"Perpignan",
	"Metz",
	"Besançon",
	"Boulogne-Billancourt",
	"Orléans",
	"Mulhouse",
	"Rouen",
	"Saint-Denis",
	"Caen",
	"Argenteuil",
	"Saint-Paul",
	"Montreuil",
	"Nancy",
	"Roubaix",
	"Tourcoing",
	"Nanterre",
	"Avignon",
	"Vitry-sur-Seine",
	"Créteil",
	"Dunkirk",
	"Poitiers",
	"Asnières-sur-Seine",
	"Courbevoie",
	"Versailles",
	"Colombes",
	"Fort-de-France",
	"Aulnay-sous-Bois",
	"Saint-Pierre",
	"Rueil-Malmaison",
	"Pau",
	"Aubervilliers",
	"Le Tampon",
	"Champigny-sur-Marne",
	"Antibes",
	"Béziers",
	"La Rochelle",
	"Saint-Maur-des-Fossés",
	"Cannes",
	"Calais",
	"Saint-Nazaire",
	"Mérignac",
	"Drancy",
	"Colmar",
	"Ajaccio",
	"Bourges",
	"Issy-les-Moulineaux",
	"Levallois-Perret",
	"La Seyne-sur-Mer",
	"Quimper",
	"Noisy-le-Grand",
	"Villeneuve-d'Ascq",
	"Neuilly-sur-Seine",
	"Valence",
	"Antony",
	"Cergy",
	"Vénissieux",
	"Pessac",
	"Troyes",
	"Clichy",
	"Ivry-sur-Seine",
	"Chambéry",
	"Lorient",
	"Les Abymes",
	"Montauban",
	"Sarcelles",
	"Niort",
	"Villejuif",
	"Saint-André",
	"Hyères",
	"Saint-Quentin",
	"Beauvais",
	"Épinay-sur-Seine",
	"Cayenne",
	"Maisons-Alfort",
	"Cholet",
	"Meaux",
	"Chelles",
	"Pantin",
	"Évry",
	"Fontenay-sous-Bois",
	"Fréjus",
	"Vannes",
	"Bondy",
	"Le Blanc-Mesnil",
	"La Roche-sur-Yon",
	"Saint-Louis",
	"Arles",
	"Clamart",
	"Narbonne",
	"Annecy",
	"Sartrouville",
	"Grasse",
	"Laval",
	"Belfort",
	"Bobigny",
	"Évreux",
	"Vincennes",
	"Montrouge",
	"Sevran",
	"Albi",
	"Charleville-Mézières",
	"Suresnes",
	"Martigues",
	"Corbeil-Essonnes",
	"Saint-Ouen",
	"Bayonne",
	"Cagnes-sur-Mer",
	"Brive-la-Gaillarde",
	"Carcassonne",
	"Massy",
	"Blois",
	"Aubagne",
	"Saint-Brieuc",
	"Châteauroux",
	"Chalon-sur-Saône",
	"Mantes-la-Jolie",
	"Meudon",
	"Saint-Malo",
	"Châlons-en-Champagne",
	"Alfortville",
	"Sète",
	"Salon-de-Provence",
	"Vaulx-en-Velin",
	"Puteaux",
	"Rosny-sous-Bois",
	"Saint-Herblain",
	"Gennevilliers",
	"Le Cannet",
	"Livry-Gargan",
	"Saint-Priest",
	"Istres",
	"Valenciennes",
	"Choisy-le-Roi",
	"Caluire-et-Cuire",
	"Boulogne-sur-Mer",
	"Bastia",
	"Angoulême",
	"Garges-lès-Gonesse",
	"Castres",
	"Thionville",
	"Wattrelos",
	"Talence",
	"Saint-Laurent-du-Maroni",
	"Douai",
	"Noisy-le-Sec",
	"Tarbes",
	"Arras",
	"Alès",
	"La Courneuve",
	"Bourg-en-Bresse",
	"Compiègne",
	"Gap",
	"Melun",
	"Le Lamentin",
	"Rezé",
	"Saint-Germain-en-Laye",
	"Marcq-en-Barœul",
	"Gagny",
	"Anglet",
	"Draguignan",
	"Chartres",
	"Bron",
	"Bagneux",
	"Colomiers",
	"Saint-Martin-d'Hères",
	"Pontault-Combault",
	"Montluçon",
	"Joué-lès-Tours",
	"Saint-Joseph",
	"Poissy",
	"Savigny-sur-Orge",
	"Cherbourg-Octeville",
	"Montélimar",
	"Villefranche-sur-Saône",
	"Stains",
	"Saint-Benoît",
	"Bagnolet",
	"Châtillon",
	"Le Port",
	"Sainte-Geneviève-des-Bois",
	"Échirolles",
	"Roanne",
	"Villepinte",
	"Saint-Chamond",
	"Conflans-Sainte-Honorine",
	"Auxerre",
	"Nevers",
	"Neuilly-sur-Marne",
	"La Ciotat",
	"Tremblay-en-France",
	"Thonon-les-Bains",
	"Vitrolles",
	"Haguenau",
	"Six-Fours-les-Plages",
	"Agen",
	"Creil",
	"Annemasse",
	"Saint-Raphaël",
	"Marignane",
	"Romans-sur-Isère",
	"Montigny-le-Bretonneux",
	"Le Perreux-sur-Marne",
	"Franconville",
	"Mâcon",
	"Saint-Leu",
	"Cambrai",
	"Châtenay-Malabry",
	"Sainte-Marie",
	"Villeneuve-Saint-Georges",
	"Houilles",
	"Épinal",
	"Lens",
	"Liévin",
	"Les Mureaux",
	"Schiltigheim",
	"La Possession",
	"Meyzieu",
	"Dreux",
	"Nogent-sur-Marne",
	"Plaisir",
	"Mont-de-Marsan",
	"Palaiseau",
	"Châtellerault",
	"Goussainville",
	"L'Haÿ-les-Roses",
	"Viry-Châtillon",
	"Vigneux-sur-Seine",
	"Chatou",
	"Trappes",
	"Clichy-sous-Bois",
	"Rillieux-la-Pape",
	"Villenave-d'Ornon",
	"Maubeuge",
	"Charenton-le-Pont",
	"Malakoff",
	"Matoury",
	"Dieppe",
	"Athis-Mons",
	"Savigny-le-Temple",
	"Périgueux",
	"Baie-Mahault",
	"Vandoeuvre-lès-Nancy",
	"Pontoise",
	"Aix-les-Bains",
	"Cachan",
	"Vienne",
	"Thiais",
	"Orange",
	"Saint-Médard-en-Jalles",
	"Villemomble",
	"Saint-Cloud",
	"Saint-Laurent-du-Var",
	"Yerres",
	"Saint-Étienne-du-Rouvray",
	"Sotteville-lès-Rouen",
	"Draveil",
	"Le Chesnay",
	"Bois-Colombes",
	"Le Plessis-Robinson",
	"La Garenne-Colombes",
	"Lambersart",
	"Soissons",
	"Pierrefitte-sur-Seine",
	"Carpentras",
	"Villiers-sur-Marne",
	"Vanves",
	"Menton",
	"Bergerac",
	"Ermont",
	"Bezons",
	"Grigny",
	"Guyancourt",
	"Saumur",
	"Herblay",
	"Ris-Orangis",
	"Villiers-le-Bel",
	"Bourgoin-Jallieu",
	"Vierzon",
	"Le Gosier",
	"Décines-Charpieu",
	"Hénin-Beaumont",
	"Fresnes",
	"Aurillac",
	"Sannois",
	"Vallauris",
	"Illkirch-Graffenstaden",
	"Alençon",
	"Élancourt",
	"Tournefeuille",
	"Bègles",
	"Gonesse",
	"Oullins",
	"Brunoy",
	"Taverny",
	"Armentières",
	"Montfermeil",
	"Rambouillet",
	"Villeparisis",
	"Le Kremlin-Bicêtre",
	"Sucy-en-Brie",
	"Kourou",
	"Montbéliard",
	"Romainville",
	"Cavaillon",
	"Saint-Dizier",
	"Brétigny-sur-Orge",
	"Saint-Sébastien-sur-Loire",
	"Saintes",
	"La Teste-de-Buch",
	"Villeneuve-la-Garenne",
	"Béthune",
	"Bussy-Saint-Georges",
	"Vichy",
	"La Garde",
	"Agde",
	"Laon",
	"Sens",
	"Lunel",
	"Miramas",
	"Biarritz",
	"Le Grand-Quevilly",
	"Orvault",
	"Les Ulis",
	"Champs-sur-Marne",
	"Rochefort",
	"Muret",
	"Sainte-Anne",
	"Eaubonne",
	"Étampes",
	"Gradignan",
	"Vernon",
	"Petit-Bourg",
	"Libourne",
	"Abbeville",
	"Rodez",
	"Saint-Ouen-l'Aumône",
	"Torcy",
	"Maisons-Laffitte",
	"Montgeron",
	"Villeneuve-sur-Lot",
	"Cormeilles-en-Parisis",
	"Épernay",
	"Sèvres",
	"Dole",
	"Le Robert",
	"Le Bouscat",
	"Blagnac",
	"Frontignan",
	"Cenon",
	"Mandelieu-la-Napoule",
	"Vertou",
	"Les Lilas",
	"Bruay-la-Buissière",
	"Les Pavillons-sous-Bois",
	"Chaumont",
	"Roissy-en-Brie",
	"Le Moule",
	"Le Petit-Quevilly",
	"Manosque",
	"Saint-Mandé",
	"Fontenay-aux-Roses",
	"Orly",
	"Le Creusot",
	"Oyonnax",
	"La Madeleine",
	"Sainte-Suzanne",
	"Millau",
	"Combs-la-Ville",
	"Fontaine",
	"Deuil-la-Barre",
	"Coudekerque-Branche",
	"Auch",
	"Lanester",
	"Beaune",
	"Montigny-lès-Metz",
	"Hazebrouck",
	"Longjumeau",
	"Sainte-Foy-lès-Lyon",
	"Forbach",
	"Sarreguemines",
	"Mons-en-Barœul",
	"La Valette-du-Var",
	"Hérouville-Saint-Clair",
	"Morsang-sur-Orge",
	"Grande-Synthe",
	"La Celle-Saint-Cloud",
	"Lisieux",
	"Croix",
	"Dammarie-les-Lys",
	"Vélizy-Villacoublay",
	"Wasquehal",
	"Saint-Gratien",
	"Halluin",
	"Neuilly-Plaisance",
	"Montmorency",
	"Dax",
	"Lagny-sur-Marne",
	"Le Mée-sur-Seine",
	"Saint-Genis-Laval",
	"Fleury-les-Aubrais",
	"Loos",
	"Gif-sur-Yvette",
	"Denain",
	"Saint-Dié-des-Vosges",
	"Sainte-Rose",
	"Saint-Michel-sur-Orge",
];
const states = [
	{
		name: "Alabama",
		abbreviation: "AL",
	},
	{
		name: "Alaska",
		abbreviation: "AK",
	},
	{
		name: "American Samoa",
		abbreviation: "AS",
	},
	{
		name: "Arizona",
		abbreviation: "AZ",
	},
	{
		name: "Arkansas",
		abbreviation: "AR",
	},
	{
		name: "California",
		abbreviation: "CA",
	},
	{
		name: "Colorado",
		abbreviation: "CO",
	},
	{
		name: "Connecticut",
		abbreviation: "CT",
	},
	{
		name: "Delaware",
		abbreviation: "DE",
	},
	{
		name: "District Of Columbia",
		abbreviation: "DC",
	},
	{
		name: "Federated States Of Micronesia",
		abbreviation: "FM",
	},
	{
		name: "Florida",
		abbreviation: "FL",
	},
	{
		name: "Georgia",
		abbreviation: "GA",
	},
	{
		name: "Guam",
		abbreviation: "GU",
	},
	{
		name: "Hawaii",
		abbreviation: "HI",
	},
	{
		name: "Idaho",
		abbreviation: "ID",
	},
	{
		name: "Illinois",
		abbreviation: "IL",
	},
	{
		name: "Indiana",
		abbreviation: "IN",
	},
	{
		name: "Iowa",
		abbreviation: "IA",
	},
	{
		name: "Kansas",
		abbreviation: "KS",
	},
	{
		name: "Kentucky",
		abbreviation: "KY",
	},
	{
		name: "Louisiana",
		abbreviation: "LA",
	},
	{
		name: "Maine",
		abbreviation: "ME",
	},
	{
		name: "Marshall Islands",
		abbreviation: "MH",
	},
	{
		name: "Maryland",
		abbreviation: "MD",
	},
	{
		name: "Massachusetts",
		abbreviation: "MA",
	},
	{
		name: "Michigan",
		abbreviation: "MI",
	},
	{
		name: "Minnesota",
		abbreviation: "MN",
	},
	{
		name: "Mississippi",
		abbreviation: "MS",
	},
	{
		name: "Missouri",
		abbreviation: "MO",
	},
	{
		name: "Montana",
		abbreviation: "MT",
	},
	{
		name: "Nebraska",
		abbreviation: "NE",
	},
	{
		name: "Nevada",
		abbreviation: "NV",
	},
	{
		name: "New Hampshire",
		abbreviation: "NH",
	},
	{
		name: "New Jersey",
		abbreviation: "NJ",
	},
	{
		name: "New Mexico",
		abbreviation: "NM",
	},
	{
		name: "New York",
		abbreviation: "NY",
	},
	{
		name: "North Carolina",
		abbreviation: "NC",
	},
	{
		name: "North Dakota",
		abbreviation: "ND",
	},
	{
		name: "Northern Mariana Islands",
		abbreviation: "MP",
	},
	{
		name: "Ohio",
		abbreviation: "OH",
	},
	{
		name: "Oklahoma",
		abbreviation: "OK",
	},
	{
		name: "Oregon",
		abbreviation: "OR",
	},
	{
		name: "Palau",
		abbreviation: "PW",
	},
	{
		name: "Pennsylvania",
		abbreviation: "PA",
	},
	{
		name: "Puerto Rico",
		abbreviation: "PR",
	},
	{
		name: "Rhode Island",
		abbreviation: "RI",
	},
	{
		name: "South Carolina",
		abbreviation: "SC",
	},
	{
		name: "South Dakota",
		abbreviation: "SD",
	},
	{
		name: "Tennessee",
		abbreviation: "TN",
	},
	{
		name: "Texas",
		abbreviation: "TX",
	},
	{
		name: "Utah",
		abbreviation: "UT",
	},
	{
		name: "Vermont",
		abbreviation: "VT",
	},
	{
		name: "Virgin Islands",
		abbreviation: "VI",
	},
	{
		name: "Virginia",
		abbreviation: "VA",
	},
	{
		name: "Washington",
		abbreviation: "WA",
	},
	{
		name: "West Virginia",
		abbreviation: "WV",
	},
	{
		name: "Wisconsin",
		abbreviation: "WI",
	},
	{
		name: "Wyoming",
		abbreviation: "WY",
	},
];
const randomDate = () => {
	const rdmDate = Math.floor(Math.random() * new Date().getTime());
	return new Date(rdmDate).toLocaleString().slice(0, 10);
};
const rdmString = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};
export const fillEmployeeList = (nb) => {
	const employees = [];
	for (let i = 0; i < nb; i++) {
        const state = states[Math.floor(Math.random() * states.length)];
		const employee = {
			firstName: rdmString(names),
			lastName: rdmString(names),
			dateOfBirth: randomDate(),
			startDate: randomDate(),
			department: rdmString(department),
			street: rdmString(cities) + "-" + rdmString(cities),
			city: rdmString(cities),
			state: state.name,
			abbreviation: state.abbreviation,
			zipCode: "49520",
		};
		employees.push(employee);
	}
	localStorage.setItem("employees", JSON.stringify(employees));
};
