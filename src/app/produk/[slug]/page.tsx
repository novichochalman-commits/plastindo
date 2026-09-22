import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productCategories, getCategoryBySlug } from "@/data/products";
import CategoryDetail from "@/components/product/CategoryDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Kategori Tidak Ditemukan",
    };
  }

  return {
    title: `${category.name} | PT YnW Multi Teknik Plastindo`,
    description: category.description,
    openGraph: {
      title: `${category.name} - PT YnW Multi Teknik Plastindo`,
      description: category.description,
      images: [
        {
          url: `/images/${category.slug}.png`,
          width: 800,
          height: 600,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <CategoryDetail category={category} />;
}
