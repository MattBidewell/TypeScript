/a/lib/tsc.js --w -p /a/b/projects/myProject/src
//// [/a/b/projects/myProject/src/file1.ts]
import module1 = require("module1");
module1("hello");

//// [/a/b/projects/myProject/src/file2.ts]
import module11 = require("module1");
module11("hello");

//// [/a/b/projects/myProject/node_modules/module1/index.js]
module.exports = options => { return options.toString(); }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/b/projects/myProject/src/tsconfig.json]
{"compilerOptions":{"allowJs":true,"rootDir":".","outDir":"../dist","moduleResolution":"node","maxNodeModuleJsDepth":1}}

//// [/a/b/projects/myProject/dist/file1.js]
"use strict";
exports.__esModule = true;
var module1 = require("module1");
module1("hello");


//// [/a/b/projects/myProject/dist/file2.js]
"use strict";
exports.__esModule = true;
var module11 = require("module1");
module11("hello");



Output::
>> Screen clear
12:00:29 AM - Starting compilation in watch mode...



12:00:37 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a/b/projects/myProject/src/file1.ts","/a/b/projects/myProject/src/file2.ts"]
Program options: {"allowJs":true,"rootDir":"/a/b/projects/myProject/src","outDir":"/a/b/projects/myProject/dist","moduleResolution":2,"maxNodeModuleJsDepth":1,"watch":true,"project":"/a/b/projects/myProject/src","configFilePath":"/a/b/projects/myProject/src/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/projects/myProject/node_modules/module1/index.js
/a/b/projects/myProject/src/file1.ts
/a/b/projects/myProject/src/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/projects/myProject/node_modules/module1/index.js
/a/b/projects/myProject/src/file1.ts
/a/b/projects/myProject/src/file2.ts

WatchedFiles::
/a/b/projects/myproject/src/tsconfig.json:
  {"pollingInterval":250}
/a/b/projects/myproject/src/file1.ts:
  {"pollingInterval":250}
/a/b/projects/myproject/node_modules/module1/index.js:
  {"pollingInterval":250}
/a/b/projects/myproject/src/file2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/projects/myproject/src/node_modules:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/node_modules:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/src/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/src:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Add new line to file1

//// [/a/b/projects/myProject/src/file1.ts]
import module1 = require("module1");
module1("hello");
;

//// [/a/b/projects/myProject/dist/file1.js]
"use strict";
exports.__esModule = true;
var module1 = require("module1");
module1("hello");
;



Output::
>> Screen clear
12:00:40 AM - File change detected. Starting incremental compilation...



12:00:44 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a/b/projects/myProject/src/file1.ts","/a/b/projects/myProject/src/file2.ts"]
Program options: {"allowJs":true,"rootDir":"/a/b/projects/myProject/src","outDir":"/a/b/projects/myProject/dist","moduleResolution":2,"maxNodeModuleJsDepth":1,"watch":true,"project":"/a/b/projects/myProject/src","configFilePath":"/a/b/projects/myProject/src/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/projects/myProject/node_modules/module1/index.js
/a/b/projects/myProject/src/file1.ts
/a/b/projects/myProject/src/file2.ts

Semantic diagnostics in builder refreshed for::
/a/b/projects/myProject/src/file1.ts

WatchedFiles::
/a/b/projects/myproject/src/tsconfig.json:
  {"pollingInterval":250}
/a/b/projects/myproject/src/file1.ts:
  {"pollingInterval":250}
/a/b/projects/myproject/node_modules/module1/index.js:
  {"pollingInterval":250}
/a/b/projects/myproject/src/file2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/projects/myproject/src/node_modules:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/node_modules:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/src/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/projects/myproject/src:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
