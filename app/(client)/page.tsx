import { Container } from "@/components/container";
import { HomeBanner } from "@/components/home-banner";
import { ProductGrid } from "@/components/product-grid";
export default function Home() {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}
