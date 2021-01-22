const path = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader'
      },
    ],
    include: path.resolve(__dirname, '../'),
  })

  return config
}
