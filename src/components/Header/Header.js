import { Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";

function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      close();
    }
  };

  const links = [
    { label: "Home", link: "home" },
    { label: "About", link: "about" },
    { label: "Services", link: "services" },
    { label: "Testimonials", link: "testimonials" },
    { label: "Contact", link: "contact" },
  ];

  const items = links.map((link) => (
    <Text
      key={link.label}
      className={classes.link}
      onClick={() => scrollToSection(link.link)}
    >
      {link.label}
    </Text>
  ));

  return (
    <header
      className={`${classes.header} ${opened ? classes.headerOpened : ""}`}
    >
      <Container size="lg" px={{ base: "md", sm: "lg" }}>
        <Group justify="space-between" h="60px">
          <Text size="xl" fw={700} className={classes.logo}>
            Jane Doe
          </Text>

          <Group gap={30} className={classes.links} visibleFrom="sm">
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            hiddenFrom="sm"
          />
        </Group>
        {opened && <div className={classes.dropdown}>{items}</div>}
      </Container>
    </header>
  );
}

export default Header;
