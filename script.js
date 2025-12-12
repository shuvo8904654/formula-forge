const elements = [
    {n:1,s:"H",name:"Hydrogen",m:1.008,cat:"nonmetal",row:1,col:1,en:2.20,r:53,mp:14,bp:20,ec:"1s1",fact:"Makes up 75% of all normal matter in the universe"},
    {n:2,s:"He",name:"Helium",m:4.003,cat:"noble",row:1,col:18,en:null,r:31,mp:1,bp:4,ec:"1s2",fact:"Second most abundant element in the observable universe"},
    {n:3,s:"Li",name:"Lithium",m:6.941,cat:"alkali",row:2,col:1,en:0.98,r:167,mp:454,bp:1615,ec:"[He] 2s1",fact:"Lightest metal and least dense solid element"},
    {n:4,s:"Be",name:"Beryllium",m:9.012,cat:"alkaline",row:2,col:2,en:1.57,r:112,mp:1560,bp:2744,ec:"[He] 2s2",fact:"Transparent to X-rays, used in X-ray windows"},
    {n:5,s:"B",name:"Boron",m:10.81,cat:"metalloid",row:2,col:13,en:2.04,r:87,mp:2349,bp:4200,ec:"[He] 2s2 2p1",fact:"Essential for plant growth"},
    {n:6,s:"C",name:"Carbon",m:12.01,cat:"nonmetal",row:2,col:14,en:2.55,r:77,mp:3823,bp:4098,ec:"[He] 2s2 2p2",fact:"Forms more compounds than any other element"},
    {n:7,s:"N",name:"Nitrogen",m:14.01,cat:"nonmetal",row:2,col:15,en:3.04,r:75,mp:63,bp:77,ec:"[He] 2s2 2p3",fact:"Makes up 78% of Earth's atmosphere"},
    {n:8,s:"O",name:"Oxygen",m:16.00,cat:"nonmetal",row:2,col:16,en:3.44,r:73,mp:54,bp:90,ec:"[He] 2s2 2p4",fact:"Most abundant element in Earth's crust"},
    {n:9,s:"F",name:"Fluorine",m:19.00,cat:"halogen",row:2,col:17,en:3.98,r:71,mp:53,bp:85,ec:"[He] 2s2 2p5",fact:"Most reactive and electronegative element"},
    {n:10,s:"Ne",name:"Neon",m:20.18,cat:"noble",row:2,col:18,en:null,r:69,mp:25,bp:27,ec:"[He] 2s2 2p6",fact:"Produces the familiar red-orange glow in signs"},
    {n:11,s:"Na",name:"Sodium",m:22.99,cat:"alkali",row:3,col:1,en:0.93,r:190,mp:371,bp:1156,ec:"[Ne] 3s1",fact:"Explodes violently when dropped in water"},
    {n:12,s:"Mg",name:"Magnesium",m:24.31,cat:"alkaline",row:3,col:2,en:1.31,r:145,mp:923,bp:1363,ec:"[Ne] 3s2",fact:"Burns with a brilliant white light"},
    {n:13,s:"Al",name:"Aluminum",m:26.98,cat:"post-transition",row:3,col:13,en:1.61,r:118,mp:933,bp:2792,ec:"[Ne] 3s2 3p1",fact:"Most abundant metal in Earth's crust"},
    {n:14,s:"Si",name:"Silicon",m:28.09,cat:"metalloid",row:3,col:14,en:1.90,r:111,mp:1687,bp:3538,ec:"[Ne] 3s2 3p2",fact:"Second most abundant element in Earth's crust"},
    {n:15,s:"P",name:"Phosphorus",m:30.97,cat:"nonmetal",row:3,col:15,en:2.19,r:106,mp:317,bp:554,ec:"[Ne] 3s2 3p3",fact:"Glows in the dark due to chemiluminescence"},
    {n:16,s:"S",name:"Sulfur",m:32.07,cat:"nonmetal",row:3,col:16,en:2.58,r:102,mp:388,bp:718,ec:"[Ne] 3s2 3p4",fact:"Known since ancient times as brimstone"},
    {n:17,s:"Cl",name:"Chlorine",m:35.45,cat:"halogen",row:3,col:17,en:3.16,r:99,mp:172,bp:239,ec:"[Ne] 3s2 3p5",fact:"Used to purify drinking water worldwide"},
    {n:18,s:"Ar",name:"Argon",m:39.95,cat:"noble",row:3,col:18,en:null,r:97,mp:84,bp:87,ec:"[Ne] 3s2 3p6",fact:"Third most abundant gas in Earth's atmosphere"},
    {n:19,s:"K",name:"Potassium",m:39.10,cat:"alkali",row:4,col:1,en:0.82,r:243,mp:337,bp:1032,ec:"[Ar] 4s1",fact:"Essential for nerve function in humans"},
    {n:20,s:"Ca",name:"Calcium",m:40.08,cat:"alkaline",row:4,col:2,en:1.00,r:194,mp:1115,bp:1757,ec:"[Ar] 4s2",fact:"Most abundant metal in the human body"},
    {n:21,s:"Sc",name:"Scandium",m:44.96,cat:"transition",row:4,col:3,en:1.36,r:184,mp:1814,bp:3109,ec:"[Ar] 3d1 4s2",fact:"Used in aerospace industry for lightweight alloys"},
    {n:22,s:"Ti",name:"Titanium",m:47.87,cat:"transition",row:4,col:4,en:1.54,r:176,mp:1941,bp:3560,ec:"[Ar] 3d2 4s2",fact:"As strong as steel but 45% lighter"},
    {n:23,s:"V",name:"Vanadium",m:50.94,cat:"transition",row:4,col:5,en:1.63,r:171,mp:2183,bp:3680,ec:"[Ar] 3d3 4s2",fact:"Named after the Norse goddess of beauty"},
    {n:24,s:"Cr",name:"Chromium",m:52.00,cat:"transition",row:4,col:6,en:1.66,r:166,mp:2180,bp:2944,ec:"[Ar] 3d5 4s1",fact:"Gives rubies their red color"},
    {n:25,s:"Mn",name:"Manganese",m:54.94,cat:"transition",row:4,col:7,en:1.55,r:161,mp:1519,bp:2334,ec:"[Ar] 3d5 4s2",fact:"Essential for photosynthesis in plants"},
    {n:26,s:"Fe",name:"Iron",m:55.85,cat:"transition",row:4,col:8,en:1.83,r:156,mp:1811,bp:3134,ec:"[Ar] 3d6 4s2",fact:"Core of Earth is mostly iron"},
    {n:27,s:"Co",name:"Cobalt",m:58.93,cat:"transition",row:4,col:9,en:1.88,r:152,mp:1768,bp:3200,ec:"[Ar] 3d7 4s2",fact:"Used to create the blue color in glass"},
    {n:28,s:"Ni",name:"Nickel",m:58.69,cat:"transition",row:4,col:10,en:1.91,r:149,mp:1728,bp:3186,ec:"[Ar] 3d8 4s2",fact:"US nickel coins contain 75% copper"},
    {n:29,s:"Cu",name:"Copper",m:63.55,cat:"transition",row:4,col:11,en:1.90,r:145,mp:1358,bp:2835,ec:"[Ar] 3d10 4s1",fact:"First metal used by humans over 10,000 years ago"},
    {n:30,s:"Zn",name:"Zinc",m:65.38,cat:"transition",row:4,col:12,en:1.65,r:142,mp:693,bp:1180,ec:"[Ar] 3d10 4s2",fact:"Essential for immune system function"},
    {n:31,s:"Ga",name:"Gallium",m:69.72,cat:"post-transition",row:4,col:13,en:1.81,r:136,mp:303,bp:2477,ec:"[Ar] 3d10 4s2 4p1",fact:"Melts in your hand at body temperature"},
    {n:32,s:"Ge",name:"Germanium",m:72.63,cat:"metalloid",row:4,col:14,en:2.01,r:125,mp:1211,bp:3106,ec:"[Ar] 3d10 4s2 4p2",fact:"Used in early transistors before silicon"},
    {n:33,s:"As",name:"Arsenic",m:74.92,cat:"metalloid",row:4,col:15,en:2.18,r:114,mp:1090,bp:887,ec:"[Ar] 3d10 4s2 4p3",fact:"Famous as a poison throughout history"},
    {n:34,s:"Se",name:"Selenium",m:78.97,cat:"nonmetal",row:4,col:16,en:2.55,r:103,mp:494,bp:958,ec:"[Ar] 3d10 4s2 4p4",fact:"Named after the Moon (Selene in Greek)"},
    {n:35,s:"Br",name:"Bromine",m:79.90,cat:"halogen",row:4,col:17,en:2.96,r:94,mp:266,bp:332,ec:"[Ar] 3d10 4s2 4p5",fact:"Only non-metal that is liquid at room temperature"},
    {n:36,s:"Kr",name:"Krypton",m:83.80,cat:"noble",row:4,col:18,en:3.00,r:88,mp:116,bp:120,ec:"[Ar] 3d10 4s2 4p6",fact:"Superman's home planet was named after this"},
    {n:37,s:"Rb",name:"Rubidium",m:85.47,cat:"alkali",row:5,col:1,en:0.82,r:265,mp:312,bp:961,ec:"[Kr] 5s1",fact:"Ignites spontaneously in air"},
    {n:38,s:"Sr",name:"Strontium",m:87.62,cat:"alkaline",row:5,col:2,en:0.95,r:219,mp:1050,bp:1655,ec:"[Kr] 5s2",fact:"Gives fireworks their red color"},
    {n:39,s:"Y",name:"Yttrium",m:88.91,cat:"transition",row:5,col:3,en:1.22,r:212,mp:1799,bp:3609,ec:"[Kr] 4d1 5s2",fact:"Used in LED lights and TV screens"},
    {n:40,s:"Zr",name:"Zirconium",m:91.22,cat:"transition",row:5,col:4,en:1.33,r:206,mp:2128,bp:4682,ec:"[Kr] 4d2 5s2",fact:"Highly resistant to corrosion"},
    {n:41,s:"Nb",name:"Niobium",m:92.91,cat:"transition",row:5,col:5,en:1.60,r:198,mp:2750,bp:5017,ec:"[Kr] 4d4 5s1",fact:"Used in superconducting magnets"},
    {n:42,s:"Mo",name:"Molybdenum",m:95.95,cat:"transition",row:5,col:6,en:2.16,r:190,mp:2896,bp:4912,ec:"[Kr] 4d5 5s1",fact:"Essential trace element for all life"},
    {n:43,s:"Tc",name:"Technetium",m:98,cat:"transition",row:5,col:7,en:1.90,r:183,mp:2430,bp:4538,ec:"[Kr] 4d5 5s2",fact:"First artificially produced element",radio:true},
    {n:44,s:"Ru",name:"Ruthenium",m:101.1,cat:"transition",row:5,col:8,en:2.20,r:178,mp:2607,bp:4423,ec:"[Kr] 4d7 5s1",fact:"One of the rarest elements on Earth"},
    {n:45,s:"Rh",name:"Rhodium",m:102.9,cat:"transition",row:5,col:9,en:2.28,r:173,mp:2237,bp:3968,ec:"[Kr] 4d8 5s1",fact:"Most expensive precious metal"},
    {n:46,s:"Pd",name:"Palladium",m:106.4,cat:"transition",row:5,col:10,en:2.20,r:169,mp:1828,bp:3236,ec:"[Kr] 4d10",fact:"Can absorb 900 times its volume in hydrogen"},
    {n:47,s:"Ag",name:"Silver",m:107.9,cat:"transition",row:5,col:11,en:1.93,r:165,mp:1235,bp:2435,ec:"[Kr] 4d10 5s1",fact:"Best conductor of electricity"},
    {n:48,s:"Cd",name:"Cadmium",m:112.4,cat:"transition",row:5,col:12,en:1.69,r:161,mp:594,bp:1040,ec:"[Kr] 4d10 5s2",fact:"Used in rechargeable batteries"},
    {n:49,s:"In",name:"Indium",m:114.8,cat:"post-transition",row:5,col:13,en:1.78,r:156,mp:430,bp:2345,ec:"[Kr] 4d10 5s2 5p1",fact:"Makes a crying sound when bent"},
    {n:50,s:"Sn",name:"Tin",m:118.7,cat:"post-transition",row:5,col:14,en:1.96,r:145,mp:505,bp:2875,ec:"[Kr] 4d10 5s2 5p2",fact:"Known since ancient times, used in bronze"},
    {n:51,s:"Sb",name:"Antimony",m:121.8,cat:"metalloid",row:5,col:15,en:2.05,r:133,mp:904,bp:1860,ec:"[Kr] 4d10 5s2 5p3",fact:"Used in flame retardants"},
    {n:52,s:"Te",name:"Tellurium",m:127.6,cat:"metalloid",row:5,col:16,en:2.10,r:123,mp:723,bp:1261,ec:"[Kr] 4d10 5s2 5p4",fact:"Rarer than gold in Earth's crust"},
    {n:53,s:"I",name:"Iodine",m:126.9,cat:"halogen",row:5,col:17,en:2.66,r:115,mp:387,bp:457,ec:"[Kr] 4d10 5s2 5p5",fact:"Essential for thyroid function"},
    {n:54,s:"Xe",name:"Xenon",m:131.3,cat:"noble",row:5,col:18,en:2.60,r:108,mp:161,bp:165,ec:"[Kr] 4d10 5s2 5p6",fact:"Used in car headlights and camera flashes"},
    {n:55,s:"Cs",name:"Cesium",m:132.9,cat:"alkali",row:6,col:1,en:0.79,r:298,mp:302,bp:944,ec:"[Xe] 6s1",fact:"Used in atomic clocks for precise timekeeping"},
    {n:56,s:"Ba",name:"Barium",m:137.3,cat:"alkaline",row:6,col:2,en:0.89,r:253,mp:1000,bp:2170,ec:"[Xe] 6s2",fact:"Gives fireworks their green color"},
    {n:57,s:"La",name:"Lanthanum",m:138.9,cat:"lanthanide",row:9,col:3,en:1.10,r:195,mp:1193,bp:3737,ec:"[Xe] 5d1 6s2",fact:"Used in hybrid car batteries"},
    {n:58,s:"Ce",name:"Cerium",m:140.1,cat:"lanthanide",row:9,col:4,en:1.12,r:185,mp:1068,bp:3716,ec:"[Xe] 4f1 5d1 6s2",fact:"Most abundant rare earth element"},
    {n:59,s:"Pr",name:"Praseodymium",m:140.9,cat:"lanthanide",row:9,col:5,en:1.13,r:247,mp:1208,bp:3793,ec:"[Xe] 4f3 6s2",fact:"Used to create strong permanent magnets"},
    {n:60,s:"Nd",name:"Neodymium",m:144.2,cat:"lanthanide",row:9,col:6,en:1.14,r:206,mp:1297,bp:3347,ec:"[Xe] 4f4 6s2",fact:"Makes the strongest permanent magnets"},
    {n:61,s:"Pm",name:"Promethium",m:145,cat:"lanthanide",row:9,col:7,en:1.13,r:205,mp:1315,bp:3273,ec:"[Xe] 4f5 6s2",fact:"Only radioactive rare earth element",radio:true},
    {n:62,s:"Sm",name:"Samarium",m:150.4,cat:"lanthanide",row:9,col:8,en:1.17,r:238,mp:1345,bp:2067,ec:"[Xe] 4f6 6s2",fact:"Used in cancer treatment"},
    {n:63,s:"Eu",name:"Europium",m:152.0,cat:"lanthanide",row:9,col:9,en:1.20,r:231,mp:1099,bp:1802,ec:"[Xe] 4f7 6s2",fact:"Used in Euro banknotes as anti-forgery measure"},
    {n:64,s:"Gd",name:"Gadolinium",m:157.3,cat:"lanthanide",row:9,col:10,en:1.20,r:233,mp:1585,bp:3546,ec:"[Xe] 4f7 5d1 6s2",fact:"Used as contrast agent in MRI scans"},
    {n:65,s:"Tb",name:"Terbium",m:158.9,cat:"lanthanide",row:9,col:11,en:1.20,r:225,mp:1629,bp:3503,ec:"[Xe] 4f9 6s2",fact:"Used in green phosphors for displays"},
    {n:66,s:"Dy",name:"Dysprosium",m:162.5,cat:"lanthanide",row:9,col:12,en:1.22,r:228,mp:1680,bp:2840,ec:"[Xe] 4f10 6s2",fact:"Has highest magnetic strength of any element"},
    {n:67,s:"Ho",name:"Holmium",m:164.9,cat:"lanthanide",row:9,col:13,en:1.23,r:226,mp:1734,bp:2993,ec:"[Xe] 4f11 6s2",fact:"Has the highest magnetic moment"},
    {n:68,s:"Er",name:"Erbium",m:167.3,cat:"lanthanide",row:9,col:14,en:1.24,r:226,mp:1802,bp:3141,ec:"[Xe] 4f12 6s2",fact:"Used in fiber optic communications"},
    {n:69,s:"Tm",name:"Thulium",m:168.9,cat:"lanthanide",row:9,col:15,en:1.25,r:222,mp:1818,bp:2223,ec:"[Xe] 4f13 6s2",fact:"Rarest naturally occurring lanthanide"},
    {n:70,s:"Yb",name:"Ytterbium",m:173.0,cat:"lanthanide",row:9,col:16,en:1.10,r:222,mp:1097,bp:1469,ec:"[Xe] 4f14 6s2",fact:"Used in portable X-ray machines"},
    {n:71,s:"Lu",name:"Lutetium",m:175.0,cat:"lanthanide",row:9,col:17,en:1.27,r:217,mp:1925,bp:3675,ec:"[Xe] 4f14 5d1 6s2",fact:"Most expensive lanthanide"},
    {n:72,s:"Hf",name:"Hafnium",m:178.5,cat:"transition",row:6,col:4,en:1.30,r:208,mp:2506,bp:4876,ec:"[Xe] 4f14 5d2 6s2",fact:"Used in nuclear reactor control rods"},
    {n:73,s:"Ta",name:"Tantalum",m:180.9,cat:"transition",row:6,col:5,en:1.50,r:200,mp:3290,bp:5731,ec:"[Xe] 4f14 5d3 6s2",fact:"Used in capacitors in smartphones"},
    {n:74,s:"W",name:"Tungsten",m:183.8,cat:"transition",row:6,col:6,en:2.36,r:193,mp:3695,bp:5828,ec:"[Xe] 4f14 5d4 6s2",fact:"Highest melting point of all elements"},
    {n:75,s:"Re",name:"Rhenium",m:186.2,cat:"transition",row:6,col:7,en:1.90,r:188,mp:3459,bp:5869,ec:"[Xe] 4f14 5d5 6s2",fact:"Last stable element to be discovered"},
    {n:76,s:"Os",name:"Osmium",m:190.2,cat:"transition",row:6,col:8,en:2.20,r:185,mp:3306,bp:5285,ec:"[Xe] 4f14 5d6 6s2",fact:"Densest naturally occurring element"},
    {n:77,s:"Ir",name:"Iridium",m:192.2,cat:"transition",row:6,col:9,en:2.20,r:180,mp:2719,bp:4701,ec:"[Xe] 4f14 5d7 6s2",fact:"Most corrosion-resistant metal"},
    {n:78,s:"Pt",name:"Platinum",m:195.1,cat:"transition",row:6,col:10,en:2.28,r:177,mp:2041,bp:4098,ec:"[Xe] 4f14 5d9 6s1",fact:"Used in catalytic converters"},
    {n:79,s:"Au",name:"Gold",m:197.0,cat:"transition",row:6,col:11,en:2.54,r:174,mp:1337,bp:3129,ec:"[Xe] 4f14 5d10 6s1",fact:"All gold on Earth came from meteorites"},
    {n:80,s:"Hg",name:"Mercury",m:200.6,cat:"transition",row:6,col:12,en:2.00,r:171,mp:234,bp:630,ec:"[Xe] 4f14 5d10 6s2",fact:"Only metal that is liquid at room temperature"},
    {n:81,s:"Tl",name:"Thallium",m:204.4,cat:"post-transition",row:6,col:13,en:1.62,r:156,mp:577,bp:1746,ec:"[Xe] 4f14 5d10 6s2 6p1",fact:"Once used as rat poison"},
    {n:82,s:"Pb",name:"Lead",m:207.2,cat:"post-transition",row:6,col:14,en:2.33,r:154,mp:601,bp:2022,ec:"[Xe] 4f14 5d10 6s2 6p2",fact:"Romans used it for plumbing"},
    {n:83,s:"Bi",name:"Bismuth",m:209.0,cat:"post-transition",row:6,col:15,en:2.02,r:143,mp:545,bp:1837,ec:"[Xe] 4f14 5d10 6s2 6p3",fact:"Forms beautiful rainbow-colored crystals"},
    {n:84,s:"Po",name:"Polonium",m:209,cat:"metalloid",row:6,col:16,en:2.00,r:135,mp:527,bp:1235,ec:"[Xe] 4f14 5d10 6s2 6p4",fact:"Discovered by Marie Curie",radio:true},
    {n:85,s:"At",name:"Astatine",m:210,cat:"halogen",row:6,col:17,en:2.20,r:127,mp:575,bp:610,ec:"[Xe] 4f14 5d10 6s2 6p5",fact:"Rarest naturally occurring element",radio:true},
    {n:86,s:"Rn",name:"Radon",m:222,cat:"noble",row:6,col:18,en:2.20,r:120,mp:202,bp:211,ec:"[Xe] 4f14 5d10 6s2 6p6",fact:"Second leading cause of lung cancer",radio:true},
    {n:87,s:"Fr",name:"Francium",m:223,cat:"alkali",row:7,col:1,en:0.70,r:348,mp:300,bp:950,ec:"[Rn] 7s1",fact:"Most unstable naturally occurring element",radio:true},
    {n:88,s:"Ra",name:"Radium",m:226,cat:"alkaline",row:7,col:2,en:0.90,r:283,mp:973,bp:2010,ec:"[Rn] 7s2",fact:"Glows blue in the dark",radio:true},
    {n:89,s:"Ac",name:"Actinium",m:227,cat:"actinide",row:10,col:3,en:1.10,r:195,mp:1500,bp:3500,ec:"[Rn] 6d1 7s2",fact:"Glows blue due to radioactivity",radio:true},
    {n:90,s:"Th",name:"Thorium",m:232.0,cat:"actinide",row:10,col:4,en:1.30,r:180,mp:2115,bp:5061,ec:"[Rn] 6d2 7s2",fact:"Could power nuclear reactors for centuries",radio:true},
    {n:91,s:"Pa",name:"Protactinium",m:231.0,cat:"actinide",row:10,col:5,en:1.50,r:180,mp:1841,bp:4300,ec:"[Rn] 5f2 6d1 7s2",fact:"One of the rarest elements",radio:true},
    {n:92,s:"U",name:"Uranium",m:238.0,cat:"actinide",row:10,col:6,en:1.38,r:175,mp:1405,bp:4404,ec:"[Rn] 5f3 6d1 7s2",fact:"Powers nuclear reactors worldwide",radio:true},
    {n:93,s:"Np",name:"Neptunium",m:237,cat:"actinide",row:10,col:7,en:1.36,r:175,mp:917,bp:4175,ec:"[Rn] 5f4 6d1 7s2",fact:"First transuranium element discovered",radio:true},
    {n:94,s:"Pu",name:"Plutonium",m:244,cat:"actinide",row:10,col:8,en:1.28,r:175,mp:913,bp:3501,ec:"[Rn] 5f6 7s2",fact:"Used in nuclear weapons and spacecraft",radio:true},
    {n:95,s:"Am",name:"Americium",m:243,cat:"actinide",row:10,col:9,en:1.30,r:175,mp:1449,bp:2880,ec:"[Rn] 5f7 7s2",fact:"Found in smoke detectors",radio:true},
    {n:96,s:"Cm",name:"Curium",m:247,cat:"actinide",row:10,col:10,en:1.30,r:176,mp:1613,bp:3383,ec:"[Rn] 5f7 6d1 7s2",fact:"Named after Marie and Pierre Curie",radio:true},
    {n:97,s:"Bk",name:"Berkelium",m:247,cat:"actinide",row:10,col:11,en:1.30,r:176,mp:1259,bp:2900,ec:"[Rn] 5f9 7s2",fact:"Named after Berkeley, California",radio:true},
    {n:98,s:"Cf",name:"Californium",m:251,cat:"actinide",row:10,col:12,en:1.30,r:176,mp:1173,bp:1743,ec:"[Rn] 5f10 7s2",fact:"Used to start nuclear reactors",radio:true},
    {n:99,s:"Es",name:"Einsteinium",m:252,cat:"actinide",row:10,col:13,en:1.30,r:176,mp:1133,bp:1269,ec:"[Rn] 5f11 7s2",fact:"Discovered in hydrogen bomb debris",radio:true},
    {n:100,s:"Fm",name:"Fermium",m:257,cat:"actinide",row:10,col:14,en:1.30,r:176,mp:1800,bp:null,ec:"[Rn] 5f12 7s2",fact:"Named after Enrico Fermi",radio:true},
    {n:101,s:"Md",name:"Mendelevium",m:258,cat:"actinide",row:10,col:15,en:1.30,r:176,mp:1100,bp:null,ec:"[Rn] 5f13 7s2",fact:"Named after Dmitri Mendeleev",radio:true},
    {n:102,s:"No",name:"Nobelium",m:259,cat:"actinide",row:10,col:16,en:1.30,r:176,mp:1100,bp:null,ec:"[Rn] 5f14 7s2",fact:"Named after Alfred Nobel",radio:true},
    {n:103,s:"Lr",name:"Lawrencium",m:266,cat:"actinide",row:10,col:17,en:1.30,r:176,mp:1900,bp:null,ec:"[Rn] 5f14 7s2 7p1",fact:"Last of the actinide series",radio:true},
    {n:104,s:"Rf",name:"Rutherfordium",m:267,cat:"transition",row:7,col:4,en:null,r:157,mp:2400,bp:5800,ec:"[Rn] 5f14 6d2 7s2",fact:"Named after Ernest Rutherford",radio:true},
    {n:105,s:"Db",name:"Dubnium",m:268,cat:"transition",row:7,col:5,en:null,r:149,mp:null,bp:null,ec:"[Rn] 5f14 6d3 7s2",fact:"Named after Dubna, Russia",radio:true},
    {n:106,s:"Sg",name:"Seaborgium",m:269,cat:"transition",row:7,col:6,en:null,r:143,mp:null,bp:null,ec:"[Rn] 5f14 6d4 7s2",fact:"Named after Glenn Seaborg",radio:true},
    {n:107,s:"Bh",name:"Bohrium",m:270,cat:"transition",row:7,col:7,en:null,r:141,mp:null,bp:null,ec:"[Rn] 5f14 6d5 7s2",fact:"Named after Niels Bohr",radio:true},
    {n:108,s:"Hs",name:"Hassium",m:277,cat:"transition",row:7,col:8,en:null,r:134,mp:null,bp:null,ec:"[Rn] 5f14 6d6 7s2",fact:"Named after Hesse, Germany",radio:true},
    {n:109,s:"Mt",name:"Meitnerium",m:278,cat:"unknown",row:7,col:9,en:null,r:129,mp:null,bp:null,ec:"[Rn] 5f14 6d7 7s2",fact:"Named after Lise Meitner",radio:true},
    {n:110,s:"Ds",name:"Darmstadtium",m:281,cat:"unknown",row:7,col:10,en:null,r:128,mp:null,bp:null,ec:"[Rn] 5f14 6d8 7s2",fact:"Named after Darmstadt, Germany",radio:true},
    {n:111,s:"Rg",name:"Roentgenium",m:282,cat:"unknown",row:7,col:11,en:null,r:121,mp:null,bp:null,ec:"[Rn] 5f14 6d9 7s2",fact:"Named after Wilhelm Röntgen",radio:true},
    {n:112,s:"Cn",name:"Copernicium",m:285,cat:"transition",row:7,col:12,en:null,r:122,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2",fact:"Named after Nicolaus Copernicus",radio:true},
    {n:113,s:"Nh",name:"Nihonium",m:286,cat:"unknown",row:7,col:13,en:null,r:136,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2 7p1",fact:"First element discovered in Asia",radio:true},
    {n:114,s:"Fl",name:"Flerovium",m:289,cat:"unknown",row:7,col:14,en:null,r:143,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2 7p2",fact:"Named after Flerov Laboratory",radio:true},
    {n:115,s:"Mc",name:"Moscovium",m:290,cat:"unknown",row:7,col:15,en:null,r:162,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2 7p3",fact:"Named after Moscow",radio:true},
    {n:116,s:"Lv",name:"Livermorium",m:293,cat:"unknown",row:7,col:16,en:null,r:175,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2 7p4",fact:"Named after Livermore, California",radio:true},
    {n:117,s:"Ts",name:"Tennessine",m:294,cat:"unknown",row:7,col:17,en:null,r:165,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2 7p5",fact:"Named after Tennessee",radio:true},
    {n:118,s:"Og",name:"Oganesson",m:294,cat:"unknown",row:7,col:18,en:null,r:157,mp:null,bp:null,ec:"[Rn] 5f14 6d10 7s2 7p6",fact:"Heaviest element ever created",radio:true}
];

const container = document.getElementById('table-container');
const infoPanel = document.getElementById('element-info');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const viewMode = document.getElementById('view-mode');
const darkToggle = document.getElementById('dark-toggle');
const tempSlider = document.getElementById('temp-slider');
const tempValue = document.getElementById('temp-value');
const quizBtn = document.getElementById('quiz-btn');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const quizModal = document.getElementById('quiz-modal');
const compare1 = document.getElementById('compare1');
const compare2 = document.getElementById('compare2');
const compareResult = document.getElementById('compare-result');
const formulaInput = document.getElementById('formula-input');
const calcBtn = document.getElementById('calc-btn');
const calcResult = document.getElementById('calc-result');

let selectedElement = null;
let currentTemp = 298;
let quizScore = 0;
let quizTotal = 0;

const grid = [];
for (let r = 1; r <= 10; r++) {
    grid[r] = [];
    for (let c = 1; c <= 18; c++) {
        grid[r][c] = null;
    }
}
elements.forEach(el => { grid[el.row][el.col] = el; });

const catNames = {
    'alkali': 'Alkali Metal', 'alkaline': 'Alkaline Earth Metal',
    'transition': 'Transition Metal', 'post-transition': 'Post-Transition Metal',
    'metalloid': 'Metalloid', 'nonmetal': 'Nonmetal', 'halogen': 'Halogen',
    'noble': 'Noble Gas', 'lanthanide': 'Lanthanide', 'actinide': 'Actinide', 'unknown': 'Unknown'
};

function getState(el, temp) {
    if (!el.mp || !el.bp) return 'unknown';
    if (temp < el.mp) return 'solid';
    if (temp < el.bp) return 'liquid';
    return 'gas';
}

function createElementDiv(el) {
    const div = document.createElement('div');
    div.className = `element ${el.cat}`;
    if (el.radio) div.classList.add('radioactive');
    div.dataset.number = el.n;
    
    const state = getState(el, currentTemp);
    div.innerHTML = `
        <span class="number">${el.n}</span>
        <span class="symbol">${el.s}</span>
        <span class="name">${el.name}</span>
        <span class="state-indicator ${state}"></span>
    `;
    
    div.addEventListener('mouseenter', () => showInfo(el));
    div.addEventListener('click', () => showModal(el));
    return div;
}

function createPlaceholder() {
    const div = document.createElement('div');
    div.className = 'element placeholder';
    return div;
}

function buildTable() {
    container.innerHTML = '';
    
    for (let r = 1; r <= 7; r++) {
        for (let c = 1; c <= 18; c++) {
            if (r === 6 && c === 3) {
                const marker = document.createElement('div');
                marker.className = 'element lanthanide';
                marker.innerHTML = '<span class="symbol" style="font-size:10px">57-71</span>';
                container.appendChild(marker);
            } else if (r === 7 && c === 3) {
                const marker = document.createElement('div');
                marker.className = 'element actinide';
                marker.innerHTML = '<span class="symbol" style="font-size:10px">89-103</span>';
                container.appendChild(marker);
            } else if (grid[r][c]) {
                container.appendChild(createElementDiv(grid[r][c]));
            } else {
                container.appendChild(createPlaceholder());
            }
        }
    }
    
    const spacer = document.createElement('div');
    spacer.style.gridColumn = 'span 18';
    spacer.style.height = '10px';
    container.appendChild(spacer);
    
    for (let c = 1; c <= 18; c++) {
        if (c < 3) container.appendChild(createPlaceholder());
        else if (c <= 17 && grid[9][c]) container.appendChild(createElementDiv(grid[9][c]));
        else container.appendChild(createPlaceholder());
    }
    
    for (let c = 1; c <= 18; c++) {
        if (c < 3) container.appendChild(createPlaceholder());
        else if (c <= 17 && grid[10][c]) container.appendChild(createElementDiv(grid[10][c]));
        else container.appendChild(createPlaceholder());
    }
}

function showInfo(el) {
    const shells = el.ec.replace(/\[.*?\]\s*/, '').split(' ');
    infoPanel.innerHTML = `
        <h2>${el.name} (${el.s}) ${el.radio ? '[Radioactive]' : ''}</h2>
        <div class="detail-grid">
            <div class="detail-item"><span>Atomic Number:</span> ${el.n}</div>
            <div class="detail-item"><span>Atomic Mass:</span> ${el.m} u</div>
            <div class="detail-item"><span>Category:</span> ${catNames[el.cat]}</div>
            <div class="detail-item"><span>Electronegativity:</span> ${el.en || 'N/A'}</div>
            <div class="detail-item"><span>Atomic Radius:</span> ${el.r} pm</div>
            <div class="detail-item"><span>Melting Point:</span> ${el.mp || 'N/A'} K</div>
            <div class="detail-item"><span>Boiling Point:</span> ${el.bp || 'N/A'} K</div>
            <div class="detail-item"><span>Electron Config:</span> ${el.ec}</div>
        </div>
        <div class="fun-fact">${el.fact}</div>
        <a class="wiki-link" href="https://en.wikipedia.org/wiki/${el.name}" target="_blank">Learn more on Wikipedia</a>
    `;
}

function showModal(el) {
    modalBody.innerHTML = `
        <h2>${el.name} (${el.s})</h2>
        <p><strong>Atomic Number:</strong> ${el.n}</p>
        <p><strong>Atomic Mass:</strong> ${el.m} u</p>
        <p><strong>Category:</strong> ${catNames[el.cat]}</p>
        <p><strong>Electron Configuration:</strong> ${el.ec}</p>
        <p><strong>Electronegativity:</strong> ${el.en || 'N/A'}</p>
        <p><strong>Atomic Radius:</strong> ${el.r} pm</p>
        <p><strong>Melting Point:</strong> ${el.mp || 'N/A'} K</p>
        <p><strong>Boiling Point:</strong> ${el.bp || 'N/A'} K</p>
        <p><strong>Radioactive:</strong> ${el.radio ? 'Yes' : 'No'}</p>
        <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">
        <p><strong>Fun Fact:</strong> ${el.fact}</p>
        <a class="wiki-link" href="https://en.wikipedia.org/wiki/${el.name}" target="_blank">Read more on Wikipedia</a>
    `;
    modal.classList.add('active');
}

function filterElements() {
    const search = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;
    
    document.querySelectorAll('.element').forEach(div => {
        if (div.classList.contains('placeholder')) return;
        const num = div.dataset.number;
        if (!num) return;
        
        const el = elements.find(e => e.n == num);
        if (!el) return;
        
        const matchSearch = el.name.toLowerCase().includes(search) || 
                           el.s.toLowerCase().includes(search) ||
                           el.n.toString().includes(search);
        const matchCat = cat === 'all' || el.cat === cat;
        
        div.classList.toggle('dimmed', !(matchSearch && matchCat));
    });
}

function updateView() {
    const mode = viewMode.value;
    document.querySelectorAll('.element').forEach(div => {
        if (div.classList.contains('placeholder')) return;
        const num = div.dataset.number;
        if (!num) return;
        
        const el = elements.find(e => e.n == num);
        if (!el) return;
        
        div.style.filter = '';
        
        if (mode === 'electronegativity' && el.en) {
            const hue = 240 - (el.en / 4) * 240;
            div.style.filter = `hue-rotate(${hue}deg) saturate(1.5)`;
        } else if (mode === 'atomic-radius' && el.r) {
            const scale = el.r / 300;
            div.style.filter = `brightness(${0.5 + scale})`;
        }
    });
}

function updateTemperature() {
    currentTemp = parseInt(tempSlider.value);
    tempValue.textContent = currentTemp;
    
    document.querySelectorAll('.element .state-indicator').forEach(indicator => {
        const div = indicator.parentElement;
        const num = div.dataset.number;
        if (!num) return;
        
        const el = elements.find(e => e.n == num);
        if (!el) return;
        
        const state = getState(el, currentTemp);
        indicator.className = `state-indicator ${state}`;
    });
}

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

searchInput.addEventListener('input', filterElements);
categoryFilter.addEventListener('change', filterElements);
viewMode.addEventListener('change', updateView);
tempSlider.addEventListener('input', updateTemperature);

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('active');
        quizModal.classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
    if (e.target === quizModal) quizModal.classList.remove('active');
});

elements.forEach(el => {
    const opt1 = document.createElement('option');
    opt1.value = el.n;
    opt1.textContent = `${el.s} - ${el.name}`;
    compare1.appendChild(opt1);
    
    const opt2 = document.createElement('option');
    opt2.value = el.n;
    opt2.textContent = `${el.s} - ${el.name}`;
    compare2.appendChild(opt2);
});
compare2.value = '2';

function updateComparison() {
    const el1 = elements.find(e => e.n == compare1.value);
    const el2 = elements.find(e => e.n == compare2.value);
    
    if (!el1 || !el2) return;
    
    compareResult.innerHTML = `
        <div class="compare-card">
            <h4>${el1.name} (${el1.s})</h4>
            <p>Atomic Mass: ${el1.m} u</p>
            <p>Electronegativity: ${el1.en || 'N/A'}</p>
            <p>Atomic Radius: ${el1.r} pm</p>
            <p>Melting Point: ${el1.mp || 'N/A'} K</p>
            <p>Category: ${catNames[el1.cat]}</p>
        </div>
        <div class="compare-card">
            <h4>${el2.name} (${el2.s})</h4>
            <p>Atomic Mass: ${el2.m} u</p>
            <p>Electronegativity: ${el2.en || 'N/A'}</p>
            <p>Atomic Radius: ${el2.r} pm</p>
            <p>Melting Point: ${el2.mp || 'N/A'} K</p>
            <p>Category: ${catNames[el2.cat]}</p>
        </div>
    `;
}

compare1.addEventListener('change', updateComparison);
compare2.addEventListener('change', updateComparison);

function calculateMolarMass() {
    const formula = formulaInput.value.trim();
    if (!formula) {
        calcResult.textContent = '';
        return;
    }
    
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    let totalMass = 0;
    let breakdown = [];
    
    while ((match = regex.exec(formula)) !== null) {
        const symbol = match[1];
        const count = parseInt(match[2]) || 1;
        const el = elements.find(e => e.s === symbol);
        
        if (el) {
            totalMass += el.m * count;
            breakdown.push(`${symbol}${count > 1 ? count : ''}: ${(el.m * count).toFixed(3)}`);
        } else {
            calcResult.innerHTML = `<span style="color:#e74c3c">Unknown element: ${symbol}</span>`;
            return;
        }
    }
    
    if (breakdown.length === 0) {
        calcResult.innerHTML = `<span style="color:#e74c3c">Invalid formula</span>`;
        return;
    }
    
    calcResult.innerHTML = `
        <strong>Molar Mass: ${totalMass.toFixed(3)} g/mol</strong><br>
        <small>${breakdown.join(' + ')}</small>
    `;
}

calcBtn.addEventListener('click', calculateMolarMass);
formulaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateMolarMass();
});

const quizTypes = [
    { q: (el) => `What is the symbol for ${el.name}?`, a: (el) => el.s, opts: (el) => shuffleArray([el.s, ...getRandomSymbols(el, 3)]) },
    { q: (el) => `What element has atomic number ${el.n}?`, a: (el) => el.name, opts: (el) => shuffleArray([el.name, ...getRandomNames(el, 3)]) },
    { q: (el) => `What category does ${el.name} belong to?`, a: (el) => catNames[el.cat], opts: (el) => shuffleArray([catNames[el.cat], ...getRandomCategories(el.cat, 3)]) },
    { q: (el) => `Which element has the symbol ${el.s}?`, a: (el) => el.name, opts: (el) => shuffleArray([el.name, ...getRandomNames(el, 3)]) }
];

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function getRandomSymbols(exclude, count) {
    return elements.filter(e => e.n !== exclude.n).sort(() => Math.random() - 0.5).slice(0, count).map(e => e.s);
}

function getRandomNames(exclude, count) {
    return elements.filter(e => e.n !== exclude.n).sort(() => Math.random() - 0.5).slice(0, count).map(e => e.name);
}

function getRandomCategories(exclude, count) {
    const cats = Object.values(catNames).filter(c => c !== catNames[exclude]);
    return shuffleArray(cats).slice(0, count);
}

function startQuiz() {
    quizScore = 0;
    quizTotal = 0;
    nextQuestion();
    quizModal.classList.add('active');
}

function nextQuestion() {
    const el = elements[Math.floor(Math.random() * elements.length)];
    const type = quizTypes[Math.floor(Math.random() * quizTypes.length)];
    
    const question = type.q(el);
    const answer = type.a(el);
    const options = type.opts(el);
    
    document.getElementById('quiz-question').textContent = question;
    document.getElementById('quiz-score').textContent = `Score: ${quizScore}/${quizTotal}`;
    
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            quizTotal++;
            if (opt === answer) {
                quizScore++;
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
                optionsDiv.querySelectorAll('button').forEach(b => {
                    if (b.textContent === answer) b.classList.add('correct');
                });
            }
            document.getElementById('quiz-score').textContent = `Score: ${quizScore}/${quizTotal}`;
            
            setTimeout(() => {
                if (quizTotal < 10) {
                    nextQuestion();
                } else {
                    document.getElementById('quiz-question').textContent = `Quiz Complete!`;
                    optionsDiv.innerHTML = `<p style="grid-column: span 2;">Final Score: ${quizScore}/10</p>
                        <button onclick="startQuiz()" style="grid-column: span 2;">Play Again</button>`;
                }
            }, 1000);
        });
        optionsDiv.appendChild(btn);
    });
}

