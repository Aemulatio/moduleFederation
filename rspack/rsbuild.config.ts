import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {rspack} from '@rspack/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

// const {
//   ModuleFederationPlugin,
// } = require('@module-federation/enhanced/rspack');

export default defineConfig({
  // tools: {
  //   rspack: {
  //     plugins: [new rspack.container.ModuleFederationPluginV1({
  //       name: 'app2',
  //       filename: 'rsApp.js',
  //       exposes: {
  //         './RsApp': './src/App.tsx',
  //       },
  //       // remoteType: 'module',
  //       // shared: {react: {singleton: true}, "react-dom": {singleton: true}},
  //     })]
  //   }
  // },
  plugins: [
    pluginReact(),
    // new rspack.container.ModuleFederationPluginV1({
    //   exposes: {
    //     'RsApp': './src/App.tsx',
    //   }
    // })
    pluginModuleFederation({
      name: 'app2', // Имя удаленного приложения
      filename: 'RsApp.js',
      exposes: {
        './RsApp': './src/RsApp.js', // Экспортируемый компонент
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
  ],
});
