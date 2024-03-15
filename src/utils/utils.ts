type ResponseType = {
  page: string;
  name: string;
  link: string;
}[];
import { navLinks } from "@/constants/constant";
export function pageNavigation(currentPath: string): ResponseType {

  // check for current path in the nav link
  const activePath = navLinks.findIndex(({ link }) =>
    link.includes(currentPath)
  );
  if (activePath === 0) {
    return [{ ...navLinks[activePath + 1], page: "Next" }];
  } else if (activePath === navLinks.length - 1) {
    return [{ ...navLinks[navLinks.length - 2], page: "Previous" }];
  } else {
    return [
      {
        ...navLinks[activePath - 1],
        page: "Previous",
      },
      {
        ...navLinks[activePath + 1],
        page: "Next",
      },
    ];
  }
}
