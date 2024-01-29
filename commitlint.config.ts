module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "require-spent": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "require-spent": ({ raw }: { raw: string }) => {
          const commitMessage = raw.trim();
          const errMsg =
            "Commit message must end with a valid spent time with the format '/spent 1h30' or '/spent 30m' or '/spent 1h'";

          const msgSplit = commitMessage.split("\n");
          if (msgSplit.length < 2)
            return [false, `'/spent' directive must be in new line`]; // ensure that commit message has more than 1 line

          const spentSplit = msgSplit[msgSplit.length - 1].split(" ");

          if (spentSplit.length !== 2 || spentSplit[0] !== "/spent")
            return [false, errMsg]; // ensure that commit message ends with '/spent'

          const spentTimeValue = spentSplit.at(-1)?.trim();
          const regex = /^(\d|[1-5]\d)m|(([1-9]|[1-9]\d)h(\d|[1-5]\d)?m?)$/; // 1h30, 30m, 1h, 1h30m, 1h30, 1h30m

          if (!spentTimeValue || !regex.test(spentTimeValue)) {
            // ensure that spent time value is valid
            return [false, errMsg];
          }
          return [true];
        },
      },
    },
  ],
};
