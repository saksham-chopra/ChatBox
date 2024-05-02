/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname: "stoic-llama-375.convex.cloud"}
        ]
    }
};

export default nextConfig;
