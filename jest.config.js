/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@rules$': '<rootDir>/src/rules',
	},
	collectCoverage: false,
	collectCoverageFrom: [
		'./src/rules/*.ts',
	],
	coverageReporters: [
		'text-summary',
	],
	coverageDirectory: './coverage',
	testRegex: [
		'./tests/.+\\.test\\.ts$',
	],
};