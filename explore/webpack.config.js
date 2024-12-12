module.exports = {
  entry: {
    "./HomePage": "./src/HomePage.jsx",
    "./CategoryPage": "./src/CategoryPage.jsx",
    "./StoresPage": "./src/StoresPage.jsx",
    "./Recommendations": "./src/Recommendations.jsx",
    "./Header": "./src/Header.jsx",
    "./Footer": "./src/Footer.jsx",
    "./StorePicker": "./src/StorePicker.jsx",
  },
  externals: {
    react: "react",
    "react-dom/client": "react-dom/client",
  },
  output: {
    library: { type: "system" },
    uniqueName: 'explore',
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "auto",
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [],
};
