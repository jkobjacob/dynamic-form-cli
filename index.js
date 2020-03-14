const fs = require('fs');
const app = require('./app/app');
const writer = require('./app/writer');

// initializes the app with the parsed json
fs.readFile(require('path').resolve('./form.json'),'utf8',(err,data) => {
    if (err) {
        console.log(err);
    } else {
        app(JSON.parse(data)).then((answers) => writer(answers));
    }
});
