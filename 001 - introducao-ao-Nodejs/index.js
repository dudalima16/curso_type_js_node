import http from "node:http";

const serve = http.createServer((req,res) => {
    const { url, method } = req;

    if(url === '/' && method === 'GET'){
        return res.end(JSON.stringify({
            status: 200,
            body: "Bem vindo a Home",
        }));
    }

    res.statusCode = 404;
    return res.end(
        JSON.stringify({
            status:404,
            body: "404 (Not Found)",
        })
    );  
});

serve.listen(3000, () => {
    console.log("deu bom");
});