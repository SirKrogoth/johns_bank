'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: [
        "text-summary",
        "lcov",
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    preset: 'ts-jest',
    setupFiles: ["dotenv/config", "tsconfig-paths/register"],
    testMatch: [
        "**/__tests__/**/*.ts"
    ],
};
