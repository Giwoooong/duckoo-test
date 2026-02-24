# 테스트 추가 가이드

1. `lib/tests/<theme-id>-questions.json` 파일을 생성하고 문제 배열을 넣습니다.
2. `lib/tests/<theme-id>.ts` 파일에서 `Theme` 객체를 export 합니다.
3. `lib/tests/registry.ts`에 새 테마를 등록합니다.
4. 홈 화면(`app/HomeClient.tsx`)에 테스트 카드/버튼을 추가합니다.

문제 스키마는 `lib/tests/types.ts`의 `Question` 타입을 따릅니다.
