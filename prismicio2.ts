import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import configuration from './slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = configuration;

/**
 * A list of Route Resolver objects that define how a document's `url` field
 * is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
// const routes: prismic.ClientConfig['routes'] = [
//   {
//     type: 'website1',
//     path: '/'
//   },
//   {
//     type: 'project',
//     path: `/${doc.uid}`
//   }
// ];

export function linkResolver(doc) {
  switch (doc.type) {
    case 'website1':
      return `/`;
    case 'project':
      return `/${doc.uid}`;
    default:
      return null;
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    // routes,
    ...config
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  });

  return client;
};
