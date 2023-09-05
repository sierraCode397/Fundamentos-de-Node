const puppeteer = require('puppeteer');

(async () => {
    console.log("Lanzamos Navegador")
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless:false}); //Para poder verlo

    const page = await browser.newPage();//Solo abre la pagina
    await page.goto('http://es.wikipedia.org/wiki/Node.js'); //Te dirije a algun lugar


    //Optenemos los datos de de la pagina a la que entramos
    let titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);

        return h1.innerHTML;
    });
    console.log(titulo1);

    console.log("Cerramos navegador.....");
    browser.close();
    console.log("Navegador cerrado");
})();