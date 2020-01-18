# @vapurrmaid/editor-config

This package installs an opinionated [`.editorconfig`](https://editorconfig.org/).

## Installation

### NPX (preferred)

Use the following command to install `.editorconfig` in the current directory.

```bash
npx @vapurrmaid/editor-config
```

### NPM

The following simply installs the assets in `node_modules`:

```bash
npm install --save-dev @vapurrmaid/editor-config
```

If you'd like to generate a `.editorconfig` in your current directory, run:

```bash
./node_modules/.bin/editor-config
```

Otherwise, simply just copy the `.editorconfig` file to wherever you'd prefer:

```bash
cp "./node_modules/@vapurrmaid/editor-config/dist/assets/.editorconfig" .
```
