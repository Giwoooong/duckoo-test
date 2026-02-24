import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell">
      <main className="panel parchment">
        <h1>페이지를 찾을 수 없습니다</h1>
        <p className="lead">요청한 테스트가 존재하지 않거나 경로가 변경되었습니다.</p>
        <Link href="/" className="startButton" style={{ display: "inline-flex", width: "fit-content" }}>
          홈으로 이동
        </Link>
      </main>
    </div>
  );
}
