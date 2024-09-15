/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use 'export' for static exporting
  trailingSlash: true, // Optional: adds a trailing slash to URLs
  distDir: 'build', // Specify the custom build directory

  // Disable image optimization for static exports
  images: {
    unoptimized: true,
  },

  // Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Prevent using fs (file system) module in client-side code
      child_process: false, // Prevent using child_process in client-side code
    };
    return config;
  },
};

module.exports = nextConfig;
s