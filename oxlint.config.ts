import { withNuxt } from "./.nuxt/oxlint.mjs";

export default withNuxt({
  plugins: ["typescript", "vue", "oxc", "import", "promise"],
  categories: {
    correctness: "error",
    suspicious: "warn",
  },
  rules: {
    "no-underscore-dangle": ["warn", { allow: ["__APP_VERSION__"] }],
  },
  ignorePatterns: ["**/README.md", ".nuxt/**", ".output/**", "node_modules/**"],
  options: {
    typeAware: true,
  },
});
