module.exports = {
  extends: ["@commitlint/config-conventional"],
  // rules & wildcards copy from https://github.com/erikmueller/conventional-changelog-lint-config-atom/blob/master/index.js
  parserPreset: "conventional-changelog-atom",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        /** WIP means Working in progress，used in GitLab usually  */
        "WIP",
        /** Merge branch */
        "merge",
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
};
