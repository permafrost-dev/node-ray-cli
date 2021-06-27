# node-ray-cli

<p align="center">
    <img src="https://static.permafrost.dev/images/node-ray/node-ray-logo.png" alt="node-ray-cli" height="200" style="block">
    <br>
    <span style="font-size:2.7rem;">Debug cli scripts with Ray to fix problems faster</span>
    <br>
</p>

<p align="center">
    <img src="https://shields.io/npm/v/node-ray-cli" alt="npm version">
    <!--<img src="https://shields.io/npm/dt/node-ray-cli" alt="npm downloads">-->
    <img src="https://shields.io/github/license/permafrost-dev/node-ray-cli" alt="license"> <img src="https://github.com/permafrost-dev/vue-ray/workflows/Run%20Tests/badge.svg?branch=main" alt="test status"> <img src="https://codecov.io/gh/permafrost-dev/node-ray-cli/branch/main/graph/badge.svg?token=Z3KgrLJ6L2"/>
</p>

---

## Overview

This npm package provides a `ray` script that lets you control [Spatie's Ray app](https://myray.app) from the command line.  It allows you to easily debug your CLI scripts.

## Installation

Install the package normally with `npm`:

```bash
npm install node-ray-cli
```

...install it globally to be able to access it from any script/directory:

```bash
npm install -g node-ray-cli
```

...or run it without installing using `npx`:

```bash
npx node-ray-cli --help
```

## Usage

`ray <command name> <args, ...>`

If no command name is specified, `send` is assumed.

![image](https://user-images.githubusercontent.com/5508707/123550427-64da4300-d73b-11eb-9aa3-589b21d1fa11.png)

When calling commands that send modifiable payloads, the payload uuid is sent to stdout **if** the `--show-uuid` option flag is provided.  For example, you may modify the color of a payload after it has been sent by using the `color` command:

```bash
ray 'hello world' --show-uuid # writes "ae625128-ed3a-2b92-1a3f-2e0ebf7a2ad1" to stdout
ray color ae625128-ed3a-2b92-1a3f-2e0ebf7a2ad1 green
```

...or remove the payload from Ray entirely:
```bash
ray 'hello world' --show-uuid # writes "ae625128-ed3a-2b92-1a3f-2e0ebf7a2ad1" to stdout
ray remove ae625128-ed3a-2b92-1a3f-2e0ebf7a2ad1
```

Some other usage examples: 

```bash
ray 'hello world' --blue
ray pause
ray html '<em>hello world</em>'
ray file message.txt
```

## Disabling ray-cli

The `ray` command can be disabled by setting the `NODE_RAY_DISABLED` environment variable to `"1"`:

```bash
export NODE_RAY_DISABLED="1"
```

## Available option flags

There are several option flags that can be used with any command:

| Flag | Description |
| --- | --- |
| `--hide` | Display the payload as collapsed by default |
| `--if=value` | Don't send the payload if `value` is `"false"`, `0`, or `"no"` |
| `--large` | Display large text |
| `--show-uuid` | Write the payload uuid to stdout |
| `--small` | Display small text |
| `--blue` | Display the payload as blue  |
| `--gray` | Display the payload as gray  |
| `--green` | Display the payload as green  |
| `--orange` | Display the payload as orange  |
| `--purple` | Display the payload as purple  |
| `--red` | Display the payload as red  |

## Command reference

| Command | Description |
| --- | --- |
| `clear` | Clear the current screen |
| `clear-all` | Clear the current and all previous screens |
| `color <uuid> <color>` | Change the color of a payload that has already been sent |
| `file <filename>` | Show the contents of `filename` |
| `hide-app` | Hide the Ray app |
| `html <content>` | Display rendered html |
| `image <location>` | Display an image from a URL or file |
| `json <content>` | Display formatted JSON |
| `notify <message>` | Display a desktop notification |
| `pause` | Pause code execution |
| `remove <uuid>` | Remove a payload |
| `send <payload>` | Send a payload to Ray |
| `show-app` | Show the Ray app |
| `text <data>` | Display a text string with whitespace preserved |
| `xml <data>` | Display formatted XML |

## Example Bash Script

```bash
#!/bin/bash

RAYUUID=$(ray "arg count: $#" --show-uuid)
ray color $RAYUUID blue

if [ $# -eq 0 ]; then
    echo "no filename provided"
    exit 1
fi

FILENAME="$1"

ray "$FILENAME"
ray file "$FILENAME" --purple --small --hide
ray show-app

if [ ! -e "$FILENAME" ]; then
    ray send "file missing: $FILENAME" --red
    exit 1
fi

ray pause

cat "$FILENAME" | wc -l
```

## Development Setup

```bash
npm install
npm run build:dev
node dist/index.js --help
```

## Testing

`node-ray-cli` uses Jest for unit tests.  To run the test suite:

`npm run test`

---

Code Coverage

<p align="center">
    <img src="https://codecov.io/gh/permafrost-dev/node-ray-cli/branch/main/graphs/commits.svg" height="100" alt="codecov commits graph" />
    <br>
    <img src="https://codecov.io/gh/permafrost-dev/node-ray-cli/branch/main/graph/sunburst.svg" height="200" alt="codecov sunburst graph" />
</p>

---

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Patrick Organ](https://github.com/patinthehat)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
