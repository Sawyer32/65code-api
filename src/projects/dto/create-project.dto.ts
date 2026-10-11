export class CreateProjectDto {
  title: string;
  description: string;
  slug: string;
  url?: string;
  imageUrl?: string;
  published?: boolean;
}