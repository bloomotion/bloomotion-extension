# 🌷 Bloomotion

새 탭 페이지에 내 감정 상태를 투영한 애니메이션 효과를 적용해 보세요!

✅ 확장 프로그램 사용 전 [Bloomotion](https://www.bloomotions.com/) 웹 사이트에 접속해 감정을 등록해 주세요.

[웹 어플리케이션 Bloomotion Github](https://github.com/bloomotion/bloomotion-frontend)

## 설치 및 다운로드

---

### 1. 클론 받고 설치하기

```
git clone https://github.com/bloomotion/bloomotion-extension.git
cd bloomotion-extension
npm install
```

### 2. 크롬 브라우저에 확장 프로그램 로드

크롬 브라우저를 열고 `chrome://extensions/`에 접속합니다.

<img width="1440" alt="크롬 확장 프로그램" src="https://user-images.githubusercontent.com/81972688/160538005-09de43e9-fdde-4476-9a55-630e492c2137.png">

우측 상단에 개발자 모드를 켭니다.

좌측 상단에 `압축해제된 확장 프로그램을 로드합니다` 버튼을 클릭합니다.

이전 과정에서 클론 받은 bloomotion-extension 폴더를 선택합니다. bloomotion 확장 프로그램이 설치될 것입니다.

OAuth2 키를 bloomotion-extension 폴더 안에 있는 manifest.json 파일의 client_id에 입력합니다.

<details>
  <summary>OAuth2 키 발급받기</summary>

[Google Cloud Console 페이지로 이동](https://console.cloud.google.com/)

검색창에 'credentials' 검색 후 Credentials를 클릭해 주세요.

  <img width="653" alt="credential 검색" src="https://user-images.githubusercontent.com/81972688/160542781-377d17da-5c1d-4e6f-b79e-b2ea50a52279.png">

사용자 인증 정보 만들기를 클릭한 후 OAuth 클라이언트 ID를 클릭 해주세요.

  <img width="433" alt="OAuth 클라이언트 ID" src="https://user-images.githubusercontent.com/81972688/160542996-b7f91d37-3398-4c88-b0bb-a79409eae245.png">

애플리케이션 유형으로 Chrome 앱을 선택해 주세요.

  <img width="560" alt="애플리케이션 유형" src="https://user-images.githubusercontent.com/81972688/160543495-016f49a4-1229-433b-8e8f-7e26665a0ed5.png">

이름과 애플리케이션 ID를 작성해 주세요.

  <img width="563" alt="애플리케이션 ID" src="https://user-images.githubusercontent.com/81972688/160544084-00039a84-a799-44a9-b4fb-ed7ccc20d11d.png">

애플리케이션 ID는 확장 프로그램 ID로 작성해 주세요.

  <img width="396" alt="애플리케이션 ID" src="https://user-images.githubusercontent.com/81972688/160543844-0d320575-07d5-45ec-99a2-385ac938a6a4.png">

</details>

<img width="516" alt="manifest.json client_id 등록" src="https://user-images.githubusercontent.com/81972688/160540036-355e27a2-7c50-40c2-a659-4ecf6aea957a.png">

다시 chrome://extensions/에서 확장 프로그램을 새로고침 합니다.

### 3. Bloomotion 사용하기

Bloomotion 아이콘 클릭 후 나오는 팝업창의 Register 버튼을 누르면 감정이 등록됩니다.

<img width="136" alt="bloomotion Register" src="https://user-images.githubusercontent.com/81972688/160550844-19109e45-abb3-4909-8a1c-aee35d5afeb1.png">

새 탭 페이지 오픈 시 애니메이션 효과가 적용됩니다.
