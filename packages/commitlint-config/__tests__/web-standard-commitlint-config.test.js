'use strict';

const webStandardCommitlintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(webStandardCommitlintConfig(), 'Hello from webStandardCommitlintConfig');
console.info('webStandardCommitlintConfig tests passed');
