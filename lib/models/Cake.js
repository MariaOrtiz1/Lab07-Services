const pool = require("../utils/pool")

module.exports = class Cake {
    id;
    type;
    flavor;
    quantity;

    constructor(row) {
        this.id = row.id;
        this.type = row.type;
        this.flavor = row.flavor;
        this.quantity = row.quantity;
    }

    static async insert({ type, flavor, quantity }) {
        const { rows } = await pool.query(
            'INSERT INTO cakes (type, flavor, quantity) VALUES ($1, $2, $3) RETURNING *', [type, flavor, quantity]
        );

        return new Cake(rows[0])
    }
}