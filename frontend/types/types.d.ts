interface Dropdown {
  name: string;
  href: string;
}
interface Navlink {
  name: string;
  href?: string;
  dropdown?: Dropdown[{
    name: string;
    href: string;
  }];
}
