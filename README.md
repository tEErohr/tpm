tpm
===

npm cli wrapper to auto-install typings with packages

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tpm.svg)](https://npmjs.org/package/tpm)
[![Downloads/week](https://img.shields.io/npm/dw/tpm.svg)](https://npmjs.org/package/tpm)
[![License](https://img.shields.io/npm/l/tpm.svg)](https://github.com/[object Object]/blob/master/package.json)

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
* [`tpm hello [FILE]`](#tpm-hello-file)
* [`tpm help [COMMAND]`](#tpm-help-command)

## `tpm hello [FILE]`

describe the command here

```
USAGE
  $ tpm hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tpm hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/tEErohr/tpm/blob/v1.0.0/src/commands/hello.ts)_

## `tpm help [COMMAND]`

display help for tpm

```
USAGE
  $ tpm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
