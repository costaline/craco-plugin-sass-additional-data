# Craco plugin sass additional data

-----

## Installation

1. Install [craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation)

2. Install `@costaline/craco-plugin-sass-additional-data`:

   ```sh
   npm i -D @costaline/craco-plugin-sass-additional-data
   ```

   ```sh
   yarn add -D @costaline/craco-plugin-sass-additional-data
   ```

3. Edit `craco.config.js`:

   ```js
   module.exports = {
     plugins: [
       {
         plugin: require("@costaline/craco-plugin-sass-additional-data"),
         options: {
           pathToFile: '' // path to a json file with a list of resources
         }
       }
     ]
   };
   ```
