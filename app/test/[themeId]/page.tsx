import { notFound } from "next/navigation";
import TestClient from "./TestClient";
import { getTheme } from "@/lib/tests/registry";

export default async function TestPage({ params }: { params: Promise<{ themeId: string }> }) {
  const { themeId } = await params;
  const theme = getTheme(themeId);
  if (!theme) notFound();

  return <TestClient theme={theme} />;
}
