const { Builder, By, Key,} = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");
async function login (){

// Definindo o navegador.

const driver = new Builder().forBrowser("chrome").build();

// Iniciando o site. 

driver.manage().window().maximize();
driver.get("http://automationpractice.com/index.php");

//Login com sucesso
await driver.findElement(By.css ("#header > div.nav > div > div > nav > div.header_user_info > a")).click()
await driver.findElement(By.id("email").sendKeys("silvaniosaldanha1@hotmail.com", Key.RETURN));
await driver.findElement(By.id ("passwd").sendKeys("cypress", Key.RETURN));
await driver.findElement(By.css ("#SubmitLogin > span")).click()
await driver.wait(webdriver.until.elementLocated(webdriver.By.id("#center_column > div.alert.alert-danger > ol > li")), 1500);

//Login inválido
await driver.findElement(By.css ("#header > div.nav > div > div > nav > div.header_user_info > a")).click()
await driver.findElement(By.id ("email").sendKeys("silvaniosaldanha1@hotmail.com", Key.RETURN));
await driver.findElement(By.id ("passwd").sendKeys("selenium", Key.RETURN));
await driver.findElement(By.css ("#SubmitLogin > span")).click()
await driver.wait(webdriver.until.elementLocated(webdriver.By.id("#center_column > div.alert.alert-danger > ol > li")), 1500);

//Login em branco
await driver.findElement(By.css ("#header > div.nav > div > div > nav > div.header_user_info > a")).click()
await driver.findElement(By.css ("#center_column > div.alert.alert-danger > ol > li")).click()
await driver.wait(webdriver.until.elementLocated(webdriver.By.id("#center_column > div.alert.alert-danger > ol > li")), 1500);

}
login();
