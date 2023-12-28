import { CreatePagesArgs } from "gatsby";
import path from "path";

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const PageTemplate = path.resolve("./src/templates/page.tsx");

  const result = await graphql<Queries.GatsbyNodeCreatePagesQuery>(`
    query GatsbyNodeCreatePages {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      "There was an error loading the MDX result",
      result.errors,
    );
  }

  //
  // Be careful to create MDX content in "src/content" not "src/pages" as gatsby-plugin-mdx greedily auto-creates
  //
  result.data?.allMdx.nodes.forEach((node) => {
    const PageSlug: string =
      node.frontmatter?.slug == undefined ? node.id : node.frontmatter?.slug;
    const PageComponent: string = `${PageTemplate}?__contentFilePath=${node.internal.contentFilePath}`;

    reporter.info(`Creating "${PageSlug}" from "${PageComponent}"`);

    createPage({
      path: PageSlug,
      component: PageComponent,
      context: { id: node.id },
    });
  });
};
