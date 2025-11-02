import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import configuration from './slicemachine.config.json';
import { AllDocumentTypes } from './prismicio-types';

export const { repositoryName } = configuration;

/**
 * The project's Prismic repository name.
 */

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
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
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
// export const createClient = config => {
//   const client = prismic.createClient<AllDocumentTypes>(sm.apiEndpoint, config);

//   prismicNext.enableAutoPreviews({
//     client,
//     previewData: config.previewData,
//     req: config.req
//   });

//   return client;
// };
export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, config);

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
