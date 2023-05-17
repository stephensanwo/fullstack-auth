import {
  Header as Header_,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from "@carbon/react";

const Header = () => {
  return (
    <Header_ aria-label="Open Workflow">
      <HeaderName href="/" prefix="">
        React Auth
      </HeaderName>
      <HeaderNavigation aria-label="React Aith">
        <HeaderMenuItem href="https://github.com/stephensanwo/fullstack-auth">
          Github
        </HeaderMenuItem>
      </HeaderNavigation>
    </Header_>
  );
};

export default Header;
