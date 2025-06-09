import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const getServerEnvConfig = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    INTERNAL_API_URL: z.string().url(),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
