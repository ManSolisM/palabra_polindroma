import Swal from "sweetalert2";

class Polindromo {
    #palabra;

    constructor() {
        this.#palabra = '';
        this.inicializar();
    }

    inicializar() {
        // Crear el contenedor HTML
        const container = document.createElement('div');
        container.className = 'polindromo-container';
        container.innerHTML = `
            <div class="polindromo-card">
                <h1> Verificador de Palíndromos</h1>
                
                <div class="input-group">
                    <label for="textInput">Ingresa una palabra o frase:</label>
                    <input type="text" id="textInput" placeholder="Ejemplo: Oso, Ana, Anita lava la tina...">
                </div>
                
                <button id="verificarBtn">Verificar</button>
            </div>
        `;

        document.body.appendChild(container);

        // Agregar estilos
        this.agregarEstilos();

        // Agregar eventos
        this.agregarEventos();
    }

    agregarEstilos() {
        const style = document.createElement('style');
        style.textContent = `
            .polindromo-container {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                padding: 20px;
            }

            .polindromo-card {
                background: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                max-width: 500px;
                width: 100%;
            }

            .polindromo-card h1 {
                text-align: center;
                color: #667eea;
                margin-bottom: 30px;
                font-size: 2em;
            }

            .polindromo-card .input-group {
                margin-bottom: 20px;
            }

            .polindromo-card label {
                display: block;
                margin-bottom: 10px;
                color: #333;
                font-weight: 600;
            }

            .polindromo-card input[type="text"] {
                width: 100%;
                padding: 15px;
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                font-size: 16px;
                transition: border-color 0.3s;
            }

            .polindromo-card input[type="text"]:focus {
                outline: none;
                border-color: #667eea;
            }

            .polindromo-card button {
                width: 100%;
                padding: 15px;
                background: #7817b0ff;
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
            }

            .polindromo-card button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
            }

            .polindromo-card button:active {
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    agregarEventos() {
        const input = document.getElementById('textInput');
        const btn = document.getElementById('verificarBtn');

        btn.addEventListener('click', () => this.verificar());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.verificar();
            }
        });
    }

    limpiarTexto(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, '');
    }

    esPalindromo(texto) {
        const textoLimpio = this.limpiarTexto(texto);
        const textoInvertido = textoLimpio.split('').reverse().join('');
        return textoLimpio === textoInvertido;
    }

    verificar() {
        const input = document.getElementById('textInput');
        this.#palabra = input.value;

        if (this.#palabra.trim() === '') {
            Swal.fire({
                icon: 'warning',
                title: '⚠️ Atención',
                text: 'Por favor ingresa una palabra o frase',
                confirmButtonColor: '#c7790bff'
            });
            return;
        }

        if (this.esPalindromo(this.#palabra)) {
            Swal.fire({
                icon: 'success',
                title: '✅ ¡Sí es un palíndromo!',
                text: `"${this.#palabra}" se lee igual al derecho y al revés`,
                confirmButtonColor: '#078d0bff'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: '❌ No es un palíndromo, intenta de nuevo',
                text: `"${this.#palabra}" no se lee igual al derecho y al revés`,
                confirmButtonColor: '#be1313ff'
            });
        }
    }
}

export default Polindromo;