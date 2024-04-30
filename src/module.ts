import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import {scaffolderTemplatingExtensionPoint} from '@backstage/plugin-scaffolder-node/alpha';
import { configLookup } from './filter';

export const scaffolderModuleNunjucksConfigReplace = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'nunjucks-config-replace',
  register(reg) {
    reg.registerInit({
      deps: {
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        scaffolderTemplating: scaffolderTemplatingExtensionPoint },
      async init({scaffolderTemplating, config}) {
        scaffolderTemplating.addTemplateFilters(
          { configLookup: configLookup(config) }
        );
      },
    });
  },
});
