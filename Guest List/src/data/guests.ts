export type Guest = {
   latitude: string;
   partner_id: number;
   name: string;
   longitude: string;
   distance?: number
}

const Partners: Guest[] = [
   {"latitude": "43.410263", "partner_id": 20, "name": "Genadi Genadiev", "longitude": "24.6104551"},
   {"latitude": "42.6667888", "partner_id": 6, "name": "RubberDuck Sofia", "longitude": "23.2923923"},
   {"latitude": "42.0112539", "partner_id": 9, "name": "Nasco Chachev", "longitude": "24.8658271"},
   {"latitude": "42.128459", "partner_id": 3, "name": "Rangel Rangelov", "longitude": "24.7375581"},
   {"latitude": "42.196893", "partner_id": 12, "name": "Velizar Malevski", "longitude": "24.3289141"},
   {"latitude": "42.685363", "partner_id": 1, "name": "Borislav Stoyanov", "longitude": "23.3117541"},
   {"latitude": "41.936514", "partner_id": 2, "name": "Grigor Dimitrov", "longitude": "25.5501271"},
   {"latitude": "42.150615", "partner_id": 15, "name": "Angel Angelov", "longitude": "24.7453171"},
   {"latitude": "41.635705", "partner_id": 7, "name": "Petar Petrov", "longitude": "25.3740505"},
   {"latitude": "42.129698", "partner_id": 10, "name": "Aleksandar Stamboliyski", "longitude": "24.5346121"},
   {"latitude": "43.866301", "partner_id": 5, "name": "Rusen Dunavski", "longitude": "25.9900591"},
   {"latitude": "43.211316", "partner_id": 13, "name": "Dimitar Vrachanski", "longitude": "27.9120171"},
   {"latitude": "42.819822", "partner_id": 4, "name": "Toni Dimitrova", "longitude": "27.8815631"},
   {"latitude": "42.424532", "partner_id": 8, "name": "Zagori Timbuhov", "longitude": "25.6177871"},
   {"latitude": "42.143272", "partner_id": 11, "name": "Ilian Gradinarov", "longitude": "25.2033341"},
   {"latitude": "42.2736809", "partner_id": 14, "name": "Georgi Rakovski", "longitude": "24.9352731"},
   {"latitude": "42.620181", "partner_id": 19, "name": "Ivan Ivanov", "longitude": "25.3858221"},
   {"latitude": "42.508573", "partner_id": 18, "name": "Iliya Tashev", "longitude": "24.7047681"},
   {"latitude": "42.603347", "partner_id": 16, "name": "Stefan Stefanov", "longitude": "23.0339941"},
   {"latitude": "41.884571", "partner_id": 17, "name": "Manol Manolov", "longitude": "23.4650181"}
]

export default Partners;