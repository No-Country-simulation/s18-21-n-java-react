/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "via.placeholder.com","res.cloudinary.com","example.com"], // Agrega aquí los dominios permitidos
  },
};

export default nextConfig;

