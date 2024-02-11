import fs from "node:fs";
import sharp from "sharp";
import {join, basename, extname} from "node:path";

const directory = "public/assets/images/projects";
const files = await fs.promises.readdir(directory);

const images = files.filter(
  archivo => extname(archivo).toLowerCase() === ".png"
);

for await (const file of images) {
  const output = join(
    directory,
    "screens",
    basename(file, extname(file)) + ".webp"
  );

  const convert = sharp(join(directory, file))
    .resize({
      width: 840,
    })
    .webp({
      lossless: false,
      quality: 70,
    });

  await convert.toFile(output);
}
