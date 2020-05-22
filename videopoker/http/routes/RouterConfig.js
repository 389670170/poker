let index = require('../../index');
const routers = {
    '/slots/lambda/www': index.handler
};
module.exports = routers;