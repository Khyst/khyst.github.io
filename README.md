# Yonghun Kim · Robotics Portfolio

GitHub Pages / Jekyll 기반 개인 포트폴리오입니다. 별도 JavaScript 프레임워크나 빌드 도구 없이 HTML과 CSS를 수정합니다.

## 수정할 파일 찾기

| 바꾸려는 부분 | 파일 |
| --- | --- |
| 페이지 제목, 검색 설명, 섹션 표시 순서 | `index.html` |
| 상단 이름과 메뉴 | `_includes/header.html` |
| 이름, 소개, 프로필 사진, CV·외부 링크 | `_includes/sections/home.html` |
| 연구 관심사 | `_includes/sections/research.html` |
| 경력, 학력, 기술 목록 | `_includes/sections/experience.html` |
| 프로젝트 순서, 텔레메트리·경로 계획 프로젝트 | `_includes/sections/projects.html` |
| 양팔 휴머노이드 물체 조작 | `_includes/projects/manipulation.html` |
| 원격조작 | `_includes/projects/teleoperation.html` |
| 제스처 인식 | `_includes/projects/gesture.html` |
| 캐릭터 로봇 | `_includes/projects/character.html` |
| 성적, 논문, 수상, 활동, 어학 | `_includes/sections/academic.html` |
| 하단 문구 | `_includes/footer.html` |
| 배경·글자·포인트 색상, 글꼴, 공통 버튼 | `assets/css/base.css` |
| 섹션별 배치와 여백 | `assets/css/sections.css` |
| 모바일·태블릿 화면 | `assets/css/responsive.css` |
| 동영상 동시 재생 방지, GIF 불러오기, 연도 | `assets/app.js` |

`assets/style.css`는 위 CSS 세 파일을 순서대로 불러오는 진입점입니다. 색상은 `base.css` 맨 위의 `:root` 변수에서 바꿀 수 있습니다.

## 프로젝트 추가하기

1. `_includes/projects/`에서 비슷한 프로젝트 파일을 복사합니다.
2. 새 파일의 `id`, 제목, 설명, 영상 경로를 수정합니다. `id`는 페이지 안에서 중복되지 않아야 합니다.
3. `_includes/sections/projects.html`의 원하는 위치에 `{% include projects/새파일.html %}`을 추가합니다.

이미지는 `images/`, 영상은 `videos/`, CV는 `reference/`에 보관합니다. include 파일 안에서도 경로는 `index.html`을 기준으로 작성합니다. 동영상은 사용자가 재생할 때 로드하며, 대용량 GIF는 버튼을 클릭할 때만 불러옵니다.

## 로컬 확인

Ruby와 Bundler가 설치된 환경에서 프로젝트 폴더 안에서 실행합니다.

```sh
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000`을 엽니다. Jekyll이 include를 조합하므로 `index.html` 파일을 직접 열거나 일반 정적 서버만 실행하면 전체 화면이 표시되지 않습니다. GitHub Pages에서는 기존 Jekyll 설정으로 조합됩니다. 저장소의 Pages 배포 방식이 GitHub Actions라면 해당 워크플로에서 Jekyll 빌드를 실행해야 합니다.
