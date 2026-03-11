const sharp = require('sharp');

const width = 1024;
const height = 1024;
const r = width / 2;

const mask = Buffer.from(`<svg width="${width}" height="${height}"><circle cx="${r}" cy="${r}" r="${r}" /></svg>`);

sharp('public/assets/logo-icon.png')
    .composite([{
        input: mask,
        blend: 'dest-in'
    }])
    .toFile('public/assets/wehelp-favicon-circle.png')
    .then(info => console.log('Successfully created circular favicon:', info))
    .catch(err => console.error('Error creating circular favicon:', err));
