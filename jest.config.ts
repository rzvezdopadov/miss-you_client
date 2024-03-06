import type { Config } from 'jest';
const nextJest = require('next/jest');
const createJestConfig = nextJest({
    dir: './',
});
const jestConfig: Config = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^next/': '<rootDir>/node_modules/next',
        '^antd/': '<rootDir>/node_modules/antd',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
};

module.exports = createJestConfig(jestConfig);
