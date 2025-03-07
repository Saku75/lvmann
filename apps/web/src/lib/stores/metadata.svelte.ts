type MetadataStore = {
  title?: string[];
  description?: string;
  keywords?: string[];
  author?: string;
};

const metadataStore = $state<MetadataStore>({});

export { metadataStore };
