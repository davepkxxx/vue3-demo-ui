
const ts = require("@rollup/plugin-typescript");
const vue = require("@vitejs/plugin-vue");
const { watch } = require("gulp");
const { rollup } = require("rollup");
const css = require("rollup-plugin-css-only");
const resolve = require("rollup-plugin-node-resolve");

async function build() {
  const bundle = await rollup({
    input: "src/index.ts",
    external: "vue",
    plugins:[
      css({ output: "index.css" }),
      resolve(),
      ts({ tsconfig: "./tsconfig.json" }),
      vue(),
    ],
  });

  await Promise.all(["cjs", "es", "amd", "umd"].map((format) => bundle.write({
    file: `dist/index.${format === "es" ? "esm" : format}.js`,
    format,
    name: "DemoUI",
    exports: "named",
    sourcemap: true,
    globals: {
      vue: "Vue",
    },
  })));

  return bundle;
}

exports.default = build;

function watchBuild() {
  watch("src/**/*", build);
}

exports.watch = watchBuild;
