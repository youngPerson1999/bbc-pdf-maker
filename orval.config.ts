import { defineConfig } from 'orval';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default defineConfig({
  bbcApi: {
    output: {
      mode: 'tags',
      target: 'src/api/generated/', // Next.js 클라이언트 코드 경로
      baseUrl: process.env.NEXT_PUBLIC_API_URL, // API 기본 URL
      schemas: 'src/api/generated/schemas',
      client: 'react-query', // tanstack/react-query 연동 옵션
      prettier: true, // prettier 적용 여부
      override: {
        mutator: {
          path: 'src/api/plugins/customInstance.ts', // mutator 파일 경로
          name: 'customInstance',
        },
        query: {
          useQuery: true,
        },
      },
    },
    input: {
      target: `${process.env.NEXT_PUBLIC_API_URL}/openapi.json`,
    },
  },
});
