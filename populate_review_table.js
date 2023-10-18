const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('kitcat.db', (err) => {
	if (err) {
		console.error('SQLite connection error: ', err);
	} else {
		console.log('Connected to SQLite database');
	}
});

// Function to generate a random review text
const generateRandomReview = () => {
	const reviews = [
		"ปังปุริเย่ บริการดีเด้อ! แมวข่อยอารมดีเกิ๊น บอกชาวบ้านแหน",
		"บริการทุเร่ด ทำแมวหาย พึ่งเจอไปซ่อนอยู่ในตู้เสื้อผ้า แมวบอกว่ากลัว",
		"ดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมากดีมาก",
		"บริการปกติ อาจจะทำได้ดีกว่านี้",
		"ดีมากครับ แนะนำให้เลือกคนนี้ เพราะดูแลดีมาก",
		"เดี๋ยวผมไปปั่นใน x ให้ครับ รับรองพุ่งชัวร์",
		"สุดยอดพี่เลี้ยงแมวแห่งยุค"
	];

	const randomIndex = Math.floor(Math.random() * reviews.length);
	return reviews[randomIndex];
};

// Function to insert a random review into the database
const insertRandomReview = () => {
	// Fetch a random catsitter from the database
	db.all('SELECT id FROM user WHERE catsitter = "true" ORDER BY RANDOM() LIMIT 1', (err, catsitters) => {
		if (err) {
			console.error('Error fetching catsitter: ', err);
		} else {
			const catsitterId = catsitters[0].id;

			// Fetch a random reviewer from the database
			db.all('SELECT id FROM user WHERE catsitter = "false" ORDER BY RANDOM() LIMIT 1', (err, reviewers) => {
				if (err) {
					console.error('Error fetching reviewer: ', err);
				} else {
					const reviewerId = reviewers[0].id;
					const rating = Math.floor(Math.random() * 5) + 1;
					const reviewText = generateRandomReview();

					// Insert the review into the review table
					db.run('INSERT INTO review (catsitter, reviewer, rating, review) VALUES (?, ?, ?, ?)', [catsitterId, reviewerId, rating, reviewText], (err) => {
						if (err) {
							console.error('SQLite table insertion error: ', err.message);
						} else {
							console.log('Review inserted successfully');
						}
					});
				}
			});
		}
	});
};

for (let i = 0; i < 100; i++) {
	insertRandomReview();
}

// Close the SQLite database connection
db.close((err) => {
	if (err) {
		console.error('SQLite connection closure error: ', err.message);
	} else {
		console.log('SQLite database connection closed');
	}
});
