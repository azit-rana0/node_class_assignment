const fs = require("node:fs"); // CJS

/**
 * Creating a file
 * fs.writeFile("filename", "file content", callbackFn)
 */
const createFile = () => {
  const fileName = "demo.txt";
  const fileContent = "Hello there, I'm a nodejs program";
  const fileCb = (err) => {
    if (err) {
      console.log("ERROR CREATING FILE", err);
      return;
    }
    console.log("file created successfully");
  };

  fs.writeFile(fileName, fileContent, fileCb);
};
// createFile();

/**
 * Read a file
 * fs.readFile("filename", callbackFn)
 */
const readFile = () => {
  fs.readFile("sample.txt", (err, data) => {
    if (err) {
      console.log("ERROR READING FILE", err);
      return;
    }
    console.log(data.toString());
  });
};
// readFile();

/**
 * Edit Operation
 */

const editFile = () => {
  const fileContents = "\nContent Line 2";
  fs.appendFile("sample.txt", fileContents, (err) => {
    if (err) {
      consolel.log("ERROR APPENDING DATA TO FILE", err);
      return;
    }
    console.log("file apppended successfully");
  });
};
// editFile();

const smartEditFile = () => {
  /**
   * 1. Read the file fs.readfile()
   * 2. Modify the data read from the file
   * 3. write the file with modified data using fs.WriteFile()
   */

  // fs.readFile("sample.txt", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   const data = data.toString();
  //   // Todo : Write your logic to change your data
  //   const updatedData =
  //     data.substring(0, 10) + "NEW DATA" + data.substring(10, data.length - 1);
  //   fs.writeFile("sample.txt", updatedData, (err) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("file edited successfully");
  //   });
  // });

  try {
    const data = fs.readFileSync("sample.txt");
    const updatedData =
      data.substring(0, 10) + "NEW DATA" + data.substring(10, data.length - 1);
    fs.writeFileSync("sample.txt", updatedData);
  } catch (err) {
    console.log("ERROR IN FILE OPERATION", err);
  }
};
