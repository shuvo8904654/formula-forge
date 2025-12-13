const abundanceData = {
    universe: [
        {s:'H',name:'Hydrogen',pct:73.9},
        {s:'He',name:'Helium',pct:24.0},
        {s:'O',name:'Oxygen',pct:1.04},
        {s:'C',name:'Carbon',pct:0.46},
        {s:'Ne',name:'Neon',pct:0.13},
        {s:'Fe',name:'Iron',pct:0.11},
        {s:'N',name:'Nitrogen',pct:0.10},
        {s:'Si',name:'Silicon',pct:0.065},
        {s:'Mg',name:'Magnesium',pct:0.058},
        {s:'S',name:'Sulfur',pct:0.044}
    ],
    'earth-crust': [
        {s:'O',name:'Oxygen',pct:46.1},
        {s:'Si',name:'Silicon',pct:28.2},
        {s:'Al',name:'Aluminum',pct:8.23},
        {s:'Fe',name:'Iron',pct:5.63},
        {s:'Ca',name:'Calcium',pct:4.15},
        {s:'Na',name:'Sodium',pct:2.36},
        {s:'Mg',name:'Magnesium',pct:2.33},
        {s:'K',name:'Potassium',pct:2.09},
        {s:'Ti',name:'Titanium',pct:0.565},
        {s:'H',name:'Hydrogen',pct:0.14}
    ],
    ocean: [
        {s:'O',name:'Oxygen',pct:85.7},
        {s:'H',name:'Hydrogen',pct:10.8},
        {s:'Cl',name:'Chlorine',pct:1.94},
        {s:'Na',name:'Sodium',pct:1.08},
        {s:'Mg',name:'Magnesium',pct:0.127},
        {s:'S',name:'Sulfur',pct:0.091},
        {s:'Ca',name:'Calcium',pct:0.040},
        {s:'K',name:'Potassium',pct:0.040},
        {s:'Br',name:'Bromine',pct:0.0067},
        {s:'C',name:'Carbon',pct:0.0028}
    ],
    human: [
        {s:'O',name:'Oxygen',pct:65.0},
        {s:'C',name:'Carbon',pct:18.5},
        {s:'H',name:'Hydrogen',pct:9.5},
        {s:'N',name:'Nitrogen',pct:3.2},
        {s:'Ca',name:'Calcium',pct:1.5},
        {s:'P',name:'Phosphorus',pct:1.0},
        {s:'K',name:'Potassium',pct:0.25},
        {s:'S',name:'Sulfur',pct:0.25},
        {s:'Na',name:'Sodium',pct:0.15},
        {s:'Cl',name:'Chlorine',pct:0.15}
    ],
    atmosphere: [
        {s:'N',name:'Nitrogen',pct:78.08},
        {s:'O',name:'Oxygen',pct:20.95},
        {s:'Ar',name:'Argon',pct:0.93},
        {s:'CO2',name:'Carbon Dioxide',pct:0.04},
        {s:'Ne',name:'Neon',pct:0.0018},
        {s:'He',name:'Helium',pct:0.0005},
        {s:'CH4',name:'Methane',pct:0.0002},
        {s:'Kr',name:'Krypton',pct:0.0001}
    ]
};

const facts = {
    universe: [
        'Hydrogen makes up about 74% of all normal matter in the universe',
        'Helium was first discovered in the Sun before being found on Earth',
        'All elements heavier than iron were created in supernova explosions',
        'The Big Bang only produced hydrogen, helium, and trace lithium'
    ],
    'earth-crust': [
        'Oxygen is the most abundant element in Earth\'s crust by mass',
        'Silicon and oxygen together make up about 74% of the crust',
        'Gold is about 0.000001% of the crust - truly rare',
        'Aluminum is the most abundant metal in the crust'
    ],
    ocean: [
        'Seawater is about 3.5% dissolved salts by weight',
        'There is enough gold dissolved in the oceans to give everyone 4kg',
        'The ocean contains about 50 quadrillion tons of dissolved salts',
        'Chlorine and sodium make up most of the dissolved salts'
    ],
    human: [
        'A 70kg human contains about 7kg of hydrogen',
        'Your body contains enough carbon to make 900 pencils',
        'There is enough iron in your body to make a 3-inch nail',
        'You have about 1kg of calcium, mostly in bones and teeth'
    ],
    atmosphere: [
        'Nitrogen makes up about 78% of the atmosphere',
        'Oxygen levels have varied from 15% to 35% over Earth\'s history',
        'Argon is the third most abundant gas in the atmosphere',
        'CO2 levels are higher now than any time in 800,000 years'
    ]
};

const titles = {
    universe: 'Abundance in the Universe',
    'earth-crust': 'Abundance in Earth\'s Crust',
    ocean: 'Abundance in the Ocean',
    human: 'Abundance in the Human Body',
    atmosphere: 'Abundance in the Atmosphere'
};

const colors = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#34495e','#16a085','#c0392b'];

const chart = document.getElementById('abundance-chart');
const chartTitle = document.getElementById('chart-title');
const factsContent = document.getElementById('facts-content');
const locationSelect = document.getElementById('location-select');
const darkToggle = document.getElementById('dark-toggle');

function renderChart(location) {
    const data = abundanceData[location];
    chartTitle.textContent = titles[location];
    
    const maxPct = Math.max(...data.map(d => d.pct));
    
    chart.innerHTML = data.map((item, i) => `
        <div class="bar-item">
            <span class="bar-label">${item.s}</span>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${(item.pct / maxPct) * 100}%; background: ${colors[i % colors.length]}"></div>
            </div>
            <span class="bar-value">${item.pct}%</span>
        </div>
    `).join('');
    
    factsContent.innerHTML = '<ul>' + facts[location].map(f => `<li>${f}</li>`).join('') + '</ul>';
}

locationSelect.addEventListener('change', () => renderChart(locationSelect.value));

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

renderChart('universe');
