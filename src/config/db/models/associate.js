module.exports = {
    associate: (originModel, destinModel, foreign, alias) =>{
        console.log(originModel, destinModel);
        originModel.belongsTo( destinModel, {
            foreignKey: {
                name: foreign
            },
            as: alias
        } )
    }
}