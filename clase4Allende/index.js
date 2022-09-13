const division = (a,b) => a / b;
const resta = (a,b) => a - b;
const comision = x => x * 0.01;

        let precioBitcoin = parseFloat(prompt("Ingrese precio Bitcoin"));
        let precioEther = parseFloat(prompt("Ingrese precio Ether"));
        let precioSolana = parseFloat(prompt("Ingrese precio Solana"));
        let precioPolygon = parseFloat(prompt("Ingrese precio Polygon")); 
        let cantidadDolares = parseFloat(prompt("Ingrese cantidad de Dolares que tenga"));

        let cantidadBitcoin = division(resta(cantidadDolares, comision(cantidadDolares)), precioBitcoin);
        alert(`Usted tiene ${cantidadBitcoin} BTC`);
        let cantidadEther = division(resta(cantidadDolares, comision(cantidadDolares)), precioEther);
        alert(`Usted tiene ${cantidadEther} ETH`) 
        let cantidadSolana = division(resta(cantidadDolares, comision(cantidadDolares)), precioSolana);
        alert(`Usted tiene ${cantidadSolana} SOL`)
        let cantidadPolygon = division(resta(cantidadDolares, comision(cantidadDolares)), precioPolygon);
        alert(`Usted tiene ${cantidadPolygon} MATIC`);