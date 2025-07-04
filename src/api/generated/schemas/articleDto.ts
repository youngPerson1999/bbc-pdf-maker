/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * BBC News Api Swagger
 * BBC News Api Description
 * OpenAPI spec version: 0.0.0
 */
import type { ArticleContentDto } from './articleContentDto';

export interface ArticleDto {
  /** Article headline */
  headline: string;
  /** Publication time (ISO8601 format) */
  time: string;
  /** Article content (array of paragraphs) */
  content: ArticleContentDto[];
}
