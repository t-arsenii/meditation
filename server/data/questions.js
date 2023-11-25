export default [
    {
        id: 1,
        question : "Jakie są Twoje cele związane z medytacją? ",
        answers : [
            'Redukcja stresu',
            'Poprawa zdrowia psychicznego',
            'Koncentracja',
            'Inne',
        ],
        images: ['image1.png', 'image2.png', 'image3.png','image4.png']
    },
    {
        id: 2,
        question : "Czy preferujesz medytację dynamiczną czy statyczną? ",
        answers : [
            'Statyczna',
            'Dynamiczna',
        ],
        images: ['image5.png', 'image6.png']

    },
    {
        id: 3,
        question : "Jaki jest Twój poziom doświadczenia w medytacji? ",
        answers : [
            'Początkujący',
            'Średniozaawansowany',
            'Zaawansowany',
        ],
        images: ['image7.png', 'image8.png', 'image9.png']

    },
];

export const answers = [0, 1, 2];