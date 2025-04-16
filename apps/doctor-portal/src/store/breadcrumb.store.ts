import { create } from 'zustand';

export interface BreadcrumbItem {
  label?: string;
  labelKey?: string;
  path?: string;
}

interface BreadcrumbStore {
  breadcrumbs: BreadcrumbItem[];
  set: (breadcrumbs: BreadcrumbItem[]) => void;
}

export const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  breadcrumbs: [],
  set: (breadcrumbs) => set({ breadcrumbs }),
}));
