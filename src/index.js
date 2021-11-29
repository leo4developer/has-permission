// file: /index.js

function extendConf(conf) {
  // 确保已注册has-permission启动文件
  conf.boot.push(
    "~quasar-app-extension-has-permission/src/boot/register-permission-directive.js"
  );

  // 确保启动和其它文件被编译
  conf.build.transpileDependencies.push(
    /quasar-app-extension-has-permission[\\/]src/
  );
}

// eslint-disable-next-line no-undef
module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith("quasar", "^2.0.0");
  api.compatibleWith("@quasar/app", "^3.0.0");

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new Vue directive;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf);
};
