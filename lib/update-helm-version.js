const path = require('path');
const {readFile, writeFile} = require('fs-extra');

module.exports = async (semanticVersion, basePath, logger) => {
  const chartPath = path.join(basePath, 'Chart.yaml');
  logger.log(1)
  const currentChart = (await readFile(chartPath)).toString().trim();

  await writeFile(chartPath, currentChart.replace(/^version:\s*[^\s]*/gm, `version: ${semanticVersion}`));

  logger.log('Wrote version %s to %s', semanticVersion, chartPath);
};