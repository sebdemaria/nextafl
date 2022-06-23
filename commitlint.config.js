// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// SEE DOCS: https://www.npmjs.com/package/@commitlint/config-conventional

/* COMMIT EXAMPLE

  git commit -m "<TYPE-ENUM>(BRANCH NUMBER e.g.: #002): <commit msg>"
  
  ! do not forget ':' right after message type

*/
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [2, "always", 100],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [2, "always", 100],
        "header-max-length": [2, "always", 100],
        "scope-enum": [2, "always"],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [
            2,
            "never",
            ["start-case", "pascal-case", "upper-case"],
        ],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "upper-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "BUILD",
                "CHORE",
                "CI",
                "DOCS",
                "FEAT",
                "HOTFIX",
                "PERF",
                "REFACTOR",
                "REVERT",
                "STYLE",
                "TEST",
                "TRANSLATION",
                "SECURITY",
                "CHANGESET",
            ],
        ],
    },
};
