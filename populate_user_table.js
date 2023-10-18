const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('kitcat.db', (err) => {
	if (err) {
		console.error('SQLite connection error: ', err);
	} else {
		console.log('Connected to SQLite database');
	}
});

// Generate a random Thai address
const additionalThaiFirstNames = [
	"อภิรักษ์", "วิชา", "สมปอง", "นิธิ", "ชัยยา", "สุริยา", "สุริยา", "วิชานี", "นางพยอม", "วิชานี",
	"รัตนา", "รุจน์", "กันยา", "วีระชัย", "มนทิ", "ประพิณ", "ชนินทร", "ปราณ", "วชิรา", "อรวีร",
	"สมบูรณ์", "จิรเทพ", "ประกาย", "รุจน์", "อรอนงค์", "ระวี", "นันทพร", "รัชนี", "วิเวก", "ชลธร",
	"รัตนารมณ์", "สิริชัย", "ปาณรา", "ศรัทธา", "สุริยา", "รัตน์", "จรูญ", "ราชา", "ประดิษฐ์", "กันยา",
	"สมหวัง", "จิรัฐ", "วรพล", "สุรัณ", "วิชานี", "จิรปัญญา", "วรกิต", "สรวล", "ชนินทร์", "สมบูรณ์",
	"รักเรือน", "วิชัย", "ศรีสุข", "รัตนพร", "อรวรร", "จิรศักดิ์", "พรพิณ", "ชัย", "สุขสวัสดิ์", "วริท",
	"สิรวัต", "ราชานนท์", "นิธิ", "รุจน์", "พิชาญ", "วริน", "รุจน์", "รัตนคุณ", "อรณัย", "จรรยา", "สมนึก",
	"วิรัง", "จิรประดิษฐ์", "ศรีชัย", "รัตนา", "อรอนงค์", "วัฒน์", "ปาณรา", "จรูญ", "สมหวัง", "วิรัฐ", "ประภา",
	"สุรินทร์", "วิชานี", "เอกวัฒน์", "วิศิษฐ์", "ชนินทร", "รัชนี", "วิเวก", "ชลธร", "ปรเมษ", "รัตนารมณ์",
];

const additionalThaiLastNames = [
	"สุขสวัสดิ์", "วงศ์วาน", "วิเวก", "ราชานนท์", "นามวงศ์", "วรินทร", "พงษ์สิทธิ์", "รัตนคุณ", "เมืองพงษ์", "อรวิทย",
	"พิทักษ์", "สุขสวัสดิ์", "เอกวัฒน์", "พรมยิ่ง", "ประพิณ", "อรวิน", "สิทธิ", "วงศ์ศรีสุข", "ประเมษ", "สรวล",
	"ปาณรา", "จิรปัญญา", "สมหวัง", "สมปอง", "นิธิ", "ชัย", "รุจน์", "ชรัล", "รุจน์", "รุจน์", "ปาณพัฒน์",
	"เมืองพงษ์", "สุมงคล", "รุจน์", "สุริยา", "ปาณพัฒน์", "อรอนงค์", "ระวี", "นันทพร", "รัชนี", "วิเวก", "ชลธร",
	"รัตนารมณ์", "สิริชัย", "ปาณรา", "ศรัทธา", "สุริยา", "รัตน์", "จรูญ", "ราชา", "ประดิษฐ์", "กันยา",
	"สมหวัง", "จิรัฐ", "วรพล", "สุรัณ", "วิชานี", "จิรปัญญา", "วรกิต", "สรวล", "ชนินทร์", "สมบูรณ์",
	"รักเรือน", "วิชัย", "ศรีสุข", "รัตนพร", "อรวรร", "จิรศักดิ์", "พรพิณ", "ชัย", "สุขสวัสดิ์", "วริท",
	"สิรวัต", "ราชานนท์", "นิธิ", "รุจน์", "พิชาญ", "วริน", "รุจน์", "รัตนคุณ", "อรณัย", "จรรยา", "สมนึก",
	"วิรัง", "จิรประดิษฐ์", "ศรีชัย", "รัตนา", "อรอนงค์", "วัฒน์", "ปาณรา", "จรูญ", "สมหวัง", "วิรัฐ", "ประภา",
	"สุรินทร์", "วิชานี", "เอกวัฒน์", "วิศิษฐ์", "ชนินทร", "รัชนี", "วิเวก", "ชลธร", "ปรเมษ", "รัตนารมณ์",
];

function generateRandomThaiNames() {
	const randomFirstNameIndex = Math.floor(Math.random() * additionalThaiFirstNames.length);
	const randomLastNameIndex = Math.floor(Math.random() * additionalThaiLastNames.length);

	const randomFirstName = additionalThaiFirstNames[randomFirstNameIndex];
	const randomLastName = additionalThaiLastNames[randomLastNameIndex];

	return `${randomFirstName} ${randomLastName}`;
}

// Generate a random English Email address
const generateRandomEnglishEmail = () => {
	const randomUsername = Math.random().toString(36).substring(2, 10);
	const randomDomain = Math.random().toString(36).substring(2, 10);
	return `${randomUsername}@${randomDomain}.com`;
}
// Generate a random Thai telephone number
const generateRandomThaiTelephoneNumber = () => {
	const randomNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
	return `08${randomNumber}`;
};
// Generate a random Thai address
const generateRandomThaiAddress = () => {
	const thaiAddresses = [
		"101 ถนนราชดำเนิน, แขวงพระบรมมหาราชวัง, เขตพระนคร, กรุงเทพมหานคร",
		"555 ถนนศรีอยุธยา, แขวงดุสิต, เขตดุสิต, กรุงเทพมหานคร",
		"888 ถนนพหลโยธิน, แขวงจอมทอง, เขตบางกอกใหญ่, กรุงเทพมหานคร",
		"333 ถนนรัชดาภิเษก, แขวงห้วยขวาง, เขตหลักสี่, กรุงเทพมหานคร",
		"777 ถนนรามอินทรา, แขวงทุ่งวัด, เขตสาทร, กรุงเทพมหานคร",
		"999 ถนนสุขุมวิท, แขวงคลองตัน, เขตคลองเตย, กรุงเทพมหานคร",
		"222 ถนนพระราม 4, แขวงทุ่งมหาเมฆ, เขตสาทร, กรุงเทพมหานคร",
		"444 ถนนราชวิถี, แขวงห้วยขวาง, เขตหลักสี่, กรุงเทพมหานคร"
	];
	const randomIndex = Math.floor(Math.random() * thaiAddresses.length);
	return thaiAddresses[randomIndex];
};

// Insert a random user into the database
const insertRandomUser = () => {
	const user = {
		name: generateRandomThaiNames(),
		email: generateRandomEnglishEmail(),
		password: '123456789',
		telephone: generateRandomThaiTelephoneNumber(),
		address1: generateRandomThaiAddress(),
		address2: '',
		address3: '',
		picture: '',
		catsitter: (Math.random() < 0.5 ? "true" : "false"),
	};

	db.run('INSERT INTO user (name, email, password, telephone, address1, address2, address3, picture, catsitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [user.name, user.email, user.password, user.telephone, user.address1, user.address2, user.address3, user.picture, user.catsitter], (err) => {
		if (err) {
			console.error('SQLite table insertion error: ', err.message);
		} else {
			console.log('User inserted successfully');
		}
	});
};

// Insert 100 random users into the database
for (let i = 0; i < 100; i++) {
	insertRandomUser();
}

// Close the SQLite database connection
db.close((err) => {
	if (err) {
		console.error('SQLite connection closure error: ', err.message);
	} else {
		console.log('SQLite database connection closed');
	}
})