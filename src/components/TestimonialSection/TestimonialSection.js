import {
  Title,
  Text,
  Container,
  Stack,
  Card,
  Avatar,
  Group,
} from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import classes from "./TestimonialSection.module.scss";

function TestimonialSection() {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Tech Startup",
      content:
        "Working with Jane was a game-changer for our brand. Her designs perfectly captured our vision and helped us stand out in a crowded market.",
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director, Retail Company",
      content:
        "Jane's creativity and attention to detail are unmatched. She consistently delivers high-quality work that exceeds our expectations.",
    },
  ];

  const renderStars = () => (
    <Group gap={2}>
      {[...Array(5)].map((_, index) => (
        <IconStarFilled key={index} size={16} style={{ color: "#ffd43b" }} />
      ))}
    </Group>
  );

  return (
    <Container size="lg" className={classes.wrapper}>
      <Stack align="center" gap={30} className={classes.header}>
        <Text c="violet" fw={500} size="lg" tt="uppercase">
          Testimonials
        </Text>
        <Title order={1} size={48} ta="center">
          What Clients Say
        </Title>
      </Stack>

      <div className={classes.testimonials}>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className={classes.card}>
            <Group mb={30}>
              <Avatar size={60} radius="xl" color="violet">
                {testimonial.name[0]}
              </Avatar>
              <div>
                <Text fw={500} size="lg">
                  {testimonial.name}
                </Text>
                <Text size="sm" c="dimmed">
                  {testimonial.position}
                </Text>
              </div>
            </Group>
            <Text size="lg" mb="md">
              {testimonial.content}
            </Text>
            {renderStars()}
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default TestimonialSection;
