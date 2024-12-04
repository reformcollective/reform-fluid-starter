const envConfigVariables: Record<
  "development" | "production" | "staging" | "test",
  Record<string, string>
> = {
  development: {
    widgetHost: "http://localhost:3001/static/js/chat-widget-development.js",
    apiHost: "http://fluid.lvh.me:3000/",
  },
  production: {
    widgetHost: "https://chat.fluid.app/static/js/chat-widget.js",
    apiHost: process.env.FLUID_BASE_URL || "http://fluid.lvh.me:3000/",
  },
  test: {},
  staging: {},
};

export default envConfigVariables[process.env.NODE_ENV || "development"];
