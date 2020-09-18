module.exports.table = (rows, startRow, limitRows) => {
    const newRows = [];
    const description = [];
    let totalRows;

    for (let i = 0; i < global.description.length; i++) {
        const key = global.description[i].origin;
        const valueField = rows[0][key];

        if (valueField !== undefined ) {
            for (let j = 0; j < rows.length; j++) {
                if (newRows[j]) {
                    newRows[j][key] = rows[j][key];
                } else {
                    newRows[j] = {};
                    newRows[j][key] = rows[j][key];
                }
            }
            description.push(global.description[i]);
        }
    }

    if (rows.length !== limitRows) {
        totalRows = startRow + rows.length
    }

    return {
        description,
        rows: newRows,
        totalRows
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
