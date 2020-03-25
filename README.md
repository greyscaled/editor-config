# @vapurrmaid/editor-config

This package installs an opinionated [`.editorconfig`](https://editorconfig.org/).

## Installation

### Using wget

```bash
wget https://raw.githubusercontent.com/vapurrmaid/editor-config/master/src/assets/.editorconfig
```

### Using NPX

Use the following command to install `.editorconfig` in the _current_ directory.

```bash
npx @vapurrmaid/editor-config
```

### NPM or Yarn

The following simply installs the assets in `node_modules`:

```bash
# yarn
yarn add -D @vapurrmaid/editor-config

# npm
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

## Contributions

While I'm an open-source contributor and love collaboration, I use these
configurations in my personal/hobby projects. Therefore, I'm generally
not accepting contributions outside of security-related concerns. Please
feel free to fork your own version or use these configurations.
