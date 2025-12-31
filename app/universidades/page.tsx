import data from "@/data/universidades.json";

type Uni = {
  id?: string | null;
  nome?: string | null;
  cidade?: string | null;
  tipo?: string | null;
  regiao?: string | null;
  pais?: string | null;
  rank_qs?: number | null;
  site?: string | null;
  cursos?: string[] | string | null;
  bolsas?: boolean | null;
};

function normalizeCursos(cursos?: string[] | string | null): string[] {
  if (!cursos) return [];
  if (Array.isArray(cursos)) return cursos;
  return cursos.split(",").map((s) => s.trim()).filter(Boolean);
}

export default function Page() {
  const list = ((data as unknown) as Uni[]).map((u, idx) => ({
    id: (u.id ?? `${idx}`) as string,
    nome: (u.nome ?? "Universidade") as string,
    cidade: (u.cidade ?? "") as string,
    tipo: (u.tipo ?? "") as string,
    regiao: (u.regiao ?? "") as string,
    pais: (u.pais ?? "") as string,
    rank_qs: u.rank_qs ?? null,
    site: (u.site ?? "") as string,
    bolsas: !!u.bolsas,
    cursos: normalizeCursos(u.cursos),
  }));

  return (
    <main style={{ padding: 32 }}>
      <h1>Universidades na Itália</h1>
      <ul>
        {list.map((u) => (
          <li key={u.id} style={{ marginBottom: 16 }}>
            <strong>{u.nome}</strong>
            <br />
            {(u.cidade || u.tipo) && (
              <span>
                {u.cidade ? u.cidade : ""}{u.cidade && u.tipo ? " · " : ""}{u.tipo ? u.tipo : ""}
              </span>
            )}
            <br />
            {u.site && u.site.length > 0 && (
              <a href={u.site} target="_blank" rel="noreferrer">
                Site
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
