// Generate bcrypt hash for password: TestPass123
const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = 'TestPass123';
    const hash = await bcrypt.hash(password, 10);
    console.log('Password:', password);
    console.log('Bcrypt Hash:', hash);
    console.log('\nCopy this hash to use in MongoDB when creating users manually');
}

generateHash();
