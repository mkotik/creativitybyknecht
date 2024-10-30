import { useState } from "react";
import { Group, Text, Container, Flex, Burger, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";

function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const navItems = [
    { label: "About", link: "#" },
    { label: "Services", link: "#" },
    { label: "Clients", link: "#" },
    { label: "Testimonials", link: "#" },
  ];

  const items = navItems.map((item) => (
    <Text
      key={item.label}
      component="a"
      href={item.link}
      className={classes.link}
    >
      {item.label}
    </Text>
  ));

  return (
    <Container fluid className={classes.header}>
      <Flex justify="space-between" align="center" h={60} px="md">
        <Text size="xl" fw={700}>
          CK
        </Text>

        <Group gap={40} visibleFrom="sm">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Flex>

      <Collapse in={opened}>
        <Container fluid className={classes.dropdown}>
          <Flex direction="column" gap="lg">
            {items}
          </Flex>
        </Container>
      </Collapse>
    </Container>
  );
}

export default Header;
