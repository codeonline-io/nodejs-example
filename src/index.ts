
import * as express from "express";

async function main(): Promise<void> {

  let app = express();

  app.get("/", (req, res, next) => {
    res.send("Hello World");
  });

  let port = 3000;

  await new Promise((resolve, reject) => {
    app.listen(port, () => {
      resolve();
    }).on("error", e => {
      reject(e);
    });
  });

  console.info(`Webserver is listening on https://code.codeonline.io/proxy/${port} 🚀`)
}

main().then(() => {
  let startupTime = process.uptime();
  console.info(`Application started in ${startupTime.toFixed(2)}s`);
}).catch(e => {
  console.error(`Fatal error`, e);
  process.exit(1);
});