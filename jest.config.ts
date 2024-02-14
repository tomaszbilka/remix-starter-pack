import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: { '~/(.*)': '<rootDir>/app/$1' },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
};

export default config;
