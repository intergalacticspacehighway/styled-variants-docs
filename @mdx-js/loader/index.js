const { getOptions } = require("loader-utils");
const mdx = require("../mdx");
// const versionsForStaticSiteGeneration = require("../static-versions.json");

const codeForServerSideOnlyPages = `
export async function getServerSideProps() {
  return {
    props: {
    },
  };
}

`;

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
import Layout from "components/Layout"
`;

const loader = async function (content) {
  const callback = this.async();
  const options = Object.assign({}, getOptions(this), {
    filepath: this.resourcePath,
  });

  let shouldRenderOnServer = false;
  // if (
  //   versionsForStaticSiteGeneration.find((v) =>
  //     this.resourcePath.includes(v)
  //   ) ||
  //   content.includes("getServerSideProps")
  // ) {
  //   shouldRenderOnServer = false;
  // }

  let result;

  try {
    result = await mdx(content, options);
  } catch (err) {
    return callback(err);
  }

  const { renderer = DEFAULT_RENDERER } = options;

  const code = `${renderer}\n${result}\n
  MDXContent.getLayout = function getLayout(page, pageProps) {
    return (
        <Layout pageProps={pageProps}>{page}</Layout>
    )
  }\n
  ${shouldRenderOnServer ? codeForServerSideOnlyPages : ""}
  `;

  console.log("mdx to jsx code", code);

  return callback(null, code);
};

module.exports = loader;
