import fs from 'fs-extra';
import path from 'path';

const buildDirectory = path.join(__dirname, 'build'); // Change to 'dist' if that's your output directory
const imgSourceDirectory = path.join(__dirname, 'src', 'assets', 'img');
const imgDestinationDirectory = path.join(buildDirectory, 'assets', 'img');

// Ensure the destination directory exists
fs.ensureDirSync(imgDestinationDirectory);

// Copy the contents of the img folder to the build output directory
fs.copySync(imgSourceDirectory, imgDestinationDirectory);

console.log('Images copied to build directory.');
