module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "require-spent": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "require-spent": ({ raw }: { raw: string }) => {
          const commitMessage = raw;
          const errMsg =
            "Commit message must end with a valid spent time with the format '/spent 1h30' or '/spent 30m' or '/spent 1h'";

          const msgSplit = commitMessage.split(" ");

          if (msgSplit.at(-2) !== "/spent") return [false, errMsg];

          const spentTimeValue = msgSplit.at(-1)?.trim();
          const regex = /^(\d|[1-5]\d)m|(([1-9]|[1-9]\d)h(\d|[1-5]\d)?m?)$/; // 1h30, 30m, 1h, 1h30m, 1h30, 1h30m

          if (!spentTimeValue || !regex.test(spentTimeValue)) {
            return [false, errMsg];
          }
          return [true];
        },
      },
    },
  ],
};
