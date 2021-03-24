{
    "compilerOptions": {
      "target": "es2017",
      "allowSyntheticDefaultImports": false,
      "baseUrl": "./",
      "paths": {
        "static/*": ["static/*"],
        "helpers/*": ["src/helpers/*"],
        "pages/*": ["src/pages/*"],
        "reducers/*": ["src/redux-flow/reducers/*"],
        "requests/*": ["src/requests/*"],
        "routes/*": ["routes.js"],
        "@components/*": ["components/*"],
        "@pages/*": ["pages/*"],
        "@hooks/*": ["hooks/*"]
      }
    },
    "exclude": ["node_modules", "dist"]
  }