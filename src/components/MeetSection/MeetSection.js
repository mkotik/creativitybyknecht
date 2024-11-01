import { Title, Text, Container, Stack, Button } from "@mantine/core";
import Carousel from "./Carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./MeetSection.module.scss";

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
        <Carousel />
        <div className={classes.textContent}>
          <Title order={2} size={36} mb={30}>
            Rachel Knecht
          </Title>
          <Stack gap={30} className={classes.summary}>
            <Text size="lg">
              As a graduate of the Fashion Institute of Technology’s prestigious
              Advertising & Marketing Communications program and a passion for
              the sport of bodybuilding, it was only right for me to combine the
              two.
            </Text>
            <Text size="lg">
              Over the last 4 years since graduation, I’ve built a clientele of
              both small and large businesses in the fitness space. Working with
              both top brands and athletes, I’ve learned a lot of the ins and
              outs of the sport while continuing to grow my skill set in
              marketing.
            </Text>
            <Text size="lg">
              I have transitioned from the typical 9-to-5 office job into my own
              consulting business “Creativity by Knecht” to manage my clients
              and take on an array of short-term and long-term projects to keep
              me inspired
            </Text>
            <Text size="lg">
              From social media management, to website design, logos and
              graphics, affiliate marketing and athlete management, to my
              personal favorite - email marketing… you name it, and I can do it!
              Hence, why “Creativity” is the perfect name to classify me and my
              various services.
            </Text>
            <Button
              size="lg"
              variant="filled"
              color="violet"
              radius="md"
              className={classes.button}
            >
              Let's 'Kin ɛçt'
            </Button>
          </Stack>
        </div>
      </div>
    </Container>
  );
}

export default MeetSection;
