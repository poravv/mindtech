const{DataTypes}=require("sequelize")
const database=require("../database")

const client_header = database.define("client_header",{
    
    idclient_header:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    subtitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{
    tableName:"client_header",
    timestamps:false,
})

module.exports=client_header
