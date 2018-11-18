const download = require('download-git-repo');
const ora = require('ora');
module.exports = function(remote, local, cb) {
    const spinper = ora('loading').start();
    download(remote, local, function(data,err) {
        if(err) {
            cb(null, err);
        }
        cb(data);
        spinper.stop();
        console.log('success');
    })
}

