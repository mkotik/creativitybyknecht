import { Title, Text, Button, Container } from "@mantine/core";
import classes from "./MainSection.module.scss";
import placeholderImage from "../../assets/placeholder.jpg"; // Add your image here

function MainSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.textContent}>
          <div>
            <Title order={1} className={classes.title}>
              Creative Marketing
            </Title>
            <Title order={1} c="violet" className={classes.title}>
              Design Solutions
            </Title>
          </div>

          <Text size="xl" c="dimmed" className={classes.description}>
            Elevate your brand with stunning visuals and strategic marketing
            design. Let's bring your vision to life.
          </Text>

          <Button
            size="lg"
            variant="filled"
            color="violet"
            radius="md"
            className={classes.button}
          >
            Get started
          </Button>
        </div>

        <div className={classes.imageWrapper}>
          <img
            src={placeholderImage}
            alt="Creative design illustration"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Container>
  );
}

export default MainSection;
