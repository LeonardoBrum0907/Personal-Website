import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from '../../sm.json';
import { AllDocumentTypes } from '../../types.generated';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

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
export const createClient = config => {
  const client = prismic.createClient<AllDocumentTypes>(sm.apiEndpoint, config);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  });

  return client;
};
