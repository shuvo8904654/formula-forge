const elements = [
    {n:1,s:"H",name:"Hydrogen",m:1.008,cat:"nonmetal"},
    {n:2,s:"He",name:"Helium",m:4.003,cat:"noble"},
    {n:3,s:"Li",name:"Lithium",m:6.941,cat:"alkali"},
    {n:4,s:"Be",name:"Beryllium",m:9.012,cat:"alkaline"},
    {n:5,s:"B",name:"Boron",m:10.81,cat:"metalloid"},
    {n:6,s:"C",name:"Carbon",m:12.01,cat:"nonmetal"},
    {n:7,s:"N",name:"Nitrogen",m:14.01,cat:"nonmetal"},
    {n:8,s:"O",name:"Oxygen",m:16.00,cat:"nonmetal"},
    {n:9,s:"F",name:"Fluorine",m:19.00,cat:"halogen"},
    {n:10,s:"Ne",name:"Neon",m:20.18,cat:"noble"},
    {n:11,s:"Na",name:"Sodium",m:22.99,cat:"alkali"},
    {n:12,s:"Mg",name:"Magnesium",m:24.31,cat:"alkaline"},
    {n:13,s:"Al",name:"Aluminum",m:26.98,cat:"post-transition"},
    {n:14,s:"Si",name:"Silicon",m:28.09,cat:"metalloid"},
    {n:15,s:"P",name:"Phosphorus",m:30.97,cat:"nonmetal"},
    {n:16,s:"S",name:"Sulfur",m:32.07,cat:"nonmetal"},
    {n:17,s:"Cl",name:"Chlorine",m:35.45,cat:"halogen"},
    {n:18,s:"Ar",name:"Argon",m:39.95,cat:"noble"},
    {n:19,s:"K",name:"Potassium",m:39.10,cat:"alkali"},
    {n:20,s:"Ca",name:"Calcium",m:40.08,cat:"alkaline"},
    {n:21,s:"Sc",name:"Scandium",m:44.96,cat:"transition"},
    {n:22,s:"Ti",name:"Titanium",m:47.87,cat:"transition"},
    {n:23,s:"V",name:"Vanadium",m:50.94,cat:"transition"},
    {n:24,s:"Cr",name:"Chromium",m:52.00,cat:"transition"},
    {n:25,s:"Mn",name:"Manganese",m:54.94,cat:"transition"},
    {n:26,s:"Fe",name:"Iron",m:55.85,cat:"transition"},
    {n:27,s:"Co",name:"Cobalt",m:58.93,cat:"transition"},
    {n:28,s:"Ni",name:"Nickel",m:58.69,cat:"transition"},
    {n:29,s:"Cu",name:"Copper",m:63.55,cat:"transition"},
    {n:30,s:"Zn",name:"Zinc",m:65.38,cat:"transition"},
    {n:31,s:"Ga",name:"Gallium",m:69.72,cat:"post-transition"},
    {n:32,s:"Ge",name:"Germanium",m:72.63,cat:"metalloid"},
    {n:33,s:"As",name:"Arsenic",m:74.92,cat:"metalloid"},
    {n:34,s:"Se",name:"Selenium",m:78.97,cat:"nonmetal"},
    {n:35,s:"Br",name:"Bromine",m:79.90,cat:"halogen"},
    {n:36,s:"Kr",name:"Krypton",m:83.80,cat:"noble"},
    {n:37,s:"Rb",name:"Rubidium",m:85.47,cat:"alkali"},
    {n:38,s:"Sr",name:"Strontium",m:87.62,cat:"alkaline"},
    {n:39,s:"Y",name:"Yttrium",m:88.91,cat:"transition"},
    {n:40,s:"Zr",name:"Zirconium",m:91.22,cat:"transition"},
    {n:41,s:"Nb",name:"Niobium",m:92.91,cat:"transition"},
    {n:42,s:"Mo",name:"Molybdenum",m:95.95,cat:"transition"},
    {n:43,s:"Tc",name:"Technetium",m:98,cat:"transition"},
    {n:44,s:"Ru",name:"Ruthenium",m:101.1,cat:"transition"},
    {n:45,s:"Rh",name:"Rhodium",m:102.9,cat:"transition"},
    {n:46,s:"Pd",name:"Palladium",m:106.4,cat:"transition"},
    {n:47,s:"Ag",name:"Silver",m:107.9,cat:"transition"},
    {n:48,s:"Cd",name:"Cadmium",m:112.4,cat:"transition"},
    {n:49,s:"In",name:"Indium",m:114.8,cat:"post-transition"},
    {n:50,s:"Sn",name:"Tin",m:118.7,cat:"post-transition"},
    {n:51,s:"Sb",name:"Antimony",m:121.8,cat:"metalloid"},
    {n:52,s:"Te",name:"Tellurium",m:127.6,cat:"metalloid"},
    {n:53,s:"I",name:"Iodine",m:126.9,cat:"halogen"},
    {n:54,s:"Xe",name:"Xenon",m:131.3,cat:"noble"},
    {n:55,s:"Cs",name:"Cesium",m:132.9,cat:"alkali"},
    {n:56,s:"Ba",name:"Barium",m:137.3,cat:"alkaline"},
    {n:57,s:"La",name:"Lanthanum",m:138.9,cat:"lanthanide"},
    {n:58,s:"Ce",name:"Cerium",m:140.1,cat:"lanthanide"},
    {n:59,s:"Pr",name:"Praseodymium",m:140.9,cat:"lanthanide"},
    {n:60,s:"Nd",name:"Neodymium",m:144.2,cat:"lanthanide"},
    {n:61,s:"Pm",name:"Promethium",m:145,cat:"lanthanide"},
    {n:62,s:"Sm",name:"Samarium",m:150.4,cat:"lanthanide"},
    {n:63,s:"Eu",name:"Europium",m:152.0,cat:"lanthanide"},
    {n:64,s:"Gd",name:"Gadolinium",m:157.3,cat:"lanthanide"},
    {n:65,s:"Tb",name:"Terbium",m:158.9,cat:"lanthanide"},
    {n:66,s:"Dy",name:"Dysprosium",m:162.5,cat:"lanthanide"},
    {n:67,s:"Ho",name:"Holmium",m:164.9,cat:"lanthanide"},
    {n:68,s:"Er",name:"Erbium",m:167.3,cat:"lanthanide"},
    {n:69,s:"Tm",name:"Thulium",m:168.9,cat:"lanthanide"},
    {n:70,s:"Yb",name:"Ytterbium",m:173.0,cat:"lanthanide"},
    {n:71,s:"Lu",name:"Lutetium",m:175.0,cat:"lanthanide"},
    {n:72,s:"Hf",name:"Hafnium",m:178.5,cat:"transition"},
    {n:73,s:"Ta",name:"Tantalum",m:180.9,cat:"transition"},
    {n:74,s:"W",name:"Tungsten",m:183.8,cat:"transition"},
    {n:75,s:"Re",name:"Rhenium",m:186.2,cat:"transition"},
    {n:76,s:"Os",name:"Osmium",m:190.2,cat:"transition"},
    {n:77,s:"Ir",name:"Iridium",m:192.2,cat:"transition"},
    {n:78,s:"Pt",name:"Platinum",m:195.1,cat:"transition"},
    {n:79,s:"Au",name:"Gold",m:197.0,cat:"transition"},
    {n:80,s:"Hg",name:"Mercury",m:200.6,cat:"transition"},
    {n:81,s:"Tl",name:"Thallium",m:204.4,cat:"post-transition"},
    {n:82,s:"Pb",name:"Lead",m:207.2,cat:"post-transition"},
    {n:83,s:"Bi",name:"Bismuth",m:209.0,cat:"post-transition"},
    {n:84,s:"Po",name:"Polonium",m:209,cat:"metalloid"},
    {n:85,s:"At",name:"Astatine",m:210,cat:"halogen"},
    {n:86,s:"Rn",name:"Radon",m:222,cat:"noble"},
    {n:87,s:"Fr",name:"Francium",m:223,cat:"alkali"},
    {n:88,s:"Ra",name:"Radium",m:226,cat:"alkaline"},
    {n:89,s:"Ac",name:"Actinium",m:227,cat:"actinide"},
    {n:90,s:"Th",name:"Thorium",m:232.0,cat:"actinide"},
    {n:91,s:"Pa",name:"Protactinium",m:231.0,cat:"actinide"},
    {n:92,s:"U",name:"Uranium",m:238.0,cat:"actinide"},
    {n:93,s:"Np",name:"Neptunium",m:237,cat:"actinide"},
    {n:94,s:"Pu",name:"Plutonium",m:244,cat:"actinide"},
    {n:95,s:"Am",name:"Americium",m:243,cat:"actinide"},
    {n:96,s:"Cm",name:"Curium",m:247,cat:"actinide"},
    {n:97,s:"Bk",name:"Berkelium",m:247,cat:"actinide"},
    {n:98,s:"Cf",name:"Californium",m:251,cat:"actinide"},
    {n:99,s:"Es",name:"Einsteinium",m:252,cat:"actinide"},
    {n:100,s:"Fm",name:"Fermium",m:257,cat:"actinide"}
];

