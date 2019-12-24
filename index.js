const path = require('path');
const child_process = require('child_process');

module.exports = function (inFileName, outFileName, format) {
    format = format || 'pdf';
    const renderBin = path.join(__dirname, 'draw.io-x86_64-12.4.2.AppImage');
    const args = [
        '--export',
        inFileName,
        '--format',
        format,
        '--crop',
        '--transparent',
        '--output',
        outFileName
    ];
    return child_process.execFileSync(renderBin, args)
}
