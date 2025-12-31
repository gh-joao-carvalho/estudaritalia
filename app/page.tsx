import Link from "next/link";
export default function Page() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Estudar Itália</h1>
      <p>Página inicial.</p>

      <Link href="/universidades" style={{ display: "inline-block", marginTop: 12, padding: "12px 16px", borderRadius: 12, background: "#274E43", color: "white", textDecoration: "none", fontWeight: 800 }}>
        Ver universidades →
      </Link>
    </main>
  );
}
