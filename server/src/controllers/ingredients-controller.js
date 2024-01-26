const ingredients = {
    "Grãos e Cereais": ["Arroz", "Feijão", "Farinha de Mandioca", "Milho", "Farinha de Milho", "Quinoa"],
    "Proteínas": ["Carne", "Peixe", "Frutos do Mar", "Ovos", "Queijos"],
    "Vegetais": ["Mandioca", "Tomate", "Cebola", "Alho", "Abóbora", "Batata-Doce", "Quiabo", "Pimentões", "Couve", "Abobrinha"],
    "Frutas Tropicais": ["Abacaxi", "Manga", "Maracujá", "Caju", "Acerola", "Goiaba", "Coco", "Banana", "Morango", "Melancia"],
    "Condimentos e Temperos": ["Pimenta", "Coentro", "Cebolinha", "Salsinha", "Colorau", "Cominho", "Louro", "Açafrão-da-terra", "Noz-Moscada", "Orégano"],
    "Óleos e Gorduras": ["Óleo de Soja", "Azeite de Oliva", "Óleo de Dendê", "Óleo de Coco", "Manteiga"]
}

module.exports = {
    async get(req, res) {
        return res.status(200).json({
            success: true,
            data: ingredients
        })
    }
}