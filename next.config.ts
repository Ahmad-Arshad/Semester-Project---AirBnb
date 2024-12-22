// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // images: {
//   //   domains: [
//   //     "avatars.githubusercontent.com"
//   //   ]
//   // }
//   images: {
//     domains: [
//       "avatars.githubusercontent.com",
//       "lh3.googleusercontent.com",
//       "res.cloudinary.com"
    
//     ]
//   }
// };

// export default nextConfig;

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;

