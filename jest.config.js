//jest.config.js
module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ['/cypress/', "/node_modules/"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ['/cypress/', "/node_modules/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  // collectCoverageFrom: [
  //   './packages/**/*.{js,svelte}',
  //   '!./packages/**/node_modules/**',
  //   '!./packages/**/__sapper__/**',
  // ],
  coveragePathIgnorePatterns: ['/cypress/', '/node_modules/', '/__sapper__/'],
};