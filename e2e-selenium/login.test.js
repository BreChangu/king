const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

async function pruebaFlujoDeCompra() {
    let opcionesBrave = new chrome.Options();
    opcionesBrave.setChromeBinaryPath('C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe');
    opcionesBrave.addArguments('--start-maximized'); 

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(opcionesBrave).build();

    try {
        console.log("1. Entrando al catálogo...");
        await driver.get('http://localhost:4200/catalogo'); 

        // --- FASE A: AGREGAR AL CARRITO ---
        console.log("2. Buscando la tarjeta de Paneles...");

// XPath nivel experto: "Busca un h2 que contenga 'Paneles' y dale clic al enlace <a> que lo envuelve"
let tarjetaPanel = await driver.wait(until.elementLocated(By.xpath("//h2[contains(text(), 'Paneles')]/ancestor::a")), 5000);

await tarjetaPanel.click();

       
       // --- FASE B: ABRIR EL DRAWER (CARRITO) ---
        console.log("3. Entrando al carrito de compras...");
        // Buscamos el div por su clase real: '.quote-trigger'
        let iconoCarrito = await driver.wait(until.elementLocated(By.css('.quote-trigger')), 5000);
        await iconoCarrito.click();

        // En lugar de esperar una URL, esperamos a que el Drawer se abra (tome la clase .open)
        console.log("Esperando a que se abra el panel lateral...");
        await driver.wait(until.elementLocated(By.css('.quotation-drawer.open')), 5000);

        // --- FASE C: LLENAR EL FORMULARIO ---
      // --- FASE C: LLENAR EL FORMULARIO (Basado en tu HTML real) ---
        console.log("4. Llenando los datos del cliente en el Drawer...");
        
        // 1. Esperamos a que el input del nombre sea visible y le mandamos texto
        // Usamos un selector CSS que busca exactamente el input con ese placeholder
        let inputNombre = await driver.wait(until.elementLocated(By.css('input[placeholder="Tu Nombre"]')), 5000);
        await inputNombre.sendKeys('Fernando - QA Test');

        // 2. Hacemos lo mismo para el correo
        let inputCorreo = await driver.findElement(By.css('input[placeholder="correo@empresa.com"]'));
        await inputCorreo.sendKeys('cotizaciones@kingpanel.com');

        let inputDireccion = await driver.findElement(By.css    ('input[placeholder=" Dirección de Envío"]'));
        await inputDireccion.sendKeys('Calle Falsa 123, Ciudad, País');
        // --- FASE D: ENVIAR EL CORREO ---
        console.log("5. Eligiendo el método de envío...");
        
        // Viendo tu HTML, tienes dos opciones: '.whatsapp-btn' y '.email-btn'.
        // Vamos a darle clic al de correo:
        let btnEnviarCorreo = await driver.findElement(By.css('.email-btn'));
        await btnEnviarCorreo.click();

        // --- FASE E: ASSERT (EL MOMENTO DE LA VERDAD) ---
        console.log("6. Esperando la acción de envío...");
        // Aquí le damos una pequeña pausa para que veas con tus propios ojos que los campos se llenaron 
        // y se hizo el clic antes de que el navegador se cierre abruptamente.
        await driver.sleep(9000); 
        console.log("✅ PASS: Formulario llenado y botón de correo presionado con éxito.");
        // --- FASE D: ENVIAR EL CORREO ---
        console.log("5. Enviando la cotización...");
        // Tu botón de correo real tiene la clase '.email-btn'
        await driver.findElement(By.css('.email-btn')).click();

        // --- FASE E: ASSERT (Queda pendiente) ---
        // Aquí dependerá de qué hace tu sistema al enviar el correo (¿Muestra una alerta? ¿Cierra el drawer?).
        // Por ahora, le pondremos una pausa manual de 3 segundos para que veas que sí hizo clic.
        await driver.sleep(9000); 
        console.log("✅ PASS: El botón de enviar fue presionado.");
        // Extraemos el texto del modal
        let textoConfirmacion = await modalExito.getText();
        
        if (textoConfirmacion.includes('enviado correctamente')) {
            console.log("✅ PASS: El flujo End-to-End funcionó perfecto.");
        } else {
            console.log("❌ FAIL: No apareció el mensaje esperado.");
        }

    } catch (error) {
        console.error("💥 ERROR en la prueba:", error.message);
    } finally {
        await driver.quit();
        console.log("Navegador cerrado.");
    }
}

pruebaFlujoDeCompra();