import { UrlStringSchema } from '@trackplay/core/schemas'
import { createEnv } from '@t3-oss/env-nextjs'

export const getClientEnvConfig = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: UrlStringSchema,
    NEXT_PUBLIC_FRONTEND_URL: UrlStringSchema,
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
  emptyStringAsUndefined: true,
})
