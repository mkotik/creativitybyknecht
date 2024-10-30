import { Title, Text, Container, Stack } from "@mantine/core";
import classes from "./MeetSection.module.scss";
import placeholderImage from "../../assets/placeholder.jpg";

function MeetSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <Stack align="center" gap={30} className={classes.header}>
        <Text c="violet" fw={500} size="lg" tt="uppercase">
          About Me
        </Text>
        <Title order={1} size={48} ta="center">
          Meet the Designer
        </Title>
        <Text size="xl" c="dimmed" maw={800} ta="center">
          With over a decade of experience in graphic design and marketing, I
          bring creativity and strategy to every project.
        </Text>
      </Stack>

      <div className={classes.content}>
        <div className={classes.imageWrapper}>
          <img
            src={placeholderImage}
            alt="Designer portrait"
            width={500}
            height={500}
          />
        </div>

        <div className={classes.textContent}>
          <Title order={2} size={36} mb={30}>
            Jane Doe
          </Title>
          <Stack gap={30}>
            <Text size="lg">
              I'm passionate about creating designs that not only look great but
              also drive results for my clients. Whether you're a small startup
              or a large corporation, I'm here to help you stand out in today's
              competitive market.
            </Text>
            <Text size="lg">
              My approach combines creative flair with data-driven insights to
              ensure that every design serves a purpose and resonates with your
              target audience.
            </Text>
          </Stack>
        </div>
      </div>
    </Container>
  );
}

export default MeetSection;
