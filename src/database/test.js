const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.5146964",
        lng: "-47.4971123",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
        whatsapp: "15 98765-4321",
        images: [
            "https://images.unsplash.com/photo-1602615644018-d071a559f79a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1600690052031-c0a4b1dad84e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1602618150157-0eadc24bc686?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1600991610954-04c8dede6422?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1601022069084-17c9bcf55e8c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1601086386762-0620518df7f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas                 Das 15h até 06h",
        open_on_weekends: "0"
    })

    /* await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.5146964",
            "-47.4971123",
            "Lar dos Meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
            "15 98765-4321",
            "https://images.unsplash.com/photo-1601927366577-06132f606808?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas                 Das 18h até 08h",
            "0"
        );
    `)
 */
    // consultar dados da tabela
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    /*
    // consultar orfatato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // deletar dado da tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id = "4" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "5" '))
    */
})