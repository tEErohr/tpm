tpm
===

npm cli wrapper to auto-install typings with packages

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/tpm.svg)](https://github.com/tEErohr/tpm/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tpm
$ tpm COMMAND
running command...
$ tpm (-v|--version|version)
tpm/1.0.0 darwin-x64 node-v12.18.3
$ tpm --help [COMMAND]
USAGE
  $ tpm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tpm lookup [PACKAGES...]`](#tpm-lookup-file)

## `tpm lookup [packageNames...]`

return package names for type definitions which match package name(s).

```
$ tpm lookup cuid cors
@types/cuid  @types/cors
```

_See code: [src/commands/lookup.ts](https://github.com/tEErohr/tpm/blob/v1.0.0/src/commands/lookup.ts)_

