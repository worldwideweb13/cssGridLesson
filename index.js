document.addEventListener("DOMContentLoaded", () => {
  // フェーズごとのフェードイン設定
  const phrases = [
    { id: "phrase1", delay: 500 }, // 0.5秒後に最初のフレーズを表示
    { id: "phrase2", delay: 3000 }, // 3秒後に次のフレーズを表示
  ];

  // 各フレーズを順に表示
  phrases.forEach((phrase) => {
    setTimeout(() => {
      document.getElementById(phrase.id).classList.add("show");
    }, phrase.delay);
  });

  // メインビジュアル画像をフェードイン
  const image = document.querySelector(".main-visual img");
  setTimeout(() => {
    image.classList.add("fade-in");
  }, 5000); // フレーズの表示後に画像をフェードイン

  // ナビゲーションリンクのスクロール設定

  // RSSフィードの取得
});

// RSSフィードを取得し、表示する関数

// 各ブログカードを生成する関数
