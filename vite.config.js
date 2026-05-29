const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  root: __dirname,
  base: "/",
  server: {
    port: 4173,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
