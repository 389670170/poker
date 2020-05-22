let fs = require('fs');
let archiver = require('archiver');

let packageLock = require('./package-lock');
let zipName = 'Lambda-Deployment';
let stage = 'Beta';
(() => {
    if (process.argv == null || process.argv.length < 3) {
        console.log(`Usage: ${process.argv[0]} ${process.argv[1]} [Dev|Beta|Prod]`);
        return;
    }

    stage = process.argv[2];


    let zipFile = fs.createWriteStream(`./${zipName}-${stage}.zip`);
    let archive = archiver('zip', {
        zlib: {level: 9}
    });

    zipFile.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    zipFile.on('end', function() {
        console.log('Data has been drained');
    });


    archive.on('error', function(err) {
        throw err;
    });

    archive.pipe(zipFile);

    // for (let key in packageLock.dependencies) {
    //     if (!packageLock.dependencies[key].dev) {
    //         archive.directory(`./node_modules/${key}/`, `node_modules/${key}/`);
    //     }
    // }

    archive.file(`./config/Config${stage}.js`, { name: `config/Config.js` });
    archive.file(`./index${stage}.js`, { name: `index.js` });

    archive.file(`./index.js`, { name: `index.js` });

    archive.file(`./cfg_achievement.xlsx`, { name: `cfg_achievement.xlsx` });
    archive.file(`./cfg_bets.xlsx`, { name: `cfg_bets.xlsx` });
    archive.file(`./cfg_jackpot.xlsx`, { name: `cfg_jackpot.xlsx` });
    archive.file(`./cfg_level.xlsx`, { name: `cfg_level.xlsx` });
    archive.file(`./cfg_quest.xlsx`, { name: `cfg_quest.xlsx` });
    archive.file(`./cfg_sign_in7.xlsx`, { name: `cfg_sign_in7.xlsx` });
    archive.file(`./cfg_sign_in_total.xlsx`, { name: `cfg_sign_in_total.xlsx` });
    archive.file(`./cfg_win_type.xlsx`, { name: `cfg_win_type.xlsx` });

    archive.directory(`./src/`, `src/`);
    archive.directory(`./tools/`, `tools/`);
    archive.directory(`./gameplays/`, `gameplays/`);
    archive.directory(`./@private/`, `@private/`);
    archive.directory(`./mall-server/`, `mall-server/`);

    archive.finalize();
})();
