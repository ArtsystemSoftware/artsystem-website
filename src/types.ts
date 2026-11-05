export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, unknown>;
}