const commonElements = ['H','C','N','O','S','P','Na','K','Ca','Mg','Fe','Cl','Br','I','F','Al','Si','Zn','Cu','Ag'];


let formula = [];
const formulaOutput = document.getElementById('formula-output');
const molarMassDisplay = document.getElementById('molar-mass');
const totalAtomsDisplay = document.getElementById('total-atoms');
const elementsUsedDisplay = document.getElementById('elements-used');
const compositionBars = document.getElementById('composition-bars');
const elementsGrid = document.getElementById('elements-grid');
const searchInput = document.getElementById('element-search');
const categorySelect = document.getElementById('category-select');
const darkToggle = document.getElementById('dark-toggle');
const clearBtn = document.getElementById('clear-btn');
const undoBtn = document.getElementById('undo-btn');

const colors = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#34495e','#16a085','#c0392b'];

function renderElementsPalette() {
    elementsGrid.innerHTML = '';
    elements.forEach(el => {
        const btn = document.createElement('button');
        btn.className = `element-btn ${el.cat}`;
        btn.dataset.symbol = el.s;
        btn.dataset.category = el.cat;
        btn.innerHTML = `<span class="number">${el.n}</span><span class="symbol">${el.s}</span>`;
        btn.title = el.name;
        btn.addEventListener('click', () => addElement(el.s));
        elementsGrid.appendChild(btn);
    });
}

