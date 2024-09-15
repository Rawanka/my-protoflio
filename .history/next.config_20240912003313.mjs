// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig


// module.exports = {
//   webpack(config) {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false 
//     }

//     return config
//   }
// }


// // next.config.js
// module.exports = {
//   webpack: (config) => {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       child_process: false 
//     }

//     return config;
//   }
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use 'export' for static exporting
  trailingSlash: true, // Optional: adds a trailing slash to URLs
  distDir: 'build', // Optional: specify the build directory if you want a custom one
};

export default nextConfig;
