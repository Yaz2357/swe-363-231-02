const fs = require('fs');
const path = require('path');
const { copyFile } = require('fs/promises');

function filterFilesByExtension(files, extensions) {
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return extensions.includes(ext);
  });
}

async function copyFiles(sourceDir, targetDir, extensions) {
  try {
    const files = await fs.promises.readdir(sourceDir);
    const filteredFiles = filterFilesByExtension(files, extensions);

    for (const file of filteredFiles) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);
      await copyFile(sourcePath, targetPath);
      console.log(`Copied ${file} to ${targetPath}`);
    }

    console.log('File copying completed');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const extensions = ['.pdf', '.txt'];

copyFiles(sourceDir, targetDir, extensions);