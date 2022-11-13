/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com",'res.cloudinary.com', "upload.wikimedia.org"]
  },
  experimental : {
    appDir: true,
  }
}
