import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

System.register("react", [], (_exports) => ({
  execute() {
    _exports(React);
  },
}));

System.register("react-dom/client", [], (_exports) => ({
  execute() {
    _exports(ReactDOMClient);
  },
}));

window.fromReact = (loadLifecycle, mountParcel) =>
  React.lazy(() =>
    loadLifecycle().then(({ default: config }) => ({
      default: (props) => (
        <Parcel mountParcel={mountParcel} config={config} {...props} />
      ),
    }))
  );

window.getComponent = (id, converter = window.fromReact) =>
  converter(() => System.import(`${id}.js`), mountRootParcel);
