const isotopeData = {
    H: {name:'Hydrogen',z:1,isotopes:[
        {mass:1,name:'Protium',abundance:99.98,stable:true},
        {mass:2,name:'Deuterium',abundance:0.02,stable:true},
        {mass:3,name:'Tritium',abundance:'trace',stable:false,halfLife:'12.3 years'}
    ]},
    He: {name:'Helium',z:2,isotopes:[
        {mass:3,name:'Helium-3',abundance:0.0001,stable:true},
        {mass:4,name:'Helium-4',abundance:99.9999,stable:true}
    ]},
    C: {name:'Carbon',z:6,isotopes:[
        {mass:12,name:'Carbon-12',abundance:98.9,stable:true},
        {mass:13,name:'Carbon-13',abundance:1.1,stable:true},
        {mass:14,name:'Carbon-14',abundance:'trace',stable:false,halfLife:'5,730 years'}
    ]},
    N: {name:'Nitrogen',z:7,isotopes:[
        {mass:14,name:'Nitrogen-14',abundance:99.6,stable:true},
        {mass:15,name:'Nitrogen-15',abundance:0.4,stable:true}
    ]},
    O: {name:'Oxygen',z:8,isotopes:[
        {mass:16,name:'Oxygen-16',abundance:99.76,stable:true},
        {mass:17,name:'Oxygen-17',abundance:0.04,stable:true},
        {mass:18,name:'Oxygen-18',abundance:0.20,stable:true}
    ]},
    U: {name:'Uranium',z:92,isotopes:[
        {mass:234,name:'Uranium-234',abundance:0.005,stable:false,halfLife:'245,500 years'},
        {mass:235,name:'Uranium-235',abundance:0.72,stable:false,halfLife:'704 million years'},
        {mass:238,name:'Uranium-238',abundance:99.27,stable:false,halfLife:'4.47 billion years'}
    ]},
    Fe: {name:'Iron',z:26,isotopes:[
        {mass:54,name:'Iron-54',abundance:5.85,stable:true},
        {mass:56,name:'Iron-56',abundance:91.75,stable:true},
        {mass:57,name:'Iron-57',abundance:2.12,stable:true},
        {mass:58,name:'Iron-58',abundance:0.28,stable:true}
    ]},
    Cl: {name:'Chlorine',z:17,isotopes:[
        {mass:35,name:'Chlorine-35',abundance:75.76,stable:true},
        {mass:37,name:'Chlorine-37',abundance:24.24,stable:true}
    ]},
    K: {name:'Potassium',z:19,isotopes:[
        {mass:39,name:'Potassium-39',abundance:93.26,stable:true},
        {mass:40,name:'Potassium-40',abundance:0.012,stable:false,halfLife:'1.25 billion years'},
        {mass:41,name:'Potassium-41',abundance:6.73,stable:true}
    ]},
    Ca: {name:'Calcium',z:20,isotopes:[
        {mass:40,name:'Calcium-40',abundance:96.94,stable:true},
        {mass:42,name:'Calcium-42',abundance:0.65,stable:true},
        {mass:44,name:'Calcium-44',abundance:2.09,stable:true}
    ]},
    Na: {name:'Sodium',z:11,isotopes:[
        {mass:23,name:'Sodium-23',abundance:100,stable:true}
    ]},
    Pb: {name:'Lead',z:82,isotopes:[
        {mass:204,name:'Lead-204',abundance:1.4,stable:true},
        {mass:206,name:'Lead-206',abundance:24.1,stable:true},
        {mass:207,name:'Lead-207',abundance:22.1,stable:true},
        {mass:208,name:'Lead-208',abundance:52.4,stable:true}
    ]}
};

const elementSelect = document.getElementById('element-select');
const elementHeader = document.getElementById('element-header');
const isotopesList = document.getElementById('isotopes-list');
const darkToggle = document.getElementById('dark-toggle');

Object.keys(isotopeData).forEach(symbol => {
    const opt = document.createElement('option');
    opt.value = symbol;
    opt.textContent = `${symbol} - ${isotopeData[symbol].name}`;
    elementSelect.appendChild(opt);
});

function renderIsotopes(symbol) {
    const data = isotopeData[symbol];
    
    elementHeader.innerHTML = `
        <h2 style="text-align:center;margin-bottom:10px;">${data.name} (${symbol})</h2>
        <p style="text-align:center;color:#888;">Atomic Number: ${data.z} | ${data.isotopes.length} isotopes shown</p>
    `;
    
    isotopesList.innerHTML = data.isotopes.map(iso => `
        <div class="isotope-card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
                <div>
                    <span class="mass-number">${iso.mass}</span>
                    <span style="color:#666;margin-left:10px;">${iso.name}</span>
                </div>
                <div style="text-align:right;">
                    <div class="abundance">Abundance: ${typeof iso.abundance === 'number' ? iso.abundance + '%' : iso.abundance}</div>
                    ${iso.stable 
                        ? '<div class="stable">Stable</div>' 
                        : `<div class="half-life">Half-life: ${iso.halfLife}</div>`
                    }
                </div>
            </div>
        </div>
    `).join('');
}

elementSelect.addEventListener('change', () => renderIsotopes(elementSelect.value));

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

renderIsotopes('H');
