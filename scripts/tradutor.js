const langSelect = document.getElementById('lang-select');
const translations = {
  'pt-br': {
    'Bem vindo a lojinha mais mais nordestina do Brasil': 'Bem vindo a lojinha mais mais nordestina do Brasil',
    'Sobre mim': 'Sobre mim',
    'Categorias': 'Categorias',
    'Catalogo': 'Catalogo',
    'Contato': 'Contato',
    'Sobre a loja': 'Sobre a loja',
    'Termos e condições': 'Termos e condições',
    'Política de privacidade': 'Política de privacidade',
    'Ajuda': 'Ajuda',
    'FAQ': 'FAQ',
    'Como comprar': 'Como comprar',
    'Formas de pagamento': 'Formas de pagamento',
    'Entrega': 'Entrega',
    'Trocas e devoluções': 'Trocas e devoluções',
    'Garantia': 'Garantia',
    'Suporte': 'Suporte',
  },
  'en': {
    'Bem vindo a lojinha mais mais nordestina do Brasil': 'Welcome to the most northeastern store in Brazil',
    'Sobre mim': 'About me',
    'Categorias': 'Categories',
    'Catalogo': 'Catalog',
    'Contato': 'Contact',
    'Sobre a loja': 'About the store',
    'Termos e condições': 'Terms and conditions',
    'Política de privacidade': 'Privacy policy',
    'Ajuda': 'Help',
    'FAQ': 'FAQ',
    'Como comprar': 'How to buy',
    'Formas de pagamento': 'Payment methods',
    'Entrega': 'Shipping',
    'Trocas e devoluções': 'Exchanges and returns',
    'Garantia': 'Warranty',
    'Suporte': 'Support',
    'Se aventure pelas as maravilhas da cultura nordestina': 'Discover the wonders of northeastern culture',
    'Explorar catalogo': 'Explore catalog',
    'Clique aqui para fazer login': 'Click here to login',
    'Carrinho': 'Cart',
    'Fechar': 'Close',
    'Comprar': 'Buy',
    'Adicionar ao carrinho': 'Add to cart',
    'Olá, meu nome é Andrea, e sou uma professora de artes de Recife que encontrou no artesanato uma forma de expressar minha paixão pela cultura nordestina. Esta loja é a concretização de um sonho, onde cada peça é uma celebração da nossa identidade vibrante e colorida. Desde a infância, fui fascinada pela energia e pela riqueza cultural do Nordeste. Essa admiração cresceu comigo e se entrelaçou à minha arte. Aqui, você encontrará uma variedade de artesanatos, cada um refletindo uma história única e a essência da alma nordestina.': 'Hello, my name is Andrea, and Im an art teacher from Recife who found crafts a way to express my passion for northeastern culture. This store is a dream come true, where each piece is a celebration of our vibrant and colorful identity. Since childhood, I have been fascinated by the energy and cultural richness of the Northeast. This admiration grew with me and became intertwined with my art. Here, you will find a variety of crafts, each reflecting a unique story and the essence of the northeastern soul.',
    'Como professora, sempre busquei inspirar meus alunos a explorar e criar. Agora, trago essa mesma inspiração para as minhas criações, utilizando uma diversidade de materiais e técnicas. Cada obra é feita à mão, com amor e atenção aos detalhes, pronta para levar a alegria do Nordeste para o seu lar. Seja bem-vindo à minha loja de artesanato. Aqui, cada peça não é apenas um objeto, mas um pedaço da nossa tradição, feito especialmente para você.': 'As a teacher, I have always sought to inspire my students to explore and create. Now, I bring that same inspiration to my creations, using a diversity of materials and techniques. Each work is handmade, with love and attention to detail, ready to bring the joy of the Northeast to your home. Welcome to my craft store. Here, each piece is not just an object, but a piece of our tradition, made especially for you.',
    'Esculturas': 'Sculptures',
    'Tecidos': 'Fabrics',
    'Vasos': 'Vases',
    'Brinquedos': 'Toys',
    'Quadros': 'Paintings',

  },
  // Add more languages here
};

langSelect.addEventListener('change', () => {
  const targetLang = langSelect.value;

  // Loop through each element on the page
  Array.prototype.forEach.call(document.body.childNodes, (node) => {
    // Check if the node is a text node
    if (node.nodeType === 3) {
      // Get the text content of the node
      const text = node.textContent;

      // Check if the text is a key in the translations object
      if (translations[targetLang] && translations[targetLang][text]) {
        // Update the text content with the translated text
        node.textContent = translations[targetLang][text];
      }
    } else {
      // If the node is not a text node, recursively update its child nodes
      updateTextNode(node, targetLang);
    }
  });
});

// Recursive function to update text nodes
function updateTextNode(node, targetLang) {
  Array.prototype.forEach.call(node.childNodes, (childNode) => {
    if (childNode.nodeType === 3) {
      const text = childNode.textContent;

      if (translations[targetLang] && translations[targetLang][text]) {
        childNode.textContent = translations[targetLang][text];
      }
    } else {
      updateTextNode(childNode, targetLang);
    }
  });
}