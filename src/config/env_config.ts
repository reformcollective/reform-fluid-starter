const envConfigVariables: Record<
  "development" | "production" | "staging" | "test",
  Record<string, string>
> = {
  development: {
    widgetHost: "https://chat.fluid.app/static/js/chat-widget.js",
    apiHost: "http://fluid.lvh.me:3000/",
  },
  production: {
    widgetHost: "https://chat.fluid.app/static/js/chat-widget.js",
  },
  test: {},
  staging: {},
};

export default envConfigVariables[process.env.NODE_ENV || "development"];
