const fs = require("node:fs");
const { version } = require("node:os");
const path = require("node:path");
const childProcess = require("node:child_process");

const nodewifi = require("node-wifi");

const deleteFile = () => {
  const fileExists = fs.existsSync("sample.txt");
  console.log("fileExists", fileExists);
  if (fileExists) {
    fs.unlink("sample.txt", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File Delelted successfully");
    });
    // try {
    //      fs.unlink("sample.txt");
    //     } catch (err) {
    //       console.log(err);
    //     }
  }
};
// deleteFile();

// C:\Users\azitr\Desktop\Create\backend\module_6\classes\19-05-2025\filesystem2.js
// console.log(`${__dirname}../17-05-2025`);
// console.log(__dirname);
// // console.log(__filename);
// const joinPath = path.join(__dirname, "../", "17-05-2025", "sample.txt");
// console.log(path.parse(joinPath));
// console.log(path.extname(joinPath));
// fs.unlink(joinPath, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file deleted successfully");
// });
// console.log(joinPath);

const userDetails = [
  {
    id: 1,
    name: "Azit",
  },
  {
    id: 2,
    name: "Rana",
  },
];

const package = {
  name: "my-project",
  version: "1.0.0",
  depedencdies: {
    axiox: "^1.0.0",
    react: "^18.5.2",
  },
};

// fs.writeFile("package.json", JSON.stringify(package), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("file created successfully");
// });

// childProcess.exec("start calc");

nodewifi.init({
  iface: null, // network interface, choose a random wifi interface if set to null
});

nodewifi.scan((error, networks) => {
  if (error) {
    console.log(error);
  } else {
    console.log(networks);
  }
});
