  /** @type {import('next').NextConfig} */
  const nextConfig = {
    experimental: {
      viewTransition: true,
    },
    turbopack: {},
    webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  },
    /* config options here */
    reactCompiler: true,
  };

  export default nextConfig;
