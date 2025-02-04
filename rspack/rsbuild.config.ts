import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {rspack} from '@rspack/core';

// const {
//   ModuleFederationPlugin,
// } = require('@module-federation/enhanced/rspack');

export default defineConfig({
  tools: {
    rspack: {
      plugins: [new rspack.container.ModuleFederationPluginV1({
        name: 'app2',
        filename: 'rsApp.js',
        exposes: {
          './RsApp': './src/App.tsx',
        }
      })]
    }
  },
  plugins: [
    pluginReact(),
    // new rspack.container.ModuleFederationPluginV1({
    //   exposes: {
    //     'RsApp': './src/App.tsx',
    //   }
    // })
  ],
});
