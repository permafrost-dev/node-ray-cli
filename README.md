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

## Installation

Install the package normally with `npm`:

```bash
npm install node-ray-cli
```

...or install it globally to be able to access it from any script/directory:

```bash
npm install -g node-ray-cli
```

## Usage

```bash
ray 'hello world' --blue
ray pause
ray html '<em>hello world</em>'
ray file message.txt
```

## Command reference

| Command | Description |
| --- | --- |
| `clear` | Clear the current screen |
| `color <uuid> <color>` | Change the color of a payload that has already been sent |
| `file <filename>` | Show the contents of `filename` |
| `hide-app` | Hide the Ray app |
| `html <content>` | Display rendered html |
| `image <location>` | Display an image from a URL or file |
| `json <content>` | Display formatted JSON |
| `notify <message>` | Display a desktop notification |
| `pause` | Pause code execution |
| `send <payload>` | Send a payload to Ray |
| `show-app` | Show the Ray app |
| `text <data>` | Display a text string with whitespace preserved |
| `xml <data>` | Display formatted XML |

## Example Bash Script

```bash
#!/bin/bash

RAYUUID=$(ray "arg count: $#")
ray color $RAYUUID blue --quiet

if [ $# -eq 0 ]; then
    echo "no filename provided"
    exit 1
fi

FILENAME="$1"

ray "$FILENAME" --quiet
ray file "$FILENAME" --quiet
ray show-app

if [ ! -e "$FILENAME" ]; then
    ray send "file missing: $FILENAME" --red --quiet
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
    <img src="https://codecov.io/gh/permafrost-dev/node-ray-cli/branch/main/graphs/commits.svg?token=Z3KgrLJ6L2" height="100" alt="codecov commits graph" />
    <br>
    <img src="https://codecov.io/gh/permafrost-dev/node-ray-cli/branch/main/graph/sunburst.svg?token=Z3KgrLJ6L2" height="200" alt="codecov sunburst graph" />
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
