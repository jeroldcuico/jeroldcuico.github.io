const images = [
  "https://emoji.slack-edge.com/T029D39A0/junreyyy/0971519c195142ba.png",
  "https://emoji.slack-edge.com/T029D39A0/romel_uwu/098a38755493f1c2.png",
  "https://emoji.slack-edge.com/T029D39A0/dance_jerold/ba061b41981e9cab.gif",
  "https://emoji.slack-edge.com/T029D39A0/happy_jason/d4ce1633ba927b74.png",
  "https://emoji.slack-edge.com/T029D39A0/smileroma/df442d86c5de97b0.png",
  "https://emoji.slack-edge.com/T029D39A0/dance_jeffrey/a99f1eb901b3f471.gif",
  "https://emoji.slack-edge.com/T029D39A0/dance_poldo/6cee398483a5f70a.gif",
  "https://emoji.slack-edge.com/T029D39A0/dance_jeffrey/a99f1eb901b3f471.gif",
  "https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif",
  "https://emoji.slack-edge.com/T029D39A0/cute_peace_jerold/6decf7ca78bf4b7f.png",
  "https://emoji.slack-edge.com/T029D39A0/tromatized/93d6aaf36c526bb4.png",
];

function getRandomImages(arr, num) {
    let uniqueImages = new Set();
    while (uniqueImages.size < num) {
      let randomImage = arr[Math.floor(Math.random() * arr.length)];
      uniqueImages.add(randomImage);
    }
    return Array.from(uniqueImages);
  }
const selectedImages = getRandomImages(images, 3);
export function sideBarFooter() {
    return `
      <div class="d-flex justify-content-between align-items-center fs-7 fw-bold mt-4">
          <div style="font-size:0.75rem;">Show some tacos with love</div>
          <div id="footerCredits d-flex gap-2">
              ${setInterval(() => selectedImages.map(i => `<img src="${i}" style="width: 30px; height:30px;">`).join('') , 10000)}
          </div>
      </div>
      `;
  }
