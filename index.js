#!/usr/bin/env node
const { execSync } = require('child_process')  //To run cmd commands
const fs = require('fs')  //to read the html files
execSync(`git clone https://github.com/LuisBoavida0/LuisSiteConstructor2Template.git`)  //Compile it
fs.rmSync('LuisSiteConstructor2Template/.git', { recursive: true, force: true }) //Delete .git folder
