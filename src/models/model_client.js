const{DataTypes}=require("sequelize")
const database=require("../database")

const client = database.define("client",{
    
    idclient:{
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
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    html_image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{
    tableName:"client",
    timestamps:false,
})

module.exports=client
