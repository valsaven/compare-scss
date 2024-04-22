import { readFileSync } from 'fs';
import { diffLines } from 'diff';
import colors from 'colors';

colors.enable();

const compareStyles = (file1, file2) => {
  const content1 = readFileSync(file1, 'utf8');
  const content2 = readFileSync(file2, 'utf8');

  const diff = diffLines(content1, content2);

  let differencesFound = false;

  diff.forEach((part) => {
    if (part.added || part.removed) {
      differencesFound = true;

      const color = part.added
        ? 'green'
        : 'red';

      process.stdout.write(part.value[color]);
    }
  });

  console.log();

  if (differencesFound) {
    console.log('❌ There are changes'.red);
  } else {
    console.log('🟢 No changes'.green);
  }
};

compareStyles('./dist/base.css', './dist/dev.css');
