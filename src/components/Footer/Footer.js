import { Container, Group, Text } from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons-react";
import classes from "./Footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <Group justify="space-between" className={classes.inner}>
          <Text c="dimmed" size="sm">
            © {currentYear} Jane Doe Design. All rights reserved.
          </Text>

          <Group gap="md" className={classes.social}>
            <IconBrandFacebook size={24} className={classes.socialIcon} />
            <IconBrandFacebook size={24} className={classes.socialIcon} />
            <IconBrandFacebook size={24} className={classes.socialIcon} />
            <IconBrandFacebook size={24} className={classes.socialIcon} />
          </Group>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
