const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const visitor = require("babel-plugin-styled-variants/visitor");
const prettier = require("prettier");
const utilityPropVisitor = require("babel-plugin-styled-variants/utility-prop-visitor");

function transform(code) {
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  traverse(ast, {
    ...visitor,
    ...utilityPropVisitor,
    Program(path) {
      visitor.Program(path);
      utilityPropVisitor.Program(path);
    },
  });

  const output = generate(ast, code);
  return prettier.format(output.code);
}

module.exports = { transform };
