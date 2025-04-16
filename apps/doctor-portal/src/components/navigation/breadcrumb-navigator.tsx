'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import { useBreadcrumbStore } from '../../store';

export function BreadcrumbNavigator() {
  const t = useTranslations('routs');

  const { breadcrumbs } = useBreadcrumbStore();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => {
          if (item.path) {
            return (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={item.path}>
                    {item.label || t(item.labelKey)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbItem key={`${index}-separator`}>
                    <span className="mx-2">/</span>
                  </BreadcrumbItem>
                )}
              </>
            );
          }
          return (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>
                  {item.label || t(item.labelKey)}
                </BreadcrumbPage>
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbItem key={`${index}-separator`}>
                  <span className="mx-2">/</span>
                </BreadcrumbItem>
              )}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
