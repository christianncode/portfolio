import fs from "node:fs";
import {join, basename, extname} from "node:path";
import sharp from "sharp";
import {imageSizes} from "../src/constants/images.js";

const directory = "public/assets/images/projects";
const files = await fs.promises.readdir(directory);

const images = files.filter(
  archivo => extname(archivo).toLowerCase() === ".png"
);

const convert = (sizeName, file) => {
  const output = join(
    directory,
    "screens",
    basename(file, extname(file)) + `-${sizeName}.webp`
  );

  return sharp(join(directory, file))
    .resize({
      width: imageSizes[sizeName],
    })
    .webp({
      lossless: false,
      quality: 70,
    })
    .toFile(output);
};

for await (const file of images) {
  await convert("small", file);
  await convert("medium", file);
  await convert("large", file);
  await convert("xlarge", file);
}
