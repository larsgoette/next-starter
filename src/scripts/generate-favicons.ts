import { APPLE_ICON_BACKGROUND_COLOR } from "@/app/config";
import { favicons } from "favicons";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const inputFile = process.argv[2];

if (!inputFile) {
  console.error("Please provide an input file path");
  process.exit(1);
}

const configuration = {
  icons: {
    android: false,
    appleIcon: {
      offset: 10,
      background: APPLE_ICON_BACKGROUND_COLOR,
      transparent: false,
      rotate: false,
      sizes: [{ width: 180, height: 180 }],
    },
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false,
  },
};

async function generateFavicons() {
  try {
    const fileExtension = path.extname(inputFile).toLowerCase();
    const targetDir = path.join(__dirname, "..", "app");

    if (![".svg", ".png"].includes(fileExtension)) {
      throw new Error("Input file must be either .svg or .png");
    }

    console.log("Generating favicons...");
    const response = await favicons(inputFile, configuration);

    for (const image of response.images) {
      const fileName = image.name;
      let targetName = fileName;

      if (fileName === "apple-touch-icon-180x180.png") {
        targetName = "apple-icon.png";
      } else if (fileName === "favicon.ico") {
        targetName = "favicon.ico";
      } else {
        continue;
      }

      const filePath = path.join(targetDir, targetName);
      await fs.writeFile(filePath, image.contents);
      console.log(`Generated: ${targetName}`);
    }

    if (fileExtension === ".svg") {
      await fs.copyFile(inputFile, path.join(targetDir, "icon.svg"));
      console.log("Generated: icon.svg");
    } else {
      await sharp(inputFile)
        .resize(180, 180, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(path.join(targetDir, "icon.png"));
      console.log("Generated: icon.png");
    }

    console.log("Favicon generation completed successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
    process.exit(1);
  }
}

generateFavicons();
