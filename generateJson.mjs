import { readdir, writeFile, stat } from "fs/promises";
import { randomUUID } from "crypto";
import { join } from "path";
import { fileURLToPath } from "url";
// import ""
// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

// Parent folder containing 2 folders
const baseFolder = join(__dirname, "/public/assets/images/cardsImages");

async function generateCardData() {
  const cardData = [];

  const folders = await readdir(baseFolder);

  let frontImages = [];
  let detailImages = [];

  for (const folder of folders) {
    const folderPath = join(baseFolder, folder);
    const isDir = (await stat(folderPath)).isDirectory();

    if (isDir) {
      const files = await readdir(folderPath);

      if (folder === 'cardsFront') {
        // Filter for valid image types and collect front images
        frontImages = files.filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
      }

      if (folder === 'cardsDetail') {
        // Filter for valid image types and collect detail images
        detailImages = files.filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
      }
    }
  }

  // Create card data by pairing front and detail images
  for (let i = 0; i < frontImages.length; i++) {
    cardData.push({
      id: randomUUID(),
      image: `/assets/images/cardsImages/cardsFront/${frontImages[i]}`,
      title: `${detailImages[i].split(" ").slice(0, 2).join(" ")}`,
      price: "12$",
      description: `Sample card from cardsFront`,
      detailImage: `/assets/images/cardsImages/cardsDetail/${detailImages[i]}`,
      country: `${detailImages[i].split(" ")[0]}`,
      detalieddescription: '',
      category: `${detailImages[i].split(" ")[1]}`
    });
  }

  // Write the card data to JSON file
  await writeFile(
    join(__dirname, "src/cardsData.json"),
    JSON.stringify(cardData, null, 2)
  );

  console.log("✅ cardsData.json generated from all folders!");
}

generateCardData().catch(console.error);
