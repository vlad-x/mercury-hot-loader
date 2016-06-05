# mercury-hot-loader

Webpack hot-reload for the [mercury](https://www.npmjs.com/package/mercury) framework.

`npm install mercury-hot-loader --save-dev`

then add it to your webpack config, e.g.
```javascript
{
  module: {
    loaders: [
      { 
        test: /\.coffee$/, 
        loaders: ['mercury-hot', 'transform/cacheable?coffeeify']
      }
    ]
  }
}
```