module.exports = {
  name: 'blockchaininfo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/blockchaininfo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
