interface MenuItem {
  title: string;
  link: string;
}

interface MenuState {
  items: MenuItem[];
}

const state: MenuState = {
  items: [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
  ],
};

const getters = {
  getMenuItems: (state: MenuState) => state.items,
};

export default {
  state,
  getters,
};
