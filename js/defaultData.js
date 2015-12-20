var defaultChinaCSV = `Anhui, 120000
Beijing, 50000
Chongqing, 150000
Fujian, 1000
Gansu,500
Guangdong,30000
Guangxi,3000
Guizhou,400
Hainan,100
Hebei, 100000
Heilongjiang,200000
Henan,450000
Hubei, 250000
Hunan,70000
Jiangsu,100000
Jiangxi,12000
Jilin,500
Liaoning,10000
Macau, 1000
"Inner Mongol",30000
Ningxia, 100
Qinghai,2000
Shaanxi, 40000
Shandong,300000
Shanghai,50000
Shanxi,8000
Sichuan,7000
Taiwan,100
Tianjin,5000
Xinjiang,100
Xizang, 100
Yunnan, 1000
Zhejiang,80000
`;
var defaultAsiaCSV = `"Afghanistan",
"Armenia",
"Azerbaijan",
"Bahrain",
"Bangladesh",
"Bhutan",
"Brunei",
"Cambodia",
"China", 1000000
"Cyprus",
"Cyprus No Mans Area",
"East Timor",
"Georgia",
"India"
"Indonesia",50000
"Iran",
"Iraq",
"Israel",
"Japan", 200
"Jordan",
"Kazakhstan",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Lebanon",
"Malaysia",
"Mongolia",
"Myanmar",
"Nepal",
"North Korea",
"Northern Cyprus",
"Oman",
"Pakistan",
"Philippines",
"Qatar",
"Russia", 200000
"Saudi Arabia",
"Scarborough Reef",
"Siachen Glacier",
"Singapore",
"South Korea",
"Spratly Islands",
"Sri Lanka",
"Syria",
"Taiwan",
"Tajikistan",
"Thailand",
"Turkey",
"Turkmenistan",
"United Arab Emirates",
"Uzbekistan",
"Vietnam",
"Yemen",
`;
var defaultWorldCSV = `"Afghanistan"
"Albania"
"Algeria", 5000
"American Samoa"
"Andorra"
"Angola"
"Antigua and Barbuda"
"Argentina"
"Armenia"
"Australia",400000
"Austria"
"Azerbaijan"
"Bahrain"
"Bajo Nuevo Bank (Petrel Is.)"
"Bangladesh"
"Barbados"
"Belarus"
"Belgium"
"Belize"
"Benin"
"Bhutan"
"Bolivia"
"Bosnia and Herzegovina"
"Botswana"
"Brazil",100000
"Brunei"
"Bulgaria"
"Burkina Faso"
"Burundi"
"Cambodia"
"Cameroon"
"Canada",200000
"Cape Verde"
"Central African Republic"
"Chad"
"Chile"
"China",3000000
"Colombia"
"Comoros"
"Costa Rica"
"Croatia"
"Cuba"
"Cyprus"
"Cyprus No Mans Area"
"Czech Republic"
"Democratic Republic of the Congo"
"Denmark"
"Djibouti"
"Dominica"
"Dominican Republic"
"East Timor"
"Ecuador"
"Egypt"
"El Salvador"
"Equatorial Guinea"
"Eritrea"
"Estonia"
"Ethiopia"
"Faroe Islands"
"Federated States of Micronesia"
"Fiji"
"Finland"
"France"
"Gabon"
"Gambia"
"Georgia"
"Germany"
"Ghana"
"Greece"
"Greenland"
"Grenada"
"Guam"
"Guatemala"
"Guinea"
"Guinea Bissau"
"Guyana"
"Haiti"
"Honduras"
"Hungary"
"Iceland"
"India",800000
"Indonesia"
"Iran"
"Iraq"
"Ireland"
"Israel"
"Italy"
"Ivory Coast"
"Jamaica"
"Japan",1000000
"Jordan"
"Kazakhstan"
"Kenya"
"Kiribati"
"Kosovo"
"Kuwait"
"Kyrgyzstan"
"Laos"
"Latvia"
"Lebanon"
"Lesotho"
"Liberia"
"Libya"
"Liechtenstein"
"Lithuania"
"Luxembourg"
"Macedonia"
"Madagascar"
"Malawi"
"Malaysia"
"Maldives"
"Mali"
"Malta"
"Marshall Islands"
"Mauritania"
"Mauritius"
"Mexico"
"Moldova"
"Monaco"
"Mongolia"
"Montenegro"
"Morocco"
"Mozambique"
"Myanmar"
"Namibia"
"Nauru"
"Nepal"
"Netherlands"
"New Zealand"
"Nicaragua"
"Niger"
"Nigeria"
"North Korea"
"Northern Cyprus"
"Northern Mariana Islands"
"Norway"
"Oman"
"Pakistan"
"Palau"
"Panama"
"Papua New Guinea"
"Paraguay"
"Peru"
"Philippines"
"Poland"
"Portugal"
"Puerto Rico"
"Qatar"
"Republic of Congo"
"Republic of Serbia"
"Romania"
"Russia",300000
"Rwanda"
"Saint Kitts and Nevis"
"Saint Lucia"
"Saint Vincent and the Grenadines"
"Samoa"
"San Marino"
"Sao Tome and Principe"
"Saudi Arabia"
"Scarborough Reef"
"Senegal"
"Serranilla Bank"
"Seychelles"
"Siachen Glacier"
"Sierra Leone"
"Singapore"
"Slovakia"
"Slovenia"
"Solomon Islands"
"Somalia"
"Somaliland"
"South Africa",50000
"South Korea"
"South Sudan"
"Spain"
"Spratly Islands"
"Sri Lanka"
"Sudan"
"Suriname"
"Swaziland"
"Sweden"
"Switzerland"
"Syria"
"Taiwan"
"Tajikistan"
"Thailand"
"The Bahamas"
"Togo"
"Tonga"
"Trinidad and Tobago"
"Tunisia"
"Turkey"
"Turkmenistan"
"Tuvalu"
"Uganda"
"Ukraine"
"United Arab Emirates"
"United Kingdom"
"United Republic of Tanzania"
"United States Minor Outlying Islands"
"United States Virgin Islands"
"United States of America",2000000
"Uruguay"
"Uzbekistan"
"Vanuatu"
"Vatican"
"Venezuela"
"Vietnam"
"Western Sahara"
"Yemen"
"Zambia"
"Zimbabwe"
`;

function findMax(keyValueArr){
  var retVal = 0;
  for(var i = 0; i < keyValueArr.length; i ++) {
    if (Number(keyValueArr[i].value) > retVal) {
      retVal = Number(keyValueArr[i].value);
    }
  }
  return retVal;
}