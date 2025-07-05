import React, { useEffect, useRef } from "react";
import TitreH2 from "./titreH2";
import FaqComponent from "./FaqComponent";
import gsap from "gsap";

export default function FAQ() {
  const faqList = [
    [
      {
        title: "Est-ce que vous faites des landing pages ?",
        paragraphe:
          "Oui, nous réalisons ce qui est communément appelé des “landing pages”. Cependant, nous préférons aujourd’hui parler de “sites marketing one-page”, car ce terme reflète mieux la qualité et la complexité de notre travail.<br/><br/>Contrairement à une simple landing page, qui est souvent une page ajoutée à un site existant, nos sites marketing one-page sont des solutions conçues sur-mesure, depuis zéro, pour offrir une expérience unique et cohérente.<br/><br/>Ils intègrent des éléments essentiels comme un design soigné, une structure optimisée pour la conversion, et parfois même des fonctionnalités plus avancées, selon vos objectifs.<br/><br/>Ainsi, si vous cherchez à créer un outil puissant pour promouvoir un produit, un service ou une campagne spécifique, nous sommes parfaitement équipés pour répondre à vos besoins. Vous obtiendrez bien plus qu’une simple landing page, mais plutôt un véritable atout marketing pensé pour engager, convertir et servir votre marque.",
      },
      {
        title: "Est-ce que vous faites aussi du design produit et UI/UX ?",
        paragraphe:
          "Notre équipe est constituée de designers UI/UX ce qui nous permet de couvrir 100% de vos besoins à ce sujet. Pas besoin donc de chercher un product designer si vous souhaitez travailler avec nous !<br/><br/>Nous pouvons ajouter le design produit & UI/UX à une de nos formules à partir de 3000€ de budget, et faire uniquement le design produit sans passer par nos formules à partir de 5000€ de budget.<br/><br/>Réservez un appel avec nous via l’encart à droite pour comprendre comment nous pouvons vous aider à concevoir l’interface de votre SaaS ou application mobile.",
      },
      {
        title: "Est-ce que vos landing pages sont optimisées pour le SEO ?",
        paragraphe:
          "Nous optimisons chacune de nos pages pour le référencement Google directement sur Webflow grâce à un ensemble de bonnes pratiques qui nous permettent d’obtenir un score élevé par les outils de scoring.<br/><br/>Cependant, nous faisons le parti pris de ne pas travailler les mots-clés et le positionnement dans les recherches Google car nous rédigeons nos pages pour pousser à l’action.<br/><br/>Nous partons du principe que vous générez déjà du trafic vers votre page web et que son objectif est de CONVERTIR et non pas d’amener du trafic. Travailler sur des mots-clés créerait donc un conflit d’objectif sur la landing page.<br/><br/>Dans le cas où le référencement et la construction de pages annexes sont un enjeu pour vous, nous pouvons nous en charger grâce à nos multiples partenaires spécialistes en SEO.<br/><br/>Pour discuter de vos enjeux SEO et référencement, réservez un appel via l’encart à droite.",
      },
    ],
    [
      {
        title: "Combien de temps dure une prestation ?",
        paragraphe:
          "Nos prestations durent 3 à 5 semaines pour les bases Starter (identité de marque) et Boost (Site marketing), et 8 à 10 semaines pour le pack Take off qui combine les deux.<br/><br/>Les délais peuvent varier en fonction des aller-retours, des retouches, de changements de direction, etc. Nous pouvons garantir les délais de notre côté mais nous attendons de votre côté la plus grande réactivité possible pour les maintenir.<br/><br/>Dans le cas où vous choisissez des suppléments, les délais seront raisonnablement rallongés.<br/><br/>Réservez un appel via l’encart juste à droite afin de savoir combien de temps cela prendrait pour vous !",
      },
      {
        title: "Puis-je vous régler en plusieurs fois ?",
        paragraphe:
          "Il est bien sûr possible de régler en plusieurs fois et nous ne voulons pas que le prix ni le budget ne soient un frein pour que vous démarriez avec nous !<br/><br/>La seule chose sur laquelle nous sommes fixes sera le règlement d’un acompte de 50% pour démarrer la prestation, pour le reste nous pouvons nous adapter via un paiement en 2x, 3x ou 4x.<br/><br/>Réservez un appel via l’encart à droite afin de voir comment nous pouvons adapter nos conditions de paiement à votre cas particulier.",
      },
      {
        title: "Je suis prêt·e, comment faire pour démarrer avec vous ?",
        paragraphe:
          "Pour démarrer avec nous, rien de plus simple :<br/><br/>Procédez au paiement en 1x directement sur le site en moins de 5 minutes en cliquant sur l’offre qui vous intéresse et économisez en moyenne 10% sur la prestation.<br/><br/>Ou réservez un appel via l’encart à droite pour que nous répondions à vos dernières questions. Nous vous proposerons alors un paiement en direct (-10%) ou en plusieurs fois avec acompte de 50%.",
      },
      {
        title: "Quelles sont vos modalités de paiement ?",
        paragraphe:
          "Vous pouvez procéder au paiement via un lien sécurisé Stripe directement sur notre site et bénéficier de -10% (cliquez sur l’offre qui vous intéresse), ou bien par virement directement en appel avec nous.<br/><br/>Nous pouvons aménager les échéances de paiement en fonction de vos besoins afin que cela ne soit pas un frein pour que vous puissiez démarrer avec nous.<br/><br/>Réservez un appel via l’encart à droite pour comprendre comment cela s’applique à vous.",
      },

      {
        title: "Comment se déroule la prestation ?",
        paragraphe:
          "Dès que le paiement est enregistré, vous serez ajouté à un espace de communication où l’équipe se présentera. Vous recevrez ensuite le lien de votre portail personnel où vous pourrez suivre l’intégralité de la prestation et recevoir vos documents de manière asynchrone.<br/><br/>Suivez les étapes et le pourcentage d’avancée du projet sur l’espace, et réservez un appel à n’importe quel moment sans limite si vous avez la moindre question !<br/><br/>Pour en savoir plus sur la façon dont se déroule la prestation, réservez un appel via l’encart à droite.",
      },
    ],
  ];

  const textRef = useRef(null);
  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll("span"); // Sélectionne chaque mot

    gsap.fromTo(
      words,
      { opacity: 0, y: 50, filter: "blur(10px)" }, // Départ en bas et flou
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.08, // Décalage de 0.15s entre chaque mot
      }
    );
  }, []);
  return (
    <div
      id="faq"
      className="mx-10 md:mx-20 gap-x-10 gap-10 justify-between pb-24 lg:flex-row flex-col flex mt-72 lg:mt-80 "
    >
      <TitreH2
        textRefs={textRef}
        text1={"Vous avez"}
        text2={"une question ?"}
      />

      <div className="">
        <div className="flex gap-2 font-urbanist mb-5 text-xl font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6"
          >
            <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
          </svg>

          <h3>Oui,mais...</h3>
        </div>
        <div className="flex  flex-col gap-2">
          {faqList[0].map((item) => (
            <FaqComponent title={item.title} paragraphe={item.paragraphe} />
          ))}
        </div>
        <div className="flex gap-2 mt-12 font-urbanist mb-5 text-xl font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6"
          >
            <path
              fill-rule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <h3>Comment ca fontionne ?</h3>
        </div>
        <div className="flex  flex-col gap-2">
          {faqList[1].map((item) => (
            <FaqComponent title={item.title} paragraphe={item.paragraphe} />
          ))}
        </div>
      </div>
    </div>
  );
}
