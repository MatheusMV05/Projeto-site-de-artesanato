document.addEventListener("DOMContentLoaded", function() {
    const langSelect = document.getElementById('lang-select');

    const translations = {
        'pt-br': {
            'loginText': 'Clique aqui para fazer login',
            'loginHeader': 'Fazer Login',
            'usernameLabel': 'Nome de usuário',
            'passwordLabel': 'Senha',
            'loginButton': 'Fazer Login',
            'cart': 'Carrinho',
            'closeButton': 'FECHAR',
            'checkOutButton': 'COMPRAR',
            'welcome': 'Bem-vindo à lojinha mais nordestina do Brasil',
            'explore': 'Aventure-se pelas maravilhas da cultura nordestina',
            'exploreButton': 'Explorar catálogo',
            'catalog': 'Catálogo',
            'aboutMe': 'Sobre mim',
            'aboutText1': 'Olá, meu nome é Andrea, e sou uma professora de artes de Recife que encontrou no artesanato uma forma de expressar minha paixão pela cultura nordestina. Esta loja é a concretização de um sonho, onde cada peça é uma celebração da nossa identidade vibrante e colorida.',
            'aboutText2': 'Desde a infância, fui fascinada pela energia e pela riqueza cultural do Nordeste. Essa admiração cresceu comigo e se entrelaçou à minha arte. Aqui, você encontrará uma variedade de artesanatos, cada um refletindo uma história única e a essência da alma nordestina.',
            'aboutText3': 'Como professora, sempre busquei inspirar meus alunos a explorar e criar. Agora, trago essa mesma inspiração para as minhas criações, utilizando uma diversidade de materiais e técnicas. Cada obra é feita à mão, com amor e atenção aos detalhes, pronta para levar a alegria do Nordeste para o seu lar.',
            'aboutText4': 'Seja bem-vindo à minha loja de artesanato. Aqui, cada peça não é apenas um objeto, mas um pedaço da nossa tradição, feito especialmente para você.',
            'footerText': '© 2024 Lojinha da tia Andrea. Todos os direitos reservados.'
        },
        'en': {
            'loginText': 'Click here to log in',
            'loginHeader': 'Log In',
            'Adicionar ao carrinho': 'Add to cart',
            'usernameLabel': 'Username',
            'passwordLabel': 'Password',
            'loginButton': 'Log In',
            'cart': 'Cart',
            'closeButton': 'CLOSE',
            'checkOutButton': 'CHECKOUT',
            'welcome': 'Welcome to the most northeastern shop in Brazil',
            'explore': 'Venture through the wonders of northeastern culture',
            'exploreButton': 'Explore catalog',
            'catalog': 'Catalog',
            'aboutMe': 'About me',
            'aboutText1': 'Hello, my name is Andrea, and I am an art teacher from Recife who found in handicrafts a way to express my passion for northeastern culture. This store is the realization of a dream, where each piece is a celebration of our vibrant and colorful identity.',
            'aboutText2': 'Since childhood, I have been fascinated by the energy and cultural richness of the Northeast. This admiration grew with me and intertwined with my art. Here, you will find a variety of handicrafts, each reflecting a unique story and the essence of the northeastern soul.',
            'aboutText3': 'As a teacher, I have always sought to inspire my students to explore and create. Now, I bring this same inspiration to my creations, using a variety of materials and techniques. Each piece is handmade, with love and attention to detail, ready to bring the joy of the Northeast to your home.',
            'aboutText4': 'Welcome to my handicraft store. Here, each piece is not just an object, but a piece of our tradition, made especially for you.',
            'footerText': '© 2024 Lojinha da tia Andrea. All rights reserved.'
        }
    };

    const elementsToTranslate = {
        'loginText': document.querySelector('.login a'),
        'loginHeader': document.querySelector('.login-box h2'),
        'usernameLabel': document.querySelector('.login-box label[for="email"]'),
        'passwordLabel': document.querySelector('.login-box label[for="password"]'),
        'loginButton': document.querySelector('.login-box button[type="submit"]'),
        'cart': document.querySelector('.cartTab h1'),
        'closeButton': document.querySelector('.btn .close'),
        'checkOutButton': document.querySelector('.btn .checkOut'),
        'welcome': document.querySelector('#hero h1'),
        'explore': document.querySelector('#hero p'),
        'exploreButton': document.querySelector('#hero .botao'),
        'catalog': document.querySelector('#produtos h1'),
        'aboutMe': document.querySelector('#sobremim h1'),
        'aboutText1': document.querySelector('#sobremim p:nth-of-type(1)'),
        'aboutText2': document.querySelector('#sobremim p:nth-of-type(2)'),
        'aboutText3': document.querySelector('#sobremim p:nth-of-type(3)'),
        'aboutText4': document.querySelector('#sobremim p:nth-of-type(4)'),
        'footerText': document.querySelector('footer .texto p')
    };

    function translatePage(language) {
        const translation = translations[language];
        for (const [key, element] of Object.entries(elementsToTranslate)) {
            if (element) {
                element.textContent = translation[key];
            }
        }
    }

    langSelect.addEventListener('change', function() {
        translatePage(this.value);
    });

    // Inicializa com o idioma padrão
    translatePage(langSelect.value);
});
