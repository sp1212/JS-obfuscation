The **`obfuscator.js`** file is used in (CLI) script fashion to obfuscate all JavaScript files within a specified directory.  The obfuscation is done using the [javascript-obfuscator](https://www.npmjs.com/package/javascript-obfuscator) Node package based on a template found [here](https://ourcodeworld.com/articles/read/607/how-to-obfuscate-javascript-code-with-node-js) that has been adapted to loop over an entire directory of JavaScript files.

All existing code functionality should be retained in its entirety after the obfuscation process has been completed.  This means that function names and other identifiers are still able to be called by the same names.

Further obfuscation settings can be added/changed as seen in the NPM documentation.

## Usage
1) Clone this repo, or at least add the **`obfuscator.js`**, **`package-lock.json`**, and  **`package.json`** files to a directory of your choosing.  The root directory of your project may make the most sense.
2) Run the **`npm ci`** command to install the necessary dependencies found in the **`package-lock.json`** file.
3) Edit the **`folderPath`** variable within the **`obfuscator.js`** file to specify the (relative) path to the folder within which all of the JavaScript files to be obfuscated are located.
4) Edit the **`filesToSkip`** array within the **`obfuscator.js`** file to include file names to avoid obfuscating.
5) Run the **`node obfuscator.js`** command to carry out obfuscation of all JavaScript files within the specified folder.

Voila!