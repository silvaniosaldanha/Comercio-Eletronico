const { Builder, By, Key,} = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");
async function example(){

// Definindo o navegador.

const driver = new Builder().forBrowser("chrome").build();

// Iniciando o site. 

driver.manage().window().maximize();
driver.get("http://automationpractice.com/index.php");

// Criando acesso 
await driver.findElement(By.css ("#header > div.nav > div > div > nav > div.header_user_info > a")).click ();
await driver.findElement(By.id ("email_create")).sendKeys("silvanio.saldanha@yahoo.com", Key.RETURN);
await driver.findElement(By.css ("#id_gender1")).click ();
await driver.findElement(By.xpath ("/html/body/div[1]/div[2]/div/div[3]/div/div/form/div[1]/div[2]/input")).sendKeys("Saldanha");
}
example()
