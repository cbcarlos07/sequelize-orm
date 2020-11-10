const { DataTypes, Model} = require( 'sequelize' )
class TipoUsuarioModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING
        }, { 
            tableName: 'tipo_usuario',
            sequelize 
        })
    }
}

module.exports = TipoUsuarioModel