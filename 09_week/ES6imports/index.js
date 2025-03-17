import path from 'node:path';

//define ROOT (__dirname);
import { fileURLToPath } from 'node:url';
const ROOT = fileURLToPath(new URL('.', import.meta.url));

const urlPath = myPath => new URL(`file://${myPath}`);

import config from './config.json' with { type: 'json' };

//console.log(config);
//import test from './libraries/testA.js'; //static import

const testAPath = path.join(ROOT, config.libraries.folder, config.libraries.library);
//console.log(testAPath);

const test = (await import(urlPath(testAPath))).default;
//console.log(test());

const packageJsonPath = path.join(ROOT, 'package.json');
//console.log(packageJsonPath);

const packageJson = await import(urlPath(packageJsonPath), { with: { type: 'json' } });
console.log(packageJson);
console.log(packageJson.default);

const { default: pkgJson } = await import(urlPath(packageJsonPath), { with: { type: 'json' } });
console.log(pkgJson);
