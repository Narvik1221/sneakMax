interface NavItem {
  title: string;
  id: string;
  route?: string;
}

export const navList: NavItem[] = [
  { title: "Каталог", id: "catalog", route: "/" },
  { title: "О нас", id: "about", route: "/" },
  { title: "Подбор товара", id: "slider", route: "/" },
  { title: "Наша команда", id: "team", route: "/" },
  { title: "Вопросы", id: "questions", route: "/" },
  { title: "Контакты", id: "contacts", route: "/" },
];
