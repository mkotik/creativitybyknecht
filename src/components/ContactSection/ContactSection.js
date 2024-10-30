import { Title, Text, Container, Group, Stack } from "@mantine/core";
import classes from "./ContactSection.module.scss";

function ContactSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.section}>
        <Title order={1} size={48}>
          Get in touch
        </Title>

        <div className={classes.content}>
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3">
                Collaborate
              </Title>
              <Text c="dimmed">contact@example.com</Text>
              <Text c="dimmed">+1 (555) 123-4567</Text>
            </div>

            <div>
              <Title order={2} size="h3">
                Press
              </Title>
              <Text c="dimmed">press@example.com</Text>
              <Text c="dimmed">+1 (555) 987-6543</Text>
            </div>
          </Stack>
        </div>
      </div>

      <div className={classes.divider} />

      <div className={classes.section}>
        <Title order={1} size={48}>
          Locations
        </Title>

        <div className={classes.content}>
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3">
                Los Angeles
              </Title>
              <Text c="dimmed">4556 Brendan Ferry</Text>
              <Text c="dimmed">Los Angeles, CA 90210</Text>
            </div>

            <div>
              <Title order={2} size="h3">
                New York
              </Title>
              <Text c="dimmed">886 Walter Streets</Text>
              <Text c="dimmed">New York, NY 12345</Text>
            </div>
          </Stack>
        </div>
      </div>
    </Container>
  );
}

export default ContactSection;
