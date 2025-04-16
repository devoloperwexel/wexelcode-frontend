'use client';

import { PropsWithChildren, useEffect } from 'react';

import { BreadcrumbItem, useBreadcrumbStore } from '../../store';

interface BreadcrumbPageProps {
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbPage({
  children,
  className,
  breadcrumbs,
}: PropsWithChildren<BreadcrumbPageProps>) {
  const { set } = useBreadcrumbStore();

  useEffect(() => {
    set(breadcrumbs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breadcrumbs]);

  return <div className={className}>{children}</div>;
}
