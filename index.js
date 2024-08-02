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
  fetchRSSFeed();
});

// RSSフィードを取得し、表示する関数
function fetchRSSFeed() {
  const rssUrl = "https://note.com/worldwideweb_13/rss";
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    rssUrl
  )}`;

  fetch(proxyUrl)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const html = data.items.map((el) => createBlogCard(el)).join("");
      document.getElementById("blog-entries").innerHTML = html;
    })
    .catch((error) => console.error("Error fetching RSS feed:", error));
}

// 各ブログカードを生成する関数
function createBlogCard(el) {
  const title = el.title;
  const link = el.link;
  const pubDate = new Date(el.pubDate).toLocaleDateString();
  const imageUrl =
    el.enclosure?.link || el["media:thumbnail"]?.url || "../image/note.png";

  return `
        <div class="blog-card">
          <img src="${imageUrl}" alt="Note記事の画像">
          <div>
            <h3><a href="${link}" target="_blank">${title}</a></h3>
            <p class="meta">${pubDate}</p>
          </div>
        </div>
      `;
}
