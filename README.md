## Getting Started

### First, install dependencies:

```bash
yarn
```

### Second, set up env variables:

1. Rename file `template.env.local` to `.env.local` at the root of the project.
2. Replace the `FLUID_APP_ID`'s value with your app id and `FLUID_API_TOKEN`'s value with your api token found in the developer settings.
3. Optionally add a `FLUID_BASE_URL` and specify where the Fluid API is you wish to hit only if you have a separately hosted version of Fluid (probably a Fluid employee hosting it locally). Otherwise, just hits production version of Fluid.

### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
