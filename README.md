# JavaScript Obfuscation Tool

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

### License for the **`javascript-obfuscator`** Node Package

Copyright (c) 2016-2022 [Timofey Kachalov](https://github.com/sanex3339)
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this
      list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
