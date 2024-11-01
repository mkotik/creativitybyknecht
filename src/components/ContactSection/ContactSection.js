import { Title, Text, Container, Stack } from "@mantine/core";
import classes from "./ContactSection.module.scss";

function ContactSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.section}>
        <Title order={1} className={classes.sectionTitle}>
          Get in touch
        </Title>

        <div className={classes.content}>
          <Stack gap="lg" className={classes.stack}>
            <div className={classes.contactItem}>
              <Title order={2} className={classes.contactTitle}>
                Collaborate
              </Title>
              <Text c="dimmed" size="md">
                contact@example.com
              </Text>
              <Text c="dimmed" size="md">
                +1 (555) 123-4567
              </Text>
            </div>

            <div className={classes.contactItem}>
              <Title order={2} className={classes.contactTitle}>
                Press
              </Title>
              <Text c="dimmed" size="md">
                press@example.com
              </Text>
              <Text c="dimmed" size="md">
                +1 (555) 987-6543
              </Text>
            </div>
          </Stack>
        </div>
      </div>

      <div className={classes.divider} />

      <div className={classes.section}>
        <Title order={1} className={classes.sectionTitle}>
          Locations
        </Title>

        <div className={classes.content}>
          <div className={classes.contactItem}>
            <Title order={2} className={classes.contactTitle}>
              Los Angeles
            </Title>
            <Text c="dimmed" size="md">
              4556 Brendan Ferry
            </Text>
            <Text c="dimmed" size="md">
              Los Angeles, CA 90210
            </Text>
          </div>

          <div className={classes.contactItem}>
            <Title order={2} className={classes.contactTitle}>
              New York
            </Title>
            <Text c="dimmed" size="md">
              886 Walter Streets
            </Text>
            <Text c="dimmed" size="md">
              New York, NY 12345
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactSection;
