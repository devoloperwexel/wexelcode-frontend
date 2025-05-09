'use client';

import { useQueryParams } from '@wexelcode/hooks';
import { cn } from '@wexelcode/utils';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import { Button, ButtonProps } from './../..';

type PaginationProps = {
  totalPages: number;
  maximumVisiblePages?: number;
} & React.ComponentProps<'nav'>;

const Pagination = ({
  totalPages,
  maximumVisiblePages = 5,
  className,
  ...props
}: PaginationProps) => {
  const t = useTranslations('pagination');

  const queryParams = useQueryParams();

  const page = queryParams.getInt('page') || 1;

  const handleOnClickPrevious = () => {
    queryParams.set('page', page - 1);
  };

  const handleOnClickNext = () => {
    queryParams.set('page', page + 1);
  };

  const handleOnClickPage = (page: number) => {
    queryParams.set('page', page);
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    >
      <PaginationContent>
        <PaginationPrevious
          title={t('previous')}
          onClick={handleOnClickPrevious}
          disabled={page === 1}
        />
        {Array.from({ length: totalPages }).map((_, index) => {
          const currentPage = index + 1;

          return (
            <PaginationItem key={currentPage}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => handleOnClickPage(currentPage)}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationNext
          title={t('next')}
          onClick={handleOnClickNext}
          disabled={page === totalPages || totalPages === 0}
        />
      </PaginationContent>
    </nav>
  );
};
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Omit<ButtonProps, 'variant'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <Button variant={isActive ? 'outline' : 'ghost'} {...props} />

  //   <a
  //     aria-current={isActive ? 'page' : undefined}
  //     className={cn(
  //       buttonVariants({
  //         variant: isActive ? 'outline' : 'ghost',
  //         size,
  //       }),
  //       className
  //     )}
  //     {...props}
  //   />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export { Pagination };
