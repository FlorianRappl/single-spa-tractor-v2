module.exports = {
  entry: {
    "./CartPage": "./src/CartPage.jsx",
    "./Checkout": "./src/Checkout.jsx",
    "./Thanks": "./src/Thanks.jsx",
    "./AddToCart": "./src/AddToCart.jsx",
    "./MiniCart": "./src/MiniCart.jsx",
  },
  externals: {
    react: "react",
    "react-dom/client": "react-dom/client"
  },
  output: {
    library: { type: "system" },
    uniqueName: 'checkout',
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
