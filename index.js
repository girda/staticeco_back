const app = require('./app');
const port = process.env.PORT || 3903;
const mysqlConnection = require('./connections-database');

app.listen(port, () => console.log(`Server has been starter on ${port}`));
