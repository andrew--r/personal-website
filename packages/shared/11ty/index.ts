import type { VNode } from 'preact';

export type EleventyContent = VNode | string;

export type Page = {
  url: string;
  fileSlug: string;
  date: Date;
};

export type CollectionItem = {
  page: Page;
  data: EleventyProps;
  templateContent: EleventyContent;
};

type Alternate = {
  href: string;
  type: string;
};

type LangAlternate = {
  href: string;
  lang: string;
};

export type EleventyProps = {
  alternates?: Alternate[];
  content?: EleventyContent;
  cover?: {
    hidden?: boolean;
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  collections: Record<string, CollectionItem[]>;
  date: Date;
  description: string;
  disableNotesSubscriptionWidget?: boolean;
  langAlternates?: LangAlternate[];
  page: Page;
  site: {
    url: string;
    author: {
      name: string;
      email: string;
    };
    navigationLinks: {
      url: string;
      title: string;
    }[];
  };
  tags?: string[];
  tools: {
    name: string;
    url: string;
  }[];
  title: string;
  url?: string;
};
