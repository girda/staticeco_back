module.exports.table = (data) => {
    const newData = [];
    const description = [];

    for (let i = 0; i < global.description.length; i++) {

        const valueField = data[0][global.description[i].origin];

        if (valueField !== undefined ) {
            let counter = 0;
            for (let j = 0; j < data.length; j++) {
                if (newData[counter]) {
                    newData[counter][global.description[i].origin] = data[j][global.description[i].origin];
                    counter++;
                } else {
                    newData[counter] = {};
                    newData[counter][global.description[i].origin] = data[j][global.description[i].origin];
                    counter++;
                }
            }
            description.push(global.description[i]);
        }
    }

    return {
        description,
        data: newData
    }
};

module.exports.substances = (data) => {
    const newData = [];

    data.forEach(row => {
        global.substances.forEach(substance => {
            if (row.tr_par1_id === substance.ss_code) {
                newData.push({
                    tr_table: row.tr_table,
                    name: substance.ss_name
                })
            }
        })
    });

    return newData;
};
