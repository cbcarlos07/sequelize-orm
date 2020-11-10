const { DataTypes, Model} = require( 'sequelize' )
class UsuarioModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING,
            tipo_usuario_id: DataTypes.INTEGER
        }, { 
            tableName: 'usuario',
            sequelize 
        })
    }
}

module.exports = UsuarioModel