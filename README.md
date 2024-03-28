# IP Location Lookup Program
**This program uses Node.js to query the location information for specified IP addresses.**

## How to Use
1. Install Dependencies:

    Before running the program, please ensure that Node.js is already installed in your environment. Then, use the following command to install the required packages:

    ```bash
    npm install axios
    ```
1. Run the Program:

    First, replace the IP addresses in the sample_ips.txt file with the ones you want to query.
    Next, execute the following command in the terminal to start the program:
    ```bash
    npm run start
    ```
### Function Description
- **`searchCityByIP(ipAddress)`: This function takes an IP address as a parameter and sends a request to a specified API to retrieve the location information for that IP address.**
- **`processIPs()`: This function reads the list of IP addresses from `sample_ips.txt`, queries their location information sequentially, and outputs the results to the console and writes them into the `result.txt` file.**

## Notes
- When the IP location lookup is successful, the IP address and its corresponding location information will be output.

- If an error occurs during the query process, the error information will be displayed in the console.

---
Author: [Sheng] / Last Updated: [2024/03/28]