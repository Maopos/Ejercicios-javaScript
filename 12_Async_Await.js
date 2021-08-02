const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman',
    year: 2017
},{
    id: 3,
    title: 'Avengers',
    year: 2019
}];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0) {
            reject('No hay datos');
        }
        setTimeout(() => {
    
            resolve(datos);
    
        }, 2500)

    })
    
}

async function fetchingDatos() {

    
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched);
        
    } catch (error) {
        console.log('Pailas...' + error);
        
    }
}

fetchingDatos();