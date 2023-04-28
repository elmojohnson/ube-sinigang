export interface Layout {
    isOpen: boolean;
    toggleMenu: () => void;
    links: Link[];
}

export interface Link {
    label: string;
    href: string;
}

export interface User {
  country?: string;
  display_name?: string;
  email: string;
  followers?: {
    href?: string;
    total?: 0;
  };
  href?: string;
  id: string;
  images?: [
    {
      url?: string;
      height?: number;
      width?: number;
    }
  ];
  product?: string;
  type?: string;
  uri?: string;
}

export interface Tokens {
    access_token?: string;
    refresh_token?: string;
}
