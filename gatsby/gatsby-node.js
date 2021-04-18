/*  adds support for esModules via esm 
    use ./gatsby-node.esm.js with esModules instead */

// external imports
const requireEsm = require('esm')(module);

// internal imports
module.exports = requireEsm('./gatsby-node.esm.js');
