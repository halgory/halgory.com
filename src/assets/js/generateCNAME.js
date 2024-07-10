const fs = require('fs');
const path = require('path');

function generateCNAME() {
  const outputPath = path.join(__dirname, '../../../docs', 'CNAME');  // Adjust the path to target the 'docs' directory
  const cnameContent = 'halgory.com';

  try {
    fs.writeFileSync(outputPath, cnameContent, 'utf8');
    console.log('CNAME file created:', outputPath);
  } catch (error) {
    console.error('Error creating CNAME file:', error);
  }
}

// Ensure this script runs if called directly from the command line
if (require.main === module) {
  generateCNAME();
}