quizBtn.addEventListener('click', startQuiz);

container.addEventListener('keydown', (e) => {
    const allElements = Array.from(document.querySelectorAll('.element:not(.placeholder)'));
    if (!allElements.length) return;
    
    let currentIndex = selectedElement ? allElements.findIndex(el => el.dataset.number == selectedElement) : -1;
    
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % allElements.length;
    } else if (e.key === 'ArrowLeft') {
        currentIndex = currentIndex <= 0 ? allElements.length - 1 : currentIndex - 1;
    } else if (e.key === 'ArrowDown') {
        currentIndex = Math.min(currentIndex + 18, allElements.length - 1);
    } else if (e.key === 'ArrowUp') {
        currentIndex = Math.max(currentIndex - 18, 0);
    } else if (e.key === 'Enter' && selectedElement) {
        const el = elements.find(e => e.n == selectedElement);
        if (el) showModal(el);
        return;
    } else {
        return;
    }
    
    e.preventDefault();
    
    allElements.forEach(el => el.classList.remove('selected'));
    const newSelected = allElements[currentIndex];
    if (newSelected) {
        newSelected.classList.add('selected');
        selectedElement = newSelected.dataset.number;
        const el = elements.find(e => e.n == selectedElement);
        if (el) showInfo(el);
        newSelected.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

buildTable();
updateComparison();


const reactantsInput = document.getElementById('reactants');
const productsInput = document.getElementById('products');
const balanceBtn = document.getElementById('balance-btn');
const balanceResult = document.getElementById('balance-result');

function parseCompound(compound) {
    compound = compound.trim();
    const elements = {};
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(compound)) !== null) {
        if (match[1]) {
            const element = match[1];
            const count = parseInt(match[2]) || 1;
            elements[element] = (elements[element] || 0) + count;
        }
    }
    return elements;
}

