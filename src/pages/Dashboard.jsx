import { Heading, Container } from "@chakra-ui/react";
export default function Dashboard() {
  return (
    <Container>
      <Heading as="h1" size="4xl" noOfLines={2}>
        I'm overriding this heading
      </Heading>
    </Container>
  );
}
