import { Title, Text, Container, Stack, SimpleGrid, Card } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./OfferSection.module.scss";

function OfferSection() {
  const services = [
    {
      title: "Brand Identity Design",
      description:
        "Create a cohesive visual identity that reflects your brand's values and resonates with your audience.",
    },
    {
      title: "Marketing Collateral",
      description:
        "Design eye-catching brochures, flyers, and other print materials that effectively communicate your message.",
    },
    {
      title: "Social Media Graphics",
      description:
        "Develop engaging visual content for your social media platforms to increase engagement and brand awareness.",
    },
    {
      title: "Website Design",
      description:
        "Create user-friendly, visually appealing websites that showcase your products or services.",
    },
  ];

  return (
    <div className={classes.background}>
      <Container size="lg" className={classes.wrapper}>
        <Stack align="center" gap={30} className={classes.header}>
          <Text c="violet" fw={500} size="lg" tt="uppercase">
            Services
          </Text>
          <Title order={1} size={48} ta="center">
            What I Offer
          </Title>
          <Text size="xl" c="dimmed" maw={800} ta="center">
            From branding to digital marketing, I provide a range of services to
            help your business thrive.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={40}
          className={classes.grid}
        >
          {services.map((service) => (
            <Card key={service.title} className={classes.card}>
              <div className={classes.iconWrapper}>
                <IconChevronRight size={24} className={classes.icon} />
              </div>
              <Title order={3} mb="sm">
                {service.title}
              </Title>
              <Text size="lg" c="dimmed">
                {service.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default OfferSection;