function parseEquationSide(side) {
    const compounds = side.split('+').map(c => c.trim()).filter(c => c);
    return compounds.map(c => ({
        original: c,
        elements: parseCompound(c)
    }));
}

function multiplyElements(elements, coef) {
    const result = {};
    for (const el in elements) {
        result[el] = elements[el] * coef;
    }
    return result;
}

function countElements(compounds, coefficients) {
    const total = {};
    compounds.forEach((compound, i) => {
        const coef = coefficients[i];
        for (const el in compound.elements) {
            total[el] = (total[el] || 0) + compound.elements[el] * coef;
        }
    });
    return total;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function isBalanced(reactants, products, rCoefs, pCoefs) {
    const rCount = countElements(reactants, rCoefs);
    const pCount = countElements(products, pCoefs);
    
    const allElements = new Set([...Object.keys(rCount), ...Object.keys(pCount)]);
    for (const el of allElements) {
        if ((rCount[el] || 0) !== (pCount[el] || 0)) return false;
    }
    return true;
}

function balanceEquation(reactantsStr, productsStr) {
    const reactants = parseEquationSide(reactantsStr);
    const products = parseEquationSide(productsStr);
    
    if (reactants.length === 0 || products.length === 0) {
        return { success: false, error: 'Please enter both reactants and products' };
    }
    
    const totalCompounds = reactants.length + products.length;
    const maxCoef = 20;
    
    function* generateCoefficients(length, max) {
        if (length === 1) {
            for (let i = 1; i <= max; i++) yield [i];
        } else {
            for (let i = 1; i <= max; i++) {
                for (const rest of generateCoefficients(length - 1, max)) {
                    yield [i, ...rest];
                }
            }
        }
    }
    
    for (const allCoefs of generateCoefficients(totalCompounds, maxCoef)) {
        const rCoefs = allCoefs.slice(0, reactants.length);
        const pCoefs = allCoefs.slice(reactants.length);
        
        if (isBalanced(reactants, products, rCoefs, pCoefs)) {
            const gcdVal = gcd(...allCoefs);
            const simplifiedR = rCoefs.map(c => c / gcdVal);
            const simplifiedP = pCoefs.map(c => c / gcdVal);
            
            return {
                success: true,
                reactants: reactants.map((r, i) => ({ ...r, coefficient: simplifiedR[i] })),
                products: products.map((p, i) => ({ ...p, coefficient: simplifiedP[i] })),
                rCoefs: simplifiedR,
                pCoefs: simplifiedP
            };
        }
    }
    
    return { success: false, error: 'Could not balance this equation. Check your input.' };
}

function gcd(...nums) {
    const gcd2 = (a, b) => b === 0 ? a : gcd2(b, a % b);
    return nums.reduce((a, b) => gcd2(a, b));
}

function formatCompound(compound, coef) {
    const coefStr = coef === 1 ? '' : coef;
    return `${coefStr}${compound}`;
}

function formatSubscripts(str) {
    return str.replace(/(\d+)/g, '<sub>$1</sub>');
}

function displayBalancedEquation(result) {
    if (!result.success) {
        balanceResult.innerHTML = `<p class="error">${result.error}</p>`;
        return;
    }
    
    const reactantsSide = result.reactants
        .map(r => formatCompound(r.original, r.coefficient))
        .join(' + ');
    
    const productsSide = result.products
        .map(p => formatCompound(p.original, p.coefficient))
        .join(' + ');
    
    const equation = `${reactantsSide} → ${productsSide}`;
    
    const rCount = countElements(result.reactants.map(r => ({ elements: r.elements })), result.rCoefs);
    
    const elementCounts = Object.entries(rCount)
        .map(([el, count]) => `<span class="count-item">${el}: ${count}</span>`)
        .join('');
    
    balanceResult.innerHTML = `
        <div class="balanced-equation">${formatSubscripts(equation)}</div>
        <p class="success">Equation balanced!</p>
        <div class="element-count">${elementCounts}</div>
    `;
}

balanceBtn.addEventListener('click', () => {
    const result = balanceEquation(reactantsInput.value, productsInput.value);
    displayBalancedEquation(result);
});

reactantsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') balanceBtn.click();
});

productsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') balanceBtn.click();
});

document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        reactantsInput.value = btn.dataset.r;
        productsInput.value = btn.dataset.p;
        balanceBtn.click();
    });
});


const phConcentration = document.getElementById('ph-concentration');
const phCalcBtn = document.getElementById('ph-calc-btn');
const phResult = document.getElementById('ph-result');
const phMarker = document.getElementById('ph-marker');

phCalcBtn.addEventListener('click', () => {
    const conc = parseFloat(phConcentration.value);
    if (isNaN(conc) || conc <= 0) {
        phResult.innerHTML = '<span style="color:#e74c3c">Enter a valid positive concentration</span>';
        phMarker.style.display = 'none';
        return;
    }
    
    const ph = -Math.log10(conc);
    const clampedPh = Math.max(0, Math.min(14, ph));
    
    let acidBase = '';
    if (ph < 7) acidBase = '(Acidic)';
    else if (ph > 7) acidBase = '(Basic)';
    else acidBase = '(Neutral)';
    
    phResult.innerHTML = `<strong>pH = ${ph.toFixed(2)}</strong> ${acidBase}`;
    phMarker.style.display = 'block';
    phMarker.style.left = `${(clampedPh / 14) * 100}%`;
});

const dilutionCalcBtn = document.getElementById('dilution-calc-btn');
const dilutionResult = document.getElementById('dilution-result');

