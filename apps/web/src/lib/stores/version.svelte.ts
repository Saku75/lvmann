type VersionStore = {
  version?: string;
};

const versionStore = $state<VersionStore>({});

export { versionStore };
