 // Script para que las nubes sigan el cursor
        const miniCloud1 = document.getElementById('miniCloud1');
        const miniCloud2 = document.getElementById('miniCloud2');
        const miniCloud3 = document.getElementById('miniCloud3');
        const miniCloud4 = document.getElementById('miniCloud4');
        
        // Posición inicial centrada
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        // Posiciones para las nubes seguidoras
        let cloud1X = mouseX;
        let cloud1Y = mouseY;
        let cloud2X = mouseX;
        let cloud2Y = mouseY;
        let cloud3X = mouseX;
        let cloud3Y = mouseY;
        let cloud4X = mouseX;
        let cloud4Y = mouseY;

        // Seguir el movimiento del mouse
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animar las nubes seguidoras con efecto de retraso
        function animateMiniClouds() {
            // Cada nube sigue al cursor con diferente velocidad
            cloud1X += (mouseX - cloud1X) * 0.15;
            cloud1Y += (mouseY - cloud1Y) * 0.15;
            miniCloud1.style.left = (cloud1X - 45) + 'px';
            miniCloud1.style.top = (cloud1Y - 25) + 'px';

            cloud2X += (cloud1X - cloud2X) * 0.12;
            cloud2Y += (cloud1Y - cloud2Y) * 0.12;
            miniCloud2.style.left = (cloud2X - 35) + 'px';
            miniCloud2.style.top = (cloud2Y - 20) + 'px';

            cloud3X += (cloud2X - cloud3X) * 0.09;
            cloud3Y += (cloud2Y - cloud3Y) * 0.09;
            miniCloud3.style.left = (cloud3X - 30) + 'px';
            miniCloud3.style.top = (cloud3Y - 17) + 'px';

            cloud4X += (cloud3X - cloud4X) * 0.06;
            cloud4Y += (cloud3Y - cloud4Y) * 0.06;
            miniCloud4.style.left = (cloud4X - 25) + 'px';
            miniCloud4.style.top = (cloud4Y - 15) + 'px';

            requestAnimationFrame(animateMiniClouds);
        }

        // Iniciar animación
        animateMiniClouds();

        // Posición inicial
        miniCloud1.style.left = (mouseX - 45) + 'px';
        miniCloud1.style.top = (mouseY - 25) + 'px';
        miniCloud2.style.left = (mouseX - 35) + 'px';
        miniCloud2.style.top = (mouseY - 20) + 'px';
        miniCloud3.style.left = (mouseX - 30) + 'px';
        miniCloud3.style.top = (mouseY - 17) + 'px';
        miniCloud4.style.left = (mouseX - 25) + 'px';
        miniCloud4.style.top = (mouseY - 15) + 'px';