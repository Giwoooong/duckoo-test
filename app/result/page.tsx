import { Suspense } from "react";
import ResultClient from "./ResultClient";

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="shell"><main className="panel glass"><p style={{ textAlign: 'center', marginTop: '2rem' }}>결과를 불러오는 중입니다...</p></main></div>}>
      <ResultClient />
    </Suspense>
  );
}
