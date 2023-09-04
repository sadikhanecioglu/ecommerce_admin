/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    //HOST_API_KEY: 'https://schoolapi.palm-software.com/',
    //HOST_SOCKET_KEY: 'wss://schoolapi.palm-software.com/ws/notification/',
    //HOST_API_KEY: 'https://betasomsapi.palm-software.com/',
    //HOST_SOCKET_KEY: 'wss://betasomsapi.palm-software.com/ws/notification/',
    HOST_API_KEY: "http://localhost:8000/",
    HOST_SOCKET_KEY: "ws://localhost:8000/ws/notification/",
  },
};

module.exports = nextConfig;
