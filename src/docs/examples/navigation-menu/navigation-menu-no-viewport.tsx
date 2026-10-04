import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuNoViewport() {
  return (
    // viewport={false}: each panel opens right under its own trigger.
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* `active` marks the page the user is on. */}
          <NavigationMenuLink href="#" active className={navigationMenuTriggerStyle()}>
            Beranda
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bantuan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-52 gap-1">
              <li>
                <NavigationMenuLink href="#">Cara memesan</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Pembatalan & refund</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Hubungi kami</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
