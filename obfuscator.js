/**
 * References ~~~~
 * NPM Obfuscation package:  https://github.com/javascript-obfuscator/javascript-obfuscator
 * Starter script code:  https://ourcodeworld.com/articles/read/607/how-to-obfuscate-javascript-code-with-node-js
 * */

// required modules
var fs = require("fs");
var path = require("path");
var JavaScriptObfuscator = require('javascript-obfuscator');

// an array of file names to skip over and not obfuscate
var filesToSkip = ['jquery-3.3.1.min.js', 'FAQ.js', 'popper.min.js'];

// the path to the folder containing all of the javascript to be obfuscated
// EDIT THIS AS NEEDED
var folderPath = './assets/js/';

const directoryPath = path.join(__dirname, folderPath);
// passing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        if (fs.lstatSync(folderPath + file).isFile()) {
            // skip obfuscation of the current file if specified in the filesToSkip array
            if (filesToSkip.includes(file)) {
                return;
            }
            // Read the file of your original JavaScript Code as text
            fs.readFile(folderPath + file, "UTF-8", function (err, data) {
                if (err) {
                    throw err;
                }
                // Obfuscate content of the JS file
                var obfuscationResult = JavaScriptObfuscator.obfuscate(data);
                // Write the obfuscated code into a new file
                fs.writeFile(folderPath + file, obfuscationResult.getObfuscatedCode(), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Obfuscated file:  " + file);
                });
            });
        }
    });
});