function addElement(symbol) {
    if (formula.length > 0 && formula[formula.length - 1].symbol === symbol) {
        formula[formula.length - 1].count++;
    } else {
        formula.push({ symbol, count: 1 });
    }
    updateDisplay();
}

function removeElement(index) {
    if (formula[index].count > 1) {
        formula[index].count--;
    } else {
        formula.splice(index, 1);
    }
    updateDisplay();
}

function updateDisplay() {
    if (formula.length === 0) {
        formulaOutput.innerHTML = 'Click elements below to start';
        molarMassDisplay.textContent = '0 g/mol';
        totalAtomsDisplay.textContent = '0';
        elementsUsedDisplay.textContent = '0';
        compositionBars.innerHTML = '';
        return;
    }

    formulaOutput.innerHTML = '';
    formula.forEach((item, index) => {
        const token = document.createElement('span');
        token.className = 'element-token';
        token.innerHTML = item.count > 1 ? `${item.symbol}<sub>${item.count}</sub>` : item.symbol;
        token.title = 'Click to remove';
        token.addEventListener('click', () => removeElement(index));
        formulaOutput.appendChild(token);
    });

    let totalMass = 0;
    let totalAtoms = 0;
    const masses = {};

    formula.forEach(item => {
        const el = elements.find(e => e.s === item.symbol);
        if (el) {
            const mass = el.m * item.count;
            totalMass += mass;
            totalAtoms += item.count;
            masses[item.symbol] = (masses[item.symbol] || 0) + mass;
        }
    });

    molarMassDisplay.textContent = `${totalMass.toFixed(3)} g/mol`;
    totalAtomsDisplay.textContent = totalAtoms;
    elementsUsedDisplay.textContent = Object.keys(masses).length;

    compositionBars.innerHTML = '';
    Object.entries(masses).forEach(([symbol, mass], i) => {
        const percent = (mass / totalMass) * 100;
        const bar = document.createElement('div');
        bar.className = 'composition-bar';
        bar.innerHTML = `
            <span class="bar-label">${symbol}</span>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${percent}%; background: ${colors[i % colors.length]}"></div>
            </div>
            <span class="bar-percent">${percent.toFixed(1)}%</span>
        `;
        compositionBars.appendChild(bar);
    });
}

function parseFormula(formulaStr) {
    formula = [];
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    while ((match = regex.exec(formulaStr)) !== null) {
        if (match[1]) {
            const symbol = match[1];
            const count = parseInt(match[2]) || 1;
            const el = elements.find(e => e.s === symbol);
            if (el) {
                formula.push({ symbol, count });
            }
        }
    }
    updateDisplay();
}

function filterElements() {
    const search = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    document.querySelectorAll('.element-btn').forEach(btn => {
        const symbol = btn.dataset.symbol.toLowerCase();
        const cat = btn.dataset.category;
        const el = elements.find(e => e.s.toLowerCase() === symbol);
        const name = el ? el.name.toLowerCase() : '';

        let matchSearch = symbol.includes(search) || name.includes(search);
        let matchCategory = category === 'all' ||
            (category === 'common' && commonElements.includes(btn.dataset.symbol)) ||
            (category === 'metal' && ['alkali','alkaline','transition','post-transition','lanthanide','actinide'].includes(cat)) ||
            cat === category;

        btn.classList.toggle('hidden', !(matchSearch && matchCategory));
    });
}

clearBtn.addEventListener('click', () => {
    formula = [];
    updateDisplay();
});

undoBtn.addEventListener('click', () => {
    if (formula.length > 0) {
        if (formula[formula.length - 1].count > 1) {
            formula[formula.length - 1].count--;
        } else {
            formula.pop();
        }
        updateDisplay();
    }
});

document.querySelectorAll('.compound-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        parseFormula(btn.dataset.formula);
    });
});

searchInput.addEventListener('input', filterElements);
categorySelect.addEventListener('change', filterElements);

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

renderElementsPalette();
updateDisplay();
