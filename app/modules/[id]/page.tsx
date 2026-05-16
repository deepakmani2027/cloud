import { getModule } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ModulePageContent } from '@/components/module-page-content';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ModulePage({ params }: PageProps) {
  const { id } = await params;
  const moduleId = parseInt(id, 10);
  const module = getModule(moduleId);

  if (!module) {
    notFound();
  }

  return <ModulePageContent module={module} />;
}
