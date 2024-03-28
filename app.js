const fs = require("fs").promises; 
const axios = require("axios");

const startTime = Date.now();

const searchCityByIP = async (ipAddress) => {
  try {
    const response = await axios.get(`https://ip.900cha.com/${ipAddress}.html`);
    const result = response.data;

    const cityRegex = /准确归属地:.*?->\s*(.*)/; 
    const match = result.match(cityRegex);
    
    if (match && match[1]) {
      return match[1].trim(); 
    } else {
      console.log("City information not found.");
      return null;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};

const processIPs = async () => {
  try {
    const data = await fs.readFile("sample_ips.txt", "utf8");
    const lines = data.trim().split("\n");

    for (const line of lines) {
      const ipAddress = line.trim();
      const result = await searchCityByIP(ipAddress);
      console.log(`IP：${ipAddress} 位置：${result}`);

      const resultText = `IP：${ipAddress} 位置：${result}\n`;
      await fs.appendFile('result.txt', resultText); 
    }

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    console.log(`總共運行時間：${totalTime/1000} 秒`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

processIPs();