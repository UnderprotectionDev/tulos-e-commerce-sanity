import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { HomeBanner } from "@/components/home-banner";
export default function Home() {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
      </Container>
    </div>
  );
}
