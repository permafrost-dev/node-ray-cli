# node-ray-cli

---

[![codecov](https://codecov.io/gh/permafrost-dev/node-ray-cli/branch/main/graph/badge.svg?token=Z3KgrLJ6L2)](https://codecov.io/gh/permafrost-dev/node-ray-cli)

Debug cli scripts with ray to fix problems faster

## Usage

TODO

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
