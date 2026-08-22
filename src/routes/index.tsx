import { createFileRoute } from "@tanstack/react-router";
import { Viewer } from "@/components/viewer/Viewer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Viewer />;
}
