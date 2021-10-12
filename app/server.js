import express from 'express';

const app = express();

const PORT = process.env.PORT || 3030;

let token;

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/auth/code', (req, res) => {
    console.log(req.query);
    const code = req.query?.code;
    console.log(code);
    res.send('Oauth Exchanges');
    token = "HOT TOKEN HERE!"
})

app.get('/auth/token' , (req, res) => {
  console.log(`TOKEN SET ${token}`)
  if(token){
    res.send(token)
    process.exit(0)
  }
  res.send(400);
})

app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
 })