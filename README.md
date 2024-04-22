# compare-scss

## Description

`compare-scss` is a utility designed for refactoring and comparing SCSS/CSS styles. The main goal is to facilitate the process of checking changes between the reference and current versions of styles.

The utility automatically compiles SCSS files, starting with the `main.scss` file in each of the `base` (reference version) and `dev` (working version) folders, compares the resulting CSS files, and outputs the comparison results.

## Features

- Compilation of SCSS files from `base` and `dev` folders.
- Automatic comparison of compiled CSS files.
- Visual display of differences:
  - If no differences are found, a green message "No changes" is displayed.
  - If differences are detected, it highlights them in red in the code and displays a red message "There are changes".

## Installation and Usage

```bash
# Install dependencies
npm i

# Build styles and compare the final files
npm run build

# Automatically track changes in SCSS files and compile/compare after each change
npm run watch
```