dilutionCalcBtn.addEventListener('click', () => {
    const c1 = parseFloat(document.getElementById('c1').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    
    const filled = [!isNaN(c1), !isNaN(v1), !isNaN(c2), !isNaN(v2)];
    const filledCount = filled.filter(Boolean).length;
    
    if (filledCount !== 3) {
        dilutionResult.innerHTML = '<span style="color:#e74c3c">Fill exactly 3 values</span>';
        return;
    }
    
    let result = '';
    if (isNaN(c1)) {
        const calc = (c2 * v2) / v1;
        result = `C1 = ${calc.toFixed(4)} M`;
    } else if (isNaN(v1)) {
        const calc = (c2 * v2) / c1;
        result = `V1 = ${calc.toFixed(2)} mL`;
    } else if (isNaN(c2)) {
        const calc = (c1 * v1) / v2;
        result = `C2 = ${calc.toFixed(4)} M`;
    } else {
        const calc = (c1 * v1) / c2;
        result = `V2 = ${calc.toFixed(2)} mL`;
    }
    
    dilutionResult.innerHTML = `<strong>${result}</strong>`;
});

const convertBtn = document.getElementById('convert-btn');
const convertResult = document.getElementById('convert-result');

convertBtn.addEventListener('click', () => {
    const value = parseFloat(document.getElementById('convert-value').value);
    const from = document.getElementById('convert-from').value;
    const to = document.getElementById('convert-to').value;
    const molarMass = parseFloat(document.getElementById('molar-mass-input').value);
    
    if (isNaN(value)) {
        convertResult.innerHTML = '<span style="color:#e74c3c">Enter a value</span>';
        return;
    }
    
    const toGrams = { g: 1, kg: 1000, mg: 0.001, mol: molarMass, mmol: molarMass / 1000 };
    const fromGrams = { g: 1, kg: 0.001, mg: 1000, mol: 1 / molarMass, mmol: 1000 / molarMass };
    
    if ((from === 'mol' || from === 'mmol' || to === 'mol' || to === 'mmol') && isNaN(molarMass)) {
        convertResult.innerHTML = '<span style="color:#e74c3c">Enter molar mass for mole conversions</span>';
        return;
    }
    
    const grams = value * toGrams[from];
    const result = grams * fromGrams[to];
    
    const units = { g: 'g', kg: 'kg', mg: 'mg', mol: 'mol', mmol: 'mmol' };
    convertResult.innerHTML = `<strong>${value} ${units[from]} = ${result.toFixed(4)} ${units[to]}</strong>`;
});

const molarityCalcBtn = document.getElementById('molarity-calc-btn');
const molarityResult = document.getElementById('molarity-result');

molarityCalcBtn.addEventListener('click', () => {
    const moles = parseFloat(document.getElementById('mol-solute').value);
    const volume = parseFloat(document.getElementById('vol-solution').value);
    
    if (isNaN(moles) || isNaN(volume) || volume === 0) {
        molarityResult.innerHTML = '<span style="color:#e74c3c">Enter valid values</span>';
        return;
    }
    
    const molarity = moles / volume;
    molarityResult.innerHTML = `<strong>Molarity = ${molarity.toFixed(4)} M</strong>`;
});


const electronSelect = document.getElementById('electron-element-select');
const shellsContainer = document.getElementById('shells-container');
const nucleusDisplay = document.getElementById('nucleus-display');
const electronConfigDisplay = document.getElementById('electron-config-display');

elements.forEach(el => {
    const opt = document.createElement('option');
    opt.value = el.n;
    opt.textContent = `${el.n}. ${el.name} (${el.s})`;
    electronSelect.appendChild(opt);
});

function getShellElectrons(atomicNumber) {
    const shells = [];
    const maxPerShell = [2, 8, 18, 32, 32, 18, 8];
    let remaining = atomicNumber;
    
    for (let i = 0; i < maxPerShell.length && remaining > 0; i++) {
        const inShell = Math.min(remaining, maxPerShell[i]);
        shells.push(inShell);
        remaining -= inShell;
    }
    return shells;
}

function renderElectronShells(atomicNumber) {
    const el = elements.find(e => e.n === atomicNumber);
    if (!el) return;
    
    nucleusDisplay.textContent = el.s;
    shellsContainer.innerHTML = '';
    
    const shells = getShellElectrons(atomicNumber);
    const baseSize = 70;
    const increment = 35;
    
    shells.forEach((electronCount, shellIndex) => {
        const shellDiv = document.createElement('div');
        shellDiv.className = 'electron-shell';
        const size = baseSize + (shellIndex * increment * 2);
        shellDiv.style.width = `${size}px`;
        shellDiv.style.height = `${size}px`;
        
        for (let i = 0; i < electronCount; i++) {
            const electron = document.createElement('div');
            electron.className = 'electron';
            const angle = (i / electronCount) * 2 * Math.PI;
            const radius = size / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            electron.style.left = `calc(50% + ${x}px - 6px)`;
            electron.style.top = `calc(50% + ${y}px - 6px)`;
            shellDiv.appendChild(electron);
        }
        
        shellsContainer.appendChild(shellDiv);
    });
    
    electronConfigDisplay.textContent = `Electron Configuration: ${el.ec}`;
}

electronSelect.addEventListener('change', () => {
    renderElectronShells(parseInt(electronSelect.value));
});

renderElectronShells(1);

const trendBtns = document.querySelectorAll('.trend-btn');
const trendArrows = document.getElementById('trend-arrows');
const trendExplanation = document.getElementById('trend-explanation');

const trendData = {
    none: {
        arrows: '',
        explanation: 'Select a trend to see how properties change across the periodic table.'
    },
    electronegativity: {
        arrows: `
            <div class="trend-arrow">
                <div class="arrow-visual">→</div>
                <div class="arrow-label">Increases across period</div>
            </div>
            <div class="trend-arrow">
                <div class="arrow-visual">↑</div>
                <div class="arrow-label">Increases up group</div>
            </div>
        `,
        explanation: 'Electronegativity measures an atom\'s ability to attract electrons. It increases across a period (left to right) because the nuclear charge increases while atomic radius decreases. It decreases down a group because electrons are farther from the nucleus and more shielded.'
    },
    'atomic-radius': {
        arrows: `
            <div class="trend-arrow">
                <div class="arrow-visual">←</div>
                <div class="arrow-label">Decreases across period</div>
            </div>
            <div class="trend-arrow">
                <div class="arrow-visual">↓</div>
                <div class="arrow-label">Increases down group</div>
            </div>
        `,
        explanation: 'Atomic radius decreases across a period because more protons pull electrons closer to the nucleus. It increases down a group because new electron shells are added, making the atom larger despite more protons.'
    },
    ionization: {
        arrows: `
            <div class="trend-arrow">
                <div class="arrow-visual">→</div>
                <div class="arrow-label">Increases across period</div>
            </div>
            <div class="trend-arrow">
                <div class="arrow-visual">↑</div>
                <div class="arrow-label">Increases up group</div>
            </div>
        `,
        explanation: 'Ionization energy is the energy needed to remove an electron. It increases across a period because electrons are held more tightly by the increasing nuclear charge. It decreases down a group because outer electrons are farther from the nucleus and easier to remove.'
    }
};

trendBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        trendBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const trend = btn.dataset.trend;
        trendArrows.innerHTML = trendData[trend].arrows;
        trendExplanation.textContent = trendData[trend].explanation;
    });
});

trendArrows.innerHTML = trendData.none.arrows;
trendExplanation.textContent = trendData.none.explanation;
