const server = require('./app');
const port = process.env.PORT || 3000;
const mysqlConnection = require('./connections-database');

server.listen(port, () => console.log(`Server has been starter on ${port}`));
