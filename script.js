const imagenes = [
    "https://static.vecteezy.com/system/resources/previews/018/931/565/original/soccer-ball-icon-png.png",
    "https://img.freepik.com/vector-gratis/bola_1308-18679.jpg?size=626&ext=jpg&ga=GA1.1.539837299.1712016000&semt=ais",
    "https://img.freepik.com/vector-premium/pelota-tenis-imagen-aislado-3d-deportes-pelota_560245-511.jpg",
    "https://static.vecteezy.com/system/resources/previews/015/158/783/original/boxing-gloves-logo-icon-illustration-vector.jpg",
    "https://infanity.es/wp-content/uploads/2018/10/238-13222_pelota-futbol-americano.jpg",
    "https://blackcrown.es/wp-content/uploads/2024/02/jimsports_pala_pdel_black_crown_wolf.jpg"
];

let dineroDisponible = 50;

const cargarImagenAleatoria = (slotId) => {
   const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
   const imagenAleatoria = imagenes[indiceAleatorio];
   const slot = document.getElementById(slotId);
   slot.querySelector('.imagen').innerHTML = '<img src="' + imagenAleatoria + '">';
}

const cargarImagenesAleatorias = () => {
    cargarImagenAleatoria('slot1');
    cargarImagenAleatoria('slot2');
    cargarImagenAleatoria('slot3');
}
cargarImagenesAleatorias();

const sonidoVictoria = document.getElementById("sonidoVictoria");

const girar = () => {
    if (dineroDisponible > 0) {
        dineroDisponible--;
        document.getElementById("dinero").innerText = dineroDisponible;
        cargarImagenesAleatorias();
        const imagenEnSlotUno = document.getElementById("slot1").querySelector('.imagen').querySelector('img').src;
        const imagenEnSlotDos = document.getElementById("slot2").querySelector('.imagen').querySelector('img').src;
        const imagenEnSlotTres = document.getElementById("slot3").querySelector('.imagen').querySelector('img').src;

        if (imagenEnSlotUno === imagenEnSlotDos && imagenEnSlotUno === imagenEnSlotTres) {
            alert("¡Has ganado 20 créditos! Lucky u!!");
            dineroDisponible += 20; 
            document.getElementById("dinero").innerText = dineroDisponible;
            sonidoVictoria.play();
        } 
        if (dineroDisponible === 0) {
            alert("¡Has perdido! Vuelve a intentarlo");
        }
    } else {
        alert("No tienes créditos para jugar");
    }
}

document.getElementById("tirar").addEventListener("click", girar);
