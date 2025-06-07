import { defineConfig } from 'orval';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default defineConfig({
  bbcApi: {
    output: {
      mode: 'single',
      target: 'src/api/generated/', // Next.js 클라이언트 코드 경로
      schemas: 'src/api/generated/schemas',
      client: 'react-query', // tanstack/react-query 연동 옵션
      prettier: true, // prettier 적용 여부
      override: {
        // mutator: {
        //   path: 'src/api/plugins/customFetch.ts', // mutator 파일 경로
        //   name: 'customFetch',
        // },
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
