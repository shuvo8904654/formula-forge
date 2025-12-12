const discoveries = [
    {n:1,s:"H",name:"Hydrogen",year:1766,discoverer:"Henry Cavendish",country:"England",story:"Cavendish isolated hydrogen by reacting metals with acids, calling it 'inflammable air'.",cat:"nonmetal"},
    {n:2,s:"He",name:"Helium",year:1868,discoverer:"Pierre Janssen & Joseph Lockyer",country:"France/England",story:"Discovered in the sun's spectrum during a solar eclipse before being found on Earth.",cat:"noble"},
    {n:3,s:"Li",name:"Lithium",year:1817,discoverer:"Johan August Arfwedson",country:"Sweden",story:"Found while analyzing petalite ore. Named from Greek 'lithos' meaning stone.",cat:"alkali"},
    {n:4,s:"Be",name:"Beryllium",year:1798,discoverer:"Louis Nicolas Vauquelin",country:"France",story:"Discovered in beryl and emeralds. Originally called glucinium due to its sweet taste.",cat:"alkaline"},
    {n:5,s:"B",name:"Boron",year:1808,discoverer:"Humphry Davy, Gay-Lussac & Thénard",country:"England/France",story:"Isolated independently by British and French chemists within days of each other.",cat:"metalloid"},
    {n:6,s:"C",name:"Carbon",year:-3750,discoverer:"Ancient civilizations",country:"Various",story:"Known since prehistoric times as charcoal and soot. Diamond and graphite recognized as carbon forms later.",cat:"nonmetal"},
    {n:7,s:"N",name:"Nitrogen",year:1772,discoverer:"Daniel Rutherford",country:"Scotland",story:"Called 'noxious air' because animals died in it. Makes up 78% of our atmosphere.",cat:"nonmetal"},
    {n:8,s:"O",name:"Oxygen",year:1774,discoverer:"Joseph Priestley & Carl Wilhelm Scheele",country:"England/Sweden",story:"Priestley called it 'dephlogisticated air'. Lavoisier later named it oxygen.",cat:"nonmetal"},
    {n:9,s:"F",name:"Fluorine",year:1886,discoverer:"Henri Moissan",country:"France",story:"Took 74 years to isolate after discovery. Many chemists were injured or killed trying.",cat:"halogen"},
    {n:10,s:"Ne",name:"Neon",year:1898,discoverer:"William Ramsay & Morris Travers",country:"England",story:"Found by fractional distillation of liquid air. Name means 'new' in Greek.",cat:"noble"},
    {n:11,s:"Na",name:"Sodium",year:1807,discoverer:"Humphry Davy",country:"England",story:"First metal isolated by electrolysis. Davy was so excited he danced around the lab.",cat:"alkali"},
    {n:12,s:"Mg",name:"Magnesium",year:1755,discoverer:"Joseph Black",country:"Scotland",story:"Black recognized it as a distinct element. Named after Magnesia, a district in Greece.",cat:"alkaline"},
    {n:13,s:"Al",name:"Aluminum",year:1825,discoverer:"Hans Christian Ørsted",country:"Denmark",story:"Once more valuable than gold. Napoleon III served honored guests with aluminum utensils.",cat:"post-transition"},
    {n:14,s:"Si",name:"Silicon",year:1824,discoverer:"Jöns Jacob Berzelius",country:"Sweden",story:"Named from Latin 'silex' meaning flint. Second most abundant element in Earth's crust.",cat:"metalloid"},
    {n:15,s:"P",name:"Phosphorus",year:1669,discoverer:"Hennig Brand",country:"Germany",story:"Discovered while boiling urine looking for the philosopher's stone. It glowed in the dark.",cat:"nonmetal"},
    {n:16,s:"S",name:"Sulfur",year:-2000,discoverer:"Ancient civilizations",country:"Various",story:"Known as brimstone in ancient times. Used in religious ceremonies and warfare.",cat:"nonmetal"},
    {n:17,s:"Cl",name:"Chlorine",year:1774,discoverer:"Carl Wilhelm Scheele",country:"Sweden",story:"Scheele thought it contained oxygen. Davy proved it was an element in 1810.",cat:"halogen"},
    {n:18,s:"Ar",name:"Argon",year:1894,discoverer:"Lord Rayleigh & William Ramsay",country:"England",story:"Name means 'lazy' in Greek because it doesn't react with anything.",cat:"noble"},
    {n:19,s:"K",name:"Potassium",year:1807,discoverer:"Humphry Davy",country:"England",story:"Isolated just days after sodium using the same electrolysis technique.",cat:"alkali"},
    {n:20,s:"Ca",name:"Calcium",year:1808,discoverer:"Humphry Davy",country:"England",story:"Isolated by electrolysis of lime. Name comes from Latin 'calx' meaning lime.",cat:"alkaline"},
    {n:21,s:"Sc",name:"Scandium",year:1879,discoverer:"Lars Fredrik Nilson",country:"Sweden",story:"Named after Scandinavia. Predicted by Mendeleev as 'eka-boron'.",cat:"transition"},
    {n:22,s:"Ti",name:"Titanium",year:1791,discoverer:"William Gregor",country:"England",story:"Named after the Titans of Greek mythology. Extremely strong but lightweight.",cat:"transition"},
    {n:23,s:"V",name:"Vanadium",year:1801,discoverer:"Andrés Manuel del Río",country:"Mexico",story:"Named after Vanadis, Norse goddess of beauty, due to its colorful compounds.",cat:"transition"},
    {n:24,s:"Cr",name:"Chromium",year:1797,discoverer:"Louis Nicolas Vauquelin",country:"France",story:"Name means 'color' in Greek. Its compounds come in many vivid colors.",cat:"transition"},
    {n:25,s:"Mn",name:"Manganese",year:1774,discoverer:"Johan Gottlieb Gahn",country:"Sweden",story:"Isolated from pyrolusite. Essential for steel production.",cat:"transition"},
    {n:26,s:"Fe",name:"Iron",year:-5000,discoverer:"Ancient civilizations",country:"Various",story:"Used since the Iron Age. Meteoric iron was used before smelting was discovered.",cat:"transition"},
    {n:27,s:"Co",name:"Cobalt",year:1735,discoverer:"Georg Brandt",country:"Sweden",story:"First metal discovered in modern times. Named after 'kobold', a German goblin.",cat:"transition"},
    {n:28,s:"Ni",name:"Nickel",year:1751,discoverer:"Axel Fredrik Cronstedt",country:"Sweden",story:"Named from 'kupfernickel' meaning devil's copper, as miners couldn't extract copper from it.",cat:"transition"},
    {n:29,s:"Cu",name:"Copper",year:-9000,discoverer:"Ancient civilizations",country:"Middle East",story:"One of the first metals used by humans. The Copper Age preceded the Bronze Age.",cat:"transition"},
    {n:30,s:"Zn",name:"Zinc",year:1746,discoverer:"Andreas Sigismund Marggraf",country:"Germany",story:"Used in brass since ancient times but not recognized as a separate element until 1746.",cat:"transition"},
    {n:31,s:"Ga",name:"Gallium",year:1875,discoverer:"Paul Emile Lecoq de Boisbaudran",country:"France",story:"Predicted by Mendeleev as 'eka-aluminum'. Melts in your hand.",cat:"post-transition"},
    {n:32,s:"Ge",name:"Germanium",year:1886,discoverer:"Clemens Winkler",country:"Germany",story:"Another element predicted by Mendeleev. Named after Germany.",cat:"metalloid"},
    {n:33,s:"As",name:"Arsenic",year:1250,discoverer:"Albertus Magnus",country:"Germany",story:"Known as a poison throughout history. Used in green pigments and wallpapers.",cat:"metalloid"},
    {n:34,s:"Se",name:"Selenium",year:1817,discoverer:"Jöns Jacob Berzelius",country:"Sweden",story:"Named after Selene, Greek goddess of the moon. Found in sulfuric acid residue.",cat:"nonmetal"},
    {n:35,s:"Br",name:"Bromine",year:1826,discoverer:"Antoine Jérôme Balard",country:"France",story:"Name means 'stench' in Greek. Only non-metal liquid at room temperature.",cat:"halogen"},
    {n:36,s:"Kr",name:"Krypton",year:1898,discoverer:"William Ramsay & Morris Travers",country:"England",story:"Name means 'hidden' in Greek. Superman's home planet was named after it.",cat:"noble"},
    {n:37,s:"Rb",name:"Rubidium",year:1861,discoverer:"Robert Bunsen & Gustav Kirchhoff",country:"Germany",story:"Discovered using spectroscopy. Name means 'deep red' from its spectral lines.",cat:"alkali"},
    {n:38,s:"Sr",name:"Strontium",year:1790,discoverer:"Adair Crawford",country:"Scotland",story:"Named after Strontian, a village in Scotland where it was found.",cat:"alkaline"},
    {n:39,s:"Y",name:"Yttrium",year:1794,discoverer:"Johan Gadolin",country:"Finland",story:"First of four elements named after Ytterby, a Swedish village.",cat:"transition"},
    {n:40,s:"Zr",name:"Zirconium",year:1789,discoverer:"Martin Heinrich Klaproth",country:"Germany",story:"Name comes from Persian 'zargun' meaning gold-colored.",cat:"transition"},
    {n:41,s:"Nb",name:"Niobium",year:1801,discoverer:"Charles Hatchett",country:"England",story:"Originally called columbium in America. Named after Niobe from Greek mythology.",cat:"transition"},
    {n:42,s:"Mo",name:"Molybdenum",year:1781,discoverer:"Peter Jacob Hjelm",country:"Sweden",story:"Name comes from Greek 'molybdos' meaning lead, as it was confused with lead ore.",cat:"transition"},
    {n:43,s:"Tc",name:"Technetium",year:1937,discoverer:"Carlo Perrier & Emilio Segrè",country:"Italy",story:"First artificially produced element. Name means 'artificial' in Greek.",cat:"transition"},
    {n:44,s:"Ru",name:"Ruthenium",year:1844,discoverer:"Karl Ernst Claus",country:"Russia",story:"Named after Ruthenia, the Latin name for Russia.",cat:"transition"},
    {n:45,s:"Rh",name:"Rhodium",year:1803,discoverer:"William Hyde Wollaston",country:"England",story:"Name means 'rose' in Greek due to the color of its salts.",cat:"transition"},
    {n:46,s:"Pd",name:"Palladium",year:1803,discoverer:"William Hyde Wollaston",country:"England",story:"Named after the asteroid Pallas, discovered the year before.",cat:"transition"},
    {n:47,s:"Ag",name:"Silver",year:-5000,discoverer:"Ancient civilizations",country:"Various",story:"Known since ancient times. Symbol Ag comes from Latin 'argentum'.",cat:"transition"},
    {n:48,s:"Cd",name:"Cadmium",year:1817,discoverer:"Friedrich Stromeyer",country:"Germany",story:"Found as an impurity in zinc carbonate. Named after Latin 'cadmia' for calamine.",cat:"transition"},
    {n:49,s:"In",name:"Indium",year:1863,discoverer:"Ferdinand Reich & Hieronymous Richter",country:"Germany",story:"Named for the indigo blue line in its spectrum.",cat:"post-transition"},
    {n:50,s:"Sn",name:"Tin",year:-3500,discoverer:"Ancient civilizations",country:"Various",story:"Used in bronze since ancient times. Symbol Sn from Latin 'stannum'.",cat:"post-transition"},
    {n:51,s:"Sb",name:"Antimony",year:-3000,discoverer:"Ancient civilizations",country:"Various",story:"Used in ancient Egypt for cosmetics. Symbol Sb from Latin 'stibium'.",cat:"metalloid"},
    {n:52,s:"Te",name:"Tellurium",year:1783,discoverer:"Franz-Joseph Müller von Reichenstein",country:"Romania",story:"Named after Latin 'tellus' meaning Earth.",cat:"metalloid"},
    {n:53,s:"I",name:"Iodine",year:1811,discoverer:"Bernard Courtois",country:"France",story:"Discovered accidentally while making saltpeter. Name means 'violet' in Greek.",cat:"halogen"},
    {n:54,s:"Xe",name:"Xenon",year:1898,discoverer:"William Ramsay & Morris Travers",country:"England",story:"Name means 'stranger' in Greek. Last of the stable noble gases discovered.",cat:"noble"},
    {n:55,s:"Cs",name:"Cesium",year:1860,discoverer:"Robert Bunsen & Gustav Kirchhoff",country:"Germany",story:"First element discovered by spectroscopy. Name means 'sky blue'.",cat:"alkali"},
    {n:56,s:"Ba",name:"Barium",year:1808,discoverer:"Humphry Davy",country:"England",story:"Name means 'heavy' in Greek. Isolated by electrolysis.",cat:"alkaline"},
    {n:57,s:"La",name:"Lanthanum",year:1839,discoverer:"Carl Gustaf Mosander",country:"Sweden",story:"Name means 'to lie hidden' as it was hidden in cerium oxide.",cat:"lanthanide"},
    {n:58,s:"Ce",name:"Cerium",year:1803,discoverer:"Jöns Jacob Berzelius & Wilhelm Hisinger",country:"Sweden",story:"Named after the dwarf planet Ceres, discovered two years earlier.",cat:"lanthanide"},
    {n:59,s:"Pr",name:"Praseodymium",year:1885,discoverer:"Carl Auer von Welsbach",country:"Austria",story:"Name means 'green twin' from Greek, referring to its green salts.",cat:"lanthanide"},
    {n:60,s:"Nd",name:"Neodymium",year:1885,discoverer:"Carl Auer von Welsbach",country:"Austria",story:"Name means 'new twin'. Separated from praseodymium.",cat:"lanthanide"},
    {n:61,s:"Pm",name:"Promethium",year:1945,discoverer:"Marinsky, Glendenin & Coryell",country:"USA",story:"Named after Prometheus who stole fire from the gods. All isotopes radioactive.",cat:"lanthanide"},
    {n:62,s:"Sm",name:"Samarium",year:1879,discoverer:"Paul Emile Lecoq de Boisbaudran",country:"France",story:"Named after the mineral samarskite, itself named after a Russian official.",cat:"lanthanide"},
    {n:63,s:"Eu",name:"Europium",year:1901,discoverer:"Eugène-Anatole Demarçay",country:"France",story:"Named after Europe. Used in Euro banknotes as anti-forgery measure.",cat:"lanthanide"},
    {n:64,s:"Gd",name:"Gadolinium",year:1880,discoverer:"Jean Charles Galissard de Marignac",country:"Switzerland",story:"Named after Johan Gadolin, discoverer of yttrium.",cat:"lanthanide"},
    {n:65,s:"Tb",name:"Terbium",year:1843,discoverer:"Carl Gustaf Mosander",country:"Sweden",story:"Second element named after Ytterby village in Sweden.",cat:"lanthanide"},
    {n:66,s:"Dy",name:"Dysprosium",year:1886,discoverer:"Paul Emile Lecoq de Boisbaudran",country:"France",story:"Name means 'hard to get' in Greek due to difficulty of isolation.",cat:"lanthanide"},
    {n:67,s:"Ho",name:"Holmium",year:1878,discoverer:"Marc Delafontaine & Jacques-Louis Soret",country:"Switzerland",story:"Named after Stockholm (Holmia in Latin).",cat:"lanthanide"},
    {n:68,s:"Er",name:"Erbium",year:1843,discoverer:"Carl Gustaf Mosander",country:"Sweden",story:"Third element named after Ytterby village.",cat:"lanthanide"},
    {n:69,s:"Tm",name:"Thulium",year:1879,discoverer:"Per Teodor Cleve",country:"Sweden",story:"Named after Thule, ancient name for Scandinavia.",cat:"lanthanide"},
    {n:70,s:"Yb",name:"Ytterbium",year:1878,discoverer:"Jean Charles Galissard de Marignac",country:"Switzerland",story:"Fourth and final element named after Ytterby village.",cat:"lanthanide"},
    {n:71,s:"Lu",name:"Lutetium",year:1907,discoverer:"Georges Urbain & Carl Auer von Welsbach",country:"France/Austria",story:"Named after Lutetia, ancient name for Paris. Last natural lanthanide.",cat:"lanthanide"},
    {n:72,s:"Hf",name:"Hafnium",year:1923,discoverer:"Dirk Coster & George de Hevesy",country:"Denmark",story:"Named after Hafnia, Latin for Copenhagen where it was discovered.",cat:"transition"},
    {n:73,s:"Ta",name:"Tantalum",year:1802,discoverer:"Anders Gustaf Ekeberg",country:"Sweden",story:"Named after Tantalus from Greek mythology who couldn't drink water.",cat:"transition"},
    {n:74,s:"W",name:"Tungsten",year:1783,discoverer:"Juan José & Fausto Elhuyar",country:"Spain",story:"Symbol W from German 'wolfram'. Has highest melting point of all elements.",cat:"transition"},
    {n:75,s:"Re",name:"Rhenium",year:1925,discoverer:"Walter Noddack, Ida Tacke & Otto Berg",country:"Germany",story:"Named after the Rhine river. Last stable element discovered.",cat:"transition"},
    {n:76,s:"Os",name:"Osmium",year:1803,discoverer:"Smithson Tennant",country:"England",story:"Name means 'smell' in Greek due to its pungent oxide. Densest element.",cat:"transition"},
    {n:77,s:"Ir",name:"Iridium",year:1803,discoverer:"Smithson Tennant",country:"England",story:"Named after Iris, Greek goddess of rainbows, for its colorful salts.",cat:"transition"},
    {n:78,s:"Pt",name:"Platinum",year:1735,discoverer:"Antonio de Ulloa",country:"Spain",story:"Name means 'little silver' in Spanish. Found in South American gold mines.",cat:"transition"},
    {n:79,s:"Au",name:"Gold",year:-6000,discoverer:"Ancient civilizations",country:"Various",story:"Known since prehistoric times. Symbol Au from Latin 'aurum' meaning shining dawn.",cat:"transition"},
    {n:80,s:"Hg",name:"Mercury",year:-1500,discoverer:"Ancient civilizations",country:"Various",story:"Named after the planet. Only metal liquid at room temperature.",cat:"transition"},
    {n:81,s:"Tl",name:"Thallium",year:1861,discoverer:"William Crookes",country:"England",story:"Name means 'green twig' from its bright green spectral line.",cat:"post-transition"},
    {n:82,s:"Pb",name:"Lead",year:-7000,discoverer:"Ancient civilizations",country:"Various",story:"Used since ancient times. Symbol Pb from Latin 'plumbum'.",cat:"post-transition"},
    {n:83,s:"Bi",name:"Bismuth",year:1753,discoverer:"Claude François Geoffroy",country:"France",story:"Known since ancient times but confused with lead and tin.",cat:"post-transition"},
    {n:84,s:"Po",name:"Polonium",year:1898,discoverer:"Marie & Pierre Curie",country:"France",story:"Named after Poland, Marie Curie's homeland. Highly radioactive.",cat:"metalloid"},
    {n:85,s:"At",name:"Astatine",year:1940,discoverer:"Corson, MacKenzie & Segrè",country:"USA",story:"Name means 'unstable' in Greek. Rarest naturally occurring element.",cat:"halogen"},
    {n:86,s:"Rn",name:"Radon",year:1900,discoverer:"Friedrich Ernst Dorn",country:"Germany",story:"Originally called radium emanation. A radioactive noble gas.",cat:"noble"},
    {n:87,s:"Fr",name:"Francium",year:1939,discoverer:"Marguerite Perey",country:"France",story:"Named after France. Most unstable naturally occurring element.",cat:"alkali"},
    {n:88,s:"Ra",name:"Radium",year:1898,discoverer:"Marie & Pierre Curie",country:"France",story:"Name means 'ray' in Latin. Once used in luminous paint.",cat:"alkaline"},
    {n:89,s:"Ac",name:"Actinium",year:1899,discoverer:"André-Louis Debierne",country:"France",story:"Name means 'ray' in Greek. Glows blue in the dark.",cat:"actinide"},
    {n:90,s:"Th",name:"Thorium",year:1829,discoverer:"Jöns Jacob Berzelius",country:"Sweden",story:"Named after Thor, Norse god of thunder.",cat:"actinide"},
    {n:91,s:"Pa",name:"Protactinium",year:1913,discoverer:"Kasimir Fajans & Oswald Helmuth Göhring",country:"Germany",story:"Name means 'parent of actinium' as it decays into actinium.",cat:"actinide"},
    {n:92,s:"U",name:"Uranium",year:1789,discoverer:"Martin Heinrich Klaproth",country:"Germany",story:"Named after the planet Uranus, discovered 8 years earlier.",cat:"actinide"},
    {n:93,s:"Np",name:"Neptunium",year:1940,discoverer:"McMillan & Abelson",country:"USA",story:"First transuranium element. Named after Neptune, next planet after Uranus.",cat:"actinide"},
    {n:94,s:"Pu",name:"Plutonium",year:1940,discoverer:"Seaborg, McMillan, Kennedy & Wahl",country:"USA",story:"Named after Pluto. Used in nuclear weapons and spacecraft.",cat:"actinide"},
    {n:95,s:"Am",name:"Americium",year:1944,discoverer:"Glenn Seaborg et al.",country:"USA",story:"Named after America. Found in smoke detectors.",cat:"actinide"},
    {n:96,s:"Cm",name:"Curium",year:1944,discoverer:"Glenn Seaborg et al.",country:"USA",story:"Named after Marie and Pierre Curie.",cat:"actinide"},
    {n:97,s:"Bk",name:"Berkelium",year:1949,discoverer:"Glenn Seaborg et al.",country:"USA",story:"Named after Berkeley, California where it was made.",cat:"actinide"},
    {n:98,s:"Cf",name:"Californium",year:1950,discoverer:"Glenn Seaborg et al.",country:"USA",story:"Named after California and UC Berkeley.",cat:"actinide"},
    {n:99,s:"Es",name:"Einsteinium",year:1952,discoverer:"Ghiorso et al.",country:"USA",story:"Discovered in debris from first hydrogen bomb. Named after Einstein.",cat:"actinide"},
    {n:100,s:"Fm",name:"Fermium",year:1952,discoverer:"Ghiorso et al.",country:"USA",story:"Also found in H-bomb debris. Named after Enrico Fermi.",cat:"actinide"},
    {n:101,s:"Md",name:"Mendelevium",year:1955,discoverer:"Ghiorso et al.",country:"USA",story:"Named after Dmitri Mendeleev, creator of the periodic table.",cat:"actinide"},
    {n:102,s:"No",name:"Nobelium",year:1958,discoverer:"Ghiorso et al.",country:"USA",story:"Named after Alfred Nobel, founder of the Nobel Prize.",cat:"actinide"},
    {n:103,s:"Lr",name:"Lawrencium",year:1961,discoverer:"Ghiorso et al.",country:"USA",story:"Named after Ernest Lawrence, inventor of the cyclotron.",cat:"actinide"},
    {n:104,s:"Rf",name:"Rutherfordium",year:1969,discoverer:"Ghiorso et al.",country:"USA",story:"Named after Ernest Rutherford, father of nuclear physics.",cat:"transition"},
    {n:105,s:"Db",name:"Dubnium",year:1970,discoverer:"Ghiorso et al. / Flerov et al.",country:"USA/Russia",story:"Named after Dubna, Russia. Disputed discovery.",cat:"transition"},
    {n:106,s:"Sg",name:"Seaborgium",year:1974,discoverer:"Ghiorso et al.",country:"USA",story:"Named after Glenn Seaborg while he was still alive.",cat:"transition"},
    {n:107,s:"Bh",name:"Bohrium",year:1981,discoverer:"Armbruster & Münzenberg",country:"Germany",story:"Named after Niels Bohr, pioneer of atomic structure.",cat:"transition"},
    {n:108,s:"Hs",name:"Hassium",year:1984,discoverer:"Armbruster & Münzenberg",country:"Germany",story:"Named after Hesse, the German state where it was made.",cat:"transition"},
    {n:109,s:"Mt",name:"Meitnerium",year:1982,discoverer:"Armbruster & Münzenberg",country:"Germany",story:"Named after Lise Meitner, who explained nuclear fission.",cat:"unknown"},
    {n:110,s:"Ds",name:"Darmstadtium",year:1994,discoverer:"GSI Darmstadt",country:"Germany",story:"Named after Darmstadt, Germany.",cat:"unknown"},
    {n:111,s:"Rg",name:"Roentgenium",year:1994,discoverer:"GSI Darmstadt",country:"Germany",story:"Named after Wilhelm Röntgen, discoverer of X-rays.",cat:"unknown"},
    {n:112,s:"Cn",name:"Copernicium",year:1996,discoverer:"GSI Darmstadt",country:"Germany",story:"Named after Nicolaus Copernicus.",cat:"transition"},
    {n:113,s:"Nh",name:"Nihonium",year:2004,discoverer:"RIKEN",country:"Japan",story:"First element discovered in Asia. Nihon means Japan.",cat:"unknown"},
    {n:114,s:"Fl",name:"Flerovium",year:1999,discoverer:"JINR Dubna",country:"Russia",story:"Named after Flerov Laboratory of Nuclear Reactions.",cat:"unknown"},
    {n:115,s:"Mc",name:"Moscovium",year:2003,discoverer:"JINR & LLNL",country:"Russia/USA",story:"Named after Moscow Oblast.",cat:"unknown"},
    {n:116,s:"Lv",name:"Livermorium",year:2000,discoverer:"JINR & LLNL",country:"Russia/USA",story:"Named after Lawrence Livermore National Laboratory.",cat:"unknown"},
    {n:117,s:"Ts",name:"Tennessine",year:2010,discoverer:"JINR, LLNL & ORNL",country:"Russia/USA",story:"Named after Tennessee, home of Oak Ridge National Lab.",cat:"unknown"},
    {n:118,s:"Og",name:"Oganesson",year:2006,discoverer:"JINR & LLNL",country:"Russia/USA",story:"Named after Yuri Oganessian, pioneer of superheavy elements.",cat:"unknown"}
];


