type LayoutStore = {
  menu: {
    open: boolean;
  };
  size: {
    height?: number;
    width?: number;
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
