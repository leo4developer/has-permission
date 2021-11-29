import store from "src/store/index";

export default {
  mounted(el, binding) {
    const theStore = store();
    const { value } = binding;
    const all_permission = "*:*:*";
    const permissions = theStore.state.account.permissions;
    console.log(value, permissions, theStore);
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some((permission) => {
        return (
          all_permission === permission || permissionFlag.includes(permission)
        );
      });
      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`请设置操作权限标签值`);
    }
  },
};
