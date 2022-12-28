const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API: process.env.BASE_API_URL,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dashboard",
      },
    ];
  },
};

module.exports = nextConfig;