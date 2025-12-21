# vscode-jxa

[![Version](https://img.shields.io/github/v/release/idleberg/vscode-jxa?style=for-the-badge)](https://github.com/idleberg/vscode-jxa/releases)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/idleberg.jxa?style=for-the-badge&label=Marketplace)](https://marketplace.visualstudio.com/items?itemName=idleberg.jxa)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/idleberg/jxa?style=for-the-badge&label=Open%20VSX)](https://open-vsx.org/extension/idleberg/jxa)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/vscode-jxa/default.yml?style=for-the-badge)](https://github.com/idleberg/vscode-jxa/actions)

> [!NOTE]
> This extension has been separated from [`idleberg.applescript`](https://github.com/idleberg/vscode-applescript) and is now in maintencance mode. If you are interested in adopting it, please get in touch on [GitHub](github.com/idleberg/vscode-jxa/discussions).

Language syntax, snippets and build system for JavaScript for Automation (JXA)

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install idleberg.jxa`

### CLI

With [shell commands](https://code.visualstudio.com/docs/editor/command-line) installed, you can use the following command to install the extension:

`$ code --install-extension idleberg.jxa`

### Packaged Extension

Download the packaged extension from the the [release page](https://github.com/idleberg/vscode-jxa/releases) and install it from the command-line:

```bash
$ code --install-extension path/to/jxa-*.vsix
```

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or install it using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

```bash
$ ovsx get idleberg.jxa
```

## Usage

### Building

On macOS, you can make use of the following build commands through the [command-palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette):

- JXA: Run Script
- JXA: Compile Script
- JXA: Compile Script bundle
- JXA: Compile Application

### Settings

You can tweak the defaults for this package, `osacompile` and `osascript` in the package settings.

| Setting                        | Default    | Description                                                                                        |
| ------------------------------ | ---------- | -------------------------------------------------------------------------------------------------- |
| `showNotifications`            | `true`     | Show build notifications indicating success or failure                                             |
| `alwaysShowOutput`             | `false`    | Specify whether to show the output panel on errors only or on each build                           |
| `convertErrorRange`            | `false`    | Convert error range to line/column                                                                 |
| `defaultBuildTask`             | `"script"` | Specify the default build task when creating a new task file                                       |
| `allowMultiTermination`        | `false`    | Allows the selection of multiple processes to be terminated                                        |
| `osacompile.executeOnly`       | `false`    | Save the resulting script as execute-only                                                          |
| `osacompile.stayOpen`          | `false`    | Stay open after run handler                                                                        |
| `osacompile.startupScreen`     | `false`    | Show startup-screen                                                                                |
| `osascript.outputStyle`        | -          | The flags argument is a string consisting of any of the modifier characters `e`, `h`, `o`, and `s` |

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT).
