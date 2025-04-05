import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

export interface NavigationDestination {
  name: string;
  id: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>;
}
