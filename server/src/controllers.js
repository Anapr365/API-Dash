import Dash from "dash";

const client = new Dash.Client();

const retrieveByName =(nome) =>{
     return client.platform.names.resolve(`${nome}.dash`);
};

export const check = async (req, res) =>{
    const {domain} = req.query;

    const dashres = await retrieveByName(domain);

    console.log(dashres)

    return res.json({
        domain,
    });
};