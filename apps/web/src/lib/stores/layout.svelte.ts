type LayoutStore = {
  menu: {
    open: boolean;
  };
  size: {
    height: number | undefined;
    width: number | undefined;
  };
};

const layoutStore = $state<LayoutStore>({
  menu: {
    open: false,
  },
  size: {
    width: undefined,
    height: undefined,
  },
});

export { layoutStore };
