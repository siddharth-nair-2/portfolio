import nextJest from "next/jest";
import { type } from "os";
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
