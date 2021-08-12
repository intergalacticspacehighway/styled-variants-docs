const { getOptions } = require("loader-utils");
const mdx = require("@mdx-js/mdx");
const versionsForStaticSiteGeneration = require("../versions.json");

const codeForServerSideOnlyPages = `
  export async function getServerSideProps() {
    return {
      props: {}
    }
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

  let shouldRenderOnServer = true;
  if (
    versionsForStaticSiteGeneration.find((v) => this.resourcePath.includes(v))
  ) {
    shouldRenderOnServer = false;
  }

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

  return callback(null, code);
};

module.exports = loader;
