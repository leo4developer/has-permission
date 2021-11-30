import HasPermission from "../component/has-permission.js";

export default ({ app, store }) => {
  // 'has-permission' will be used as 'v-has-permission'
  app.directive("has-permission", HasPermission(store));
};
