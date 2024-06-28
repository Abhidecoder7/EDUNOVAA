import React, { useState, useEffect } from "react";
import "../fonts/stylesheet.css";
import CodeMirror from "@uiw/react-codemirror";
import { cppLanguage } from "@codemirror/lang-cpp";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import axios from "axios";

const extensions = [cppLanguage];
const codeTemplates = {
  cpp: `#include <iostream>
using namespace std;
  
int main() {
  // Your C++ code here
  cout << "Hello World!" << endl;
  return 0;
}
  `,
  javascript: `// your code goes here
console.log("Hello World!");
`,
  c: `#include <stdio.h>

int main() {
  // Your C code here
  return 0;
}
`,
  php: `<?php
// Your PHP code here
?>
`,
  java: `public class Main {
  public static void main(String[] args) {
    // Your Java code here
  }
}
`,
  rust: `fn main() {
    println!("Hello, World!");
}
`,
  python: `# Your Python code here
print("Hello World!")
`,
  go: `package main

import "fmt"

func main() {
  // Your Go code here
}
`,
  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
`,
  perl: `# Your Perl code here
print "Hello, World!\\n";
`,
  ruby: `# Your Ruby code here
puts "Hello, World!"
`,
  typescript: `// Your TypeScript code here
console.log("Hello, World!");
`,
};
function Ide() {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(codeTemplates.cpp);
  const [output, setOutput] = useState("");
  const [codeColor, setCodeColor] = useState("#fff");

  const clearCode = () => {
    setCode(codeTemplates.cpp);
  };

  const onLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(codeTemplates[selectedLanguage]);
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  const runCode = async () => {
    const options = {
      method: "POST",
      url: "https://onecompiler-apis.p.rapidapi.com/api/v1/run",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f6d3ef2a4dmsh7a4cd41b52b16c6p10804ajsnabb4ea4cd0d6",
        "X-RapidAPI-Host": "onecompiler-apis.p.rapidapi.com",
      },
      data: {
        language: `${language}`,
        files: [
          {
            name: `index.${language}`,
            content: code,
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.status === "success") {
        if (response.data.exception) {
          setOutput(response.data.exception);
          setCodeColor("red");
        } else {
          setOutput(response.data.stdout);
          setCodeColor("#fff");
        }
      } else {
        setOutput("Error occurred while running the code.");
        setCodeColor("red");
      }
    } catch (error) {
      console.error("Error:", error);
      setOutput("Error occurred while running the code.");
      setCodeColor("red");
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#56dfdf] to-[#021cba] ">
      <div className="h-20 bg flex justify-center items-center oveflow-hidden">
        <div className="flex w-[1280px] h-full text-black items-end justify-center ml-60">
          <select
            value={language}
            onChange={onLanguageChange}
            className="h-10 text-base Apercu-Medium outline-none text-black border-solid border border-[#2a2a2a] pl-2 rounded-[5px] w-[180px] mb-6 mr-4"
          >
            <option value="cpp">C++ GCC17</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="c">C language</option>
            <option value="php">PHP</option>
            <option value="rust">Rust</option>
            <option value="go">Go</option>
            <option value="csharp">Csharp</option>
            <option value="perl">Perl</option>
            <option value="ruby">Ruby</option>
            <option value="typescript">TypeScript</option>
          </select>
          <button
            onClick={clearCode}
            className="h-10 text-xl transition duration-200 ease-in-out hover:text-white bg-[white] hover:bg-[#10162f] Apercu-Regular outline-none border-solid border border-[#2a2a2a] rounded-[5px] w-[80px] mb-6 mr-4"
          >
            Clear
          </button>
          <button
            onClick={runCode}
            className="h-10 text-xl text-black transition duration-200 ease-in-out bg-yellow-300  hover:text-white  hover:bg-[#242962] Apercu-Regular outline-none border-solid border border-[#2a2a2a] rounded-[5px] w-[80px] mb-6 mr-4"
          >
            Run
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between h-[720px] mb-20">
        <div className="h-full w-[1280px] pl-10 text-xl">
          <div className="h-full w-full bg-[#1e1e1e] p-4 overflow-scroll overflow-x-hidden font-normal rounded-[5px] caret-white">
            <CodeMirror
              value={code}
              id="code"
              height="full"
              theme={vscodeDark}
              extensions={extensions}
              onChange={onChange}
              className={`code-editor ${codeColor}`}
            />
          </div>
        </div>
        <div className="h-full w-[600px] pr-8">
          <textarea
            className="w-full h-[300px] caret-white pl-6 pt-4 text-white text-xl Apercu-Light mb-4 bg-[#1e1e1e] resize-none outline-none rounded-[5px]"
            placeholder="Enter your standard input here"
          ></textarea>
          <div
            placeholder="Your Output"
            id="output"
            className="w-full h-[400px] pl-6 pt-4 text-white text-xl Apercu-Regular whitespace-pre-wrap overflow-y-scroll bg-[#1e1e1e] resize-none outline-none rounded-[5px]"
          >
            {output}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ide;
