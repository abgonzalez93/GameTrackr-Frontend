import { NodeEnvSchema, UrlStringSchema } from '@trackplay/core/schemas'
import { createEnv } from '@t3-oss/env-nextjs'

export const getServerEnvConfig = createEnv({
  server: {
    NODE_ENV: NodeEnvSchema,

    INTERNAL_API_URL: UrlStringSchema,
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    INTERNAL_API_URL: process.env.INTERNAL_API_URL,
  },
  emptyStringAsUndefined: true,
})
