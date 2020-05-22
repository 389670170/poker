// if (!global.__env__ || !global.__env__.local) {
//     global.__env__ = require('./config/Config');
//     exports.init = () => {
//         global.commons = require('@private/lambda-commons');
//         commons.RequestMapping = require('./src/RequestMapping');
//         commons.SFSWrapper.init(`${__dirname}/src/sfs/4JavaScript`);
//     };
//     exports.init();
// }

exports.handler = async (event, context, callback) => {
    await commons.process(event, context, callback, __env__.logLevel)
};


