import { Title, Text, Button, Container } from "@mantine/core";
import classes from "./MainSection.module.scss";
import rachelImage from "../../assets/rachel_fullbody.png"; // Add your image here

function MainSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.textContent}>
          <div>
            <Title order={1} className={classes.title}>
              Welcome to Creativity by Knecht
            </Title>
            <Title order={1} c="violet" size="xl" className={classes.title}>
              "I make emails you ACTUALLY want to open."
            </Title>
          </div>

          <Text size="xl" c="dimmed" className={classes.description}>
            Hi, my name is Rachel Knecht (kin-eçt) and I am so glad to have you
            here!
          </Text>

          <Text size="xl" c="dimmed" className={classes.description}>
            Are you looking for a fresh, new logo? Someone to design and manage
            your email campaigns? Or, maybe you're ready for a whole RE-BRAND?!
            You've come to the right place.
          </Text>

          <Text size="xl" c="dimmed" className={classes.description}>
            Let's "kin eçt" and get creative!
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
            src={rachelImage}
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
