const { Schema, model } = require('mongoose')

const DatosSchema = Schema({

    value: {
        type: String,
    },
    
});

DatosSchema.methods.toJSON = function () {
    const { __v,_id,...data} = this.toObject();
    data.id=_id;
    return data;
}

module.exports = model('Datasen',DatosSchema);
