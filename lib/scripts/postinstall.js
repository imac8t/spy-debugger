'use strict';

var fs = require('fs');
var path = require('path');
try {
    var newTextPromptJs = fs.readFileSync(path.join(__dirname, '../../template/TextPrompt.js'));
    fs.writeFileSync(path.join(__dirname, '../../node_modules/weinre/web/client/TextPrompt.js'), newTextPromptJs);

    var utilsJs = fs.readFileSync(path.join(__dirname, '../../template/utils.js'));
    fs.writeFileSync(path.join(__dirname, '../../node_modules/weinre/lib/utils.js'), utilsJs);
} catch (e) {
    //
}