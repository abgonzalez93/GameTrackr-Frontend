import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['trackplay.internal'],
  output: 'standalone',
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
}

export default nextConfig