discoveries.sort((a, b) => a.year - b.year);

const timeline = document.getElementById('timeline');
const searchInput = document.getElementById('search');
const eraFilter = document.getElementById('era-filter');
const darkToggle = document.getElementById('dark-toggle');

function getEra(year) {
    if (year < 1700) return 'ancient';
    if (year < 1800) return '1700s';
    if (year < 1900) return '1800s';
    if (year < 2000) return '1900s';
    return '2000s';
}

function getYearDisplay(year) {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return year.toString();
}

function renderTimeline(items) {
    timeline.innerHTML = '';
    
    if (items.length === 0) {
        timeline.innerHTML = '<div class="no-results">No elements found</div>';
        return;
    }
    
    items.forEach((el, index) => {
        const era = getEra(el.year);
        const side = index % 2 === 0 ? 'left' : 'right';
        
        const item = document.createElement('div');
        item.className = `timeline-item ${side}`;
        item.innerHTML = `
            <span class="timeline-year ${era === 'ancient' ? 'ancient' : 'era-' + era}">${getYearDisplay(el.year)}</span>
            <div class="element-symbol ${el.cat}">${el.s}</div>
            <div class="element-name">${el.name}</div>
            <div class="element-number">Element ${el.n}</div>
            <div class="discoverer">Discovered by ${el.discoverer}</div>
            <div class="discoverer">${el.country}</div>
            <div class="discovery-story">${el.story}</div>
        `;
        timeline.appendChild(item);
    });
}

function filterElements() {
    const search = searchInput.value.toLowerCase();
    const era = eraFilter.value;
    
    let filtered = discoveries.filter(el => {
        const matchSearch = el.name.toLowerCase().includes(search) ||
                           el.s.toLowerCase().includes(search) ||
                           el.discoverer.toLowerCase().includes(search) ||
                           el.country.toLowerCase().includes(search);
        
        const matchEra = era === 'all' || getEra(el.year) === era;
        
        return matchSearch && matchEra;
    });
    
    renderTimeline(filtered);
}

function updateStats() {
    const ancient = discoveries.filter(el => el.year < 1700).length;
    const synthetic = discoveries.filter(el => el.year >= 1937 && el.n >= 43).length;
    
    document.getElementById('ancient-count').textContent = ancient;
    document.getElementById('synthetic-count').textContent = synthetic;
}

searchInput.addEventListener('input', filterElements);
eraFilter.addEventListener('change', filterElements);

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

renderTimeline(discoveries);
updateStats();
