import Swal from "sweetalert2";

class Polindromo {
    #palabra;

    constructor() {
        this.#palabra = '';
        this.agregarEventos();
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
                confirmButtonColor: '#be7200ff'
            });
            return;
        }

        if (this.esPalindromo(this.#palabra)) {
            Swal.fire({
                icon: 'success',
                title: '✅ ¡Sí es un palíndromo!',
                text: `"${this.#palabra}" se lee igual al derecho y al revés`,
                confirmButtonColor: '#03801cff'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: '❌ No es un palíndromo, Intenta de nuevo!!',
                text: `"${this.#palabra}" no se lee igual al derecho y al revés`,
                confirmButtonColor: '#ab1111ff'
            });
        }
    }
}

export default Polindromo;
