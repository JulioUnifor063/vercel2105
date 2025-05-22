const express = require('express'); 
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.json({ message: 'API funcionando!' });
});
 app.get('/', (req, res) => {
    res.sendFile(path.join(  dirname, 'public', 'index.html'));
});

 if (process.env.NODE_ENV !== 'production') {
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
}
 
module.exports = app;
