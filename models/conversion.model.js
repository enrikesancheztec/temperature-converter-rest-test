/**
 * Record of temperature conversion.
 * @constructor
 * @param {number} id - conversion id
 * @param {number} tempertatureValue - Original Temperature Value
 * @param {string} temperatureUnit - Original Temperature Unit
 * @param {number} convertedValue - Converted Temperature Value
 * @param {string} convertedUnit - Converted Temperature Unit
 * @param {Date} conversionDate - Conversion Date
 */
module.exports = (sequelize, Sequelize) => {
    const Conversion = sequelize.define("Conversion", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'conversion_id'
        },
        temperatureValue: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            field: 'temperature_value'
        },
        temperatureUnit: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'temperature_unit'
        },
        convertedValue: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            field: 'converted_value'
        },
        convertedUnit: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'converted_unit'
        },
        conversionDate: {
            type: Sequelize.DATE,
            allowNull: false,
            field: 'conversion_date'
        }
    },
    {
      tableName: 'conversions',
    }
);
  
    return Conversion;
};