const path = require('path');
const jetpack = require('fs-jetpack');

// Grab a list of all HTML files in the apps folder
let apps = jetpack.list(path.join(__dirname, '..', 'apps')) || [];
apps = apps.filter(filename => filename.endsWith('.html'));

// Output a javascript file that can be loaded in the harness
const jsString = `// DO NOT EDIT THIS GENERATED FILE
window.TALON_APPS = ${JSON.stringify(apps, null, 2)};
`;
jetpack.write(
  path.join(__dirname, '..', 'harness', 'js', 'data.js'), 
  jsString
);

console.log(`App data for ${apps.length} code files generated.`);
