import { requiredUser } from "@/hooks/requiredUser";

export default async function OrdersPage() {
  await requiredUser();
  return <div>Orders</div>;
}
