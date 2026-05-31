import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['trackplay.internal'],
  output: 'standalone',
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core', '@trackplay/core'],
}

export default nextConfig
