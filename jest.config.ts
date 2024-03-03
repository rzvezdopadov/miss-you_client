import type { Config } from 'jest';

const config: Config = {
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^next/': '<rootDir>/node_modules/next',
        '^antd/': '<rootDir>/node_modules/antd',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testEnvironment: 'jsdom',
};

export default config